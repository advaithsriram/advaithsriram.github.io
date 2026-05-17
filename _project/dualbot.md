---
title: "Learning-Based Dual-Robot 3D End-Effector Tracking"
layout: single
permalink: /project/dualbot
author_profile: true
card_title: "Learning-Based Dual-Robot Tracking"
card_summary: "Built a PyBullet dual-arm tracking system where a Franka Panda follows a UR5-held target using either a vision-servoing PD baseline or a PPO reinforcement-learning policy."
card_meta: "PyBullet · PPO + PD Baseline · UR5 + Franka Panda"
card_link_2_label: "Code"
card_link_2_url: "https://github.com/advaithsriram/dualrobot"
thumbnail: "/assets/images/dualbot_thumbnail.jpg"
card_tags: "robotics,reinforcement-learning,simulation"
project_group: "additional_robotics"
project_priority: 2
---

{% include project-status.html status="Completed" %}

![](/assets/images/dualbot_thumbnail.jpg)  
*PyBullet dual-arm simulation with a UR5 leader and Franka Panda visual tracker.*

## Summary

Built a simulated **dual-robot end-effector tracking** system in PyBullet. A UR5 picks up a red target object and drives it through a time-varying 3D trajectory, while a Franka Emika Panda tracks the moving target from its wrist-mounted RGB-D camera. The project now supports two interchangeable follower controllers: a frozen **PD visual-servoing baseline** and a learned **PPO reinforcement-learning policy**.

