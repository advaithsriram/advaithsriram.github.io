---
title: "Visual-Guided Dual-Arm Synchronization with Decentralized Control"
layout: single
permalink: /project/dualbot
author_profile: true
card_title: "Visual-Guided Dual-Arm Synchronization"
card_summary: "Built a PyBullet simulation where a Franka Panda tracks a UR5-held object using only end-effector RGB-D feedback and PD visual servoing."
card_meta: "PyBullet · UR5 + Franka Panda · RGB-D visual servoing"
thumbnail: "/assets/images/dualbot_thumbnail.jpg"
card_tags: "robotics,computer-vision,simulation"
project_group: "additional_robotics"
project_priority: 2
---

{% include project-status.html status="Completed" %}

![](/assets/images/dualbot_thumbnail.jpg)  
*PyBullet dual-arm simulation setup with UR5 leader and Franka Panda follower.*

## Summary

Built a decentralized **dual-arm synchronization** simulation in PyBullet with two independent manipulators: a UR5 executing a precomputed object trajectory and a Franka Emika Panda tracking the moving object through an end-effector RGB-D camera. The follower robot received no joint states or control signals from the leader; synchronization was driven entirely by visual feedback.

- **Robots**: UR5 leader robot and Franka Emika Panda follower robot
- **Environment**: PyBullet 3.2.5 simulation
- **Control Loop**: 120 Hz physics simulation with 30 Hz vision/control updates
- **Perception**: RGB-D camera, HSV color segmentation, depth-based 3D error estimation
- **Control**: Axis-wise PD visual servoing with real-time inverse kinematics
- **Result**: Mean absolute tracking error stayed below **1.9 cm** across all global axes


## System Overview

The project tests whether two robot arms can coordinate without centralized state sharing. Robot A performs the manipulation task, while Robot B only observes the held object and corrects its own end-effector pose from camera-space error.

- **Robot A - UR5**: Picks up a cube using a fixed PyBullet constraint, then executes a precomputed 3D trajectory.
- **Robot B - Franka Panda**: Uses an end-effector RGB-D camera to track the cube and follow Robot A in real time.
- **Communication Model**: No direct robot-to-robot communication. Robot B tracks only what it can infer from its camera stream.

Robot A's trajectory combines alternating circular and Lissajous motion in the YZ plane with a sinusoidal X-axis component. The trajectory is discretized into **200 Cartesian waypoints**, and inverse kinematics is solved before execution to reduce runtime latency.


## Perception and Control

Robot B estimates the target object's position from the camera stream and converts that visual error into a Cartesian correction.

1. Segment the red target object using HSV thresholding.
2. Extract the largest segment centroid in image coordinates.
3. Read the corresponding depth value from the RGB-D frame.
4. Form a 3D camera-space error vector from pixel and depth error.
5. Apply a low-pass filter with smoothing factor **0.7**.
6. Compute a PD correction in camera coordinates.
7. Transform the correction into the PyBullet world frame.
8. Solve real-time IK for the Franka Panda target joint configuration.

The final controller used lower gains for lateral image-plane motion and higher gains for depth control:

| Axis | P Gain | D Gain |
| --- | ---: | ---: |
| Camera X | 0.001 | 0.0005 |
| Camera Y | 0.001 | 0.0005 |
| Camera Z / Depth | 0.25 | 0.04 |
{: .project-metric-table }


## Results

Robot B tracked the combined circular and Lissajous trajectory with stable synchronization. Errors increased near high-curvature transitions, especially when the trajectory switched between circular and figure-eight motion, but the overall tracking error remained low.

![](/assets/images/dual_robot_overlay.png)  
*Tracking overlay for the UR5 leader trajectory and Franka Panda follower trajectory.*

| Global Axis | MAE [m] | RMSE [m] |
| --- | ---: | ---: |
| X / Depth | 0.01689 | 0.02037 |
| Y / Horizontal | 0.01406 | 0.01542 |
| Z / Vertical | 0.01807 | 0.02196 |
{: .project-metric-table }

Key observations:
- The Y-axis had the lowest mean error at **1.41 cm**.
- Depth tracking was harder than planar tracking, with larger peaks along the camera line of sight.
- The 7-DOF Franka Panda provided useful redundancy for maintaining the camera pose while tracking the object.
- Relaxing the depth constraint produced smoother YZ-plane tracking, but increased depth error substantially.


## Tools and Libraries

- **PyBullet** for physics simulation, URDF loading, camera rendering, constraints, and inverse kinematics
- **RGB-D vision pipeline** for target segmentation and depth-based 3D error estimation
- **PD visual servoing** for camera-space tracking
- **UR5 and Franka Panda robot models** for dual-arm manipulation and following behavior


## Technical Takeaways

- Precomputing the leader trajectory reduced runtime load and gave the follower a repeatable dynamic target.
- Vision-only coordination can achieve centimeter-level synchronization in simulation, but depth-axis control is more sensitive to lag and noise.
- A simple PD controller is effective for bounded trajectories, but high-curvature motion introduces overshoot and oscillation.
- A PID or model-predictive controller would likely improve long-horizon stability and reduce accumulated tracking error.