- **Robots**: UR5 leader and Franka Emika Panda follower
- **Repository**: [GitHub](https://github.com/advaithsriram/dualrobot){:target="_blank" rel="noopener noreferrer"}
- **Environment**: PyBullet with custom URDF assets and Gymnasium-compatible RL wrapper
- **Baseline Controller**: RGB-D visual servoing with axis-wise PD correction and inverse kinematics
- **Learning Controller**: Stable-Baselines3 PPO policy producing Cartesian end-effector displacement commands
- **Observation Design**: 17-D compact vision state
- **Evaluation**: RMSE/MAE along relative X, Y, Z


## Simulation Videos

<div class="video-wrapper">
  <video controls muted>
    <source src="/assets/videos/final_rl_xyz.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p>Final PPO policy tracking the full XYZ trajectory</p>
</div>

<div class="video-wrapper">
  <video controls muted>
    <source src="/assets/videos/pd_baseline.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p>PD visual-servoing baseline on the same dual-arm task</p>
</div>


## System Overview

The setup tests decentralized coordination between two independent robot arms. The UR5 acts as the leader and executes a precomputed motion, while the Franka acts as the follower and receives only visual information from its own end-effector camera.

- **Robot A - UR5**: grasps a red cube using a fixed PyBullet constraint, then follows a repeatable Cartesian trajectory.
- **Robot B - Franka Panda**: observes the cube through a wrist RGB-D camera and uses IK to convert Cartesian tracking commands into joint targets.
- **Communication Model**: no joint states or control signals from Robot A are passed to Robot B; the follower tracks what it can infer from vision (decentralized control)
- **Trajectory**: alternating circular and Lissajous/figure-eight Y-Z motion combined with sinusoidal X motion.

The UR5 trajectory is precomputed with inverse kinematics before execution, which keeps the target motion repeatable and reduces runtime latency during controller comparison.


## Controller Stack

The project separates target perception, tracking policy, and robot actuation so that the same simulator can run either the classical baseline or the learned policy.

```text
RGB-D camera -> red-object detection -> tracking policy -> Cartesian displacement -> IK -> Franka joints
```

### PD Baseline

A PD controller is created and tuned as a baseline. It segments the red target using HSV thresholding, reads depth at the detected target object centroid, low-pass filters the pixel/depth error, and applies an axis-wise PD correction in camera coordinates before transforming the command into the PyBullet world frame.

| Axis | P Gain | D Gain |
| --- | ---: | ---: |
| Camera X | 0.001 | 0.0005 |
| Camera Y | 0.001 | 0.0005 |
| Camera Z / Depth | 0.25 | 0.04 |
{: .project-metric-table }

The baseline achieved centimeter-level tracking on the original trajectory, with mean absolute error below **1.9 cm** across the global axes.

### PPO RL Controller

The learned controller uses PPO from Stable-Baselines3. Instead of directly consuming rendered images, the policy receives compact visual features and robot state terms, then outputs a continuous Cartesian displacement command:

```text
vision features -> PPO policy -> [dx, dy, dz] -> scaled Cartesian command -> IK
```

The action is clipped to `[-1, 1]` per axis and scaled by **0.02 m**, giving the policy bounded, smooth end-effector corrections. The same policy wrapper can run in `yz`, `x`, or `xyz` action modes, which made it possible to stage training from easier planar tracking to full 3D tracking (curriculum learning).


## Observation and Reward Design

The PPO policy uses a **17-dimensional observation vector**:

| Feature Group | Dimension |
| --- | ---: |
| Normalized pixel/depth error | 3 |
| Change in visual error | 3 |
| Detection flag, blob area, normalized depth | 3 |
| Franka end-effector velocity | 3 |
| Previous action | 3 |
| Trajectory phase sin/cos | 2 |
{: .project-metric-table }

Ground truth is used for reward calculation and evaluation, but not as a policy observation. This keeps the learned controller closer to the visual-servoing setup while still allowing precise training signals.

The reward separates planar Y-Z tracking from relative X tracking. Because the robots are physically offset along the world X axis, X is evaluated as **relative displacement**: the Franka is rewarded for matching the target's sinusoidal X motion while preserving the initial robot-to-robot spacing.

```text
r =
  - w_x_pos  * e_x_rel^2
  - w_yz_pos * e_yz^2
  - w_x_vel  * v_x_error^2
  - w_yz_vel * v_yz_error^2
  - 0.05 * ||action||^2
  - 0.20 * ||action - previous_action||^2
```

The reward also includes a small bonus for tracking error below **2 cm** and a penalty when active tracking error exceeds **45 cm**.


## Curriculum Learning

Training was staged as a simple curriculum:

1. **Y-Z curriculum policy**: train the Franka to track the circular and figure-eight motion in the image plane while masking X actions.
2. **Full XYZ fine-tuning**: initialize from the Y-Z policy, enable all action axes, and increase reward emphasis on maintaining Y-Z behavior while learning relative X tracking.

| Model | Purpose |
| --- | --- |
| `curriculum_model_rl_yz.zip` | Midway policy for planar Y-Z tracking |
| `final_model_rl_xyz.zip` | Final policy for full 3D tracking |
{: .project-metric-table }



## Results

The PD baseline provided a stable reference controller, while the PPO implementation expanded the project into a learning-based tracking framework with swappable policies, curriculum training, and robustness testing hooks.

![](/assets/images/dual_robot_overlay.png)  
*Tracking overlay for the UR5 leader trajectory and Franka Panda follower trajectory.*

| Baseline Axis | MAE [m] | RMSE [m] |
| --- | ---: | ---: |
| X / Depth | 0.01689 | 0.02037 |
| Y / Horizontal | 0.01406 | 0.01542 |
| Z / Vertical | 0.01807 | 0.02196 |
{: .project-metric-table }


## Tools and Libraries

- **PyBullet** for physics simulation, robot loading, camera rendering, constraints, and inverse kinematics
- **Gymnasium** for the reinforcement-learning environment interface
- **Stable-Baselines3 PPO** for training and deploying the learned tracking policy
- **OpenCV** for HSV color segmentation and RGB-D target detection
- **NumPy** for trajectory generation, reward computation, and metric evaluation
- **TensorBoard** for training diagnostics


## Technical Takeaways

- A well-tuned PD controller is a strong baseline for bounded visual tracking, but it becomes sensitive to depth noise, latency, and high-curvature transitions.
- Compact vision features gave PPO enough information to learn smooth tracking without the cost of image-based policy training.
- Curriculum learning made full 3D control easier: the policy first learned stable planar behavior, then adapted to the harder relative-depth component.
