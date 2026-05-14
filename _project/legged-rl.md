---
title: "Reinforcement Learning for Legged Locomotion Simulation"
layout: single
permalink: /project/legged-rl
author_profile: true
card_title: "Reinforcement Learning for Legged Locomotion"
card_summary: "Trained PPO policies in PyBullet for a Unitree A1 quadruped to traverse slopes and stairs without a reference gait."
card_meta: "EPFL Legged Robots · PPO + PyBullet · Unitree A1"
card_link_2_label: "Code"
card_link_2_url: "https://github.com/chiaraevangelisti01/Legged_robots"
thumbnail: "/assets/images/lr_thumbnail.png"
card_tags: "robotics,ml,simulation"
project_group: "featured_robotics"
project_priority: 4
featured_order: 4
---

{% include project-status.html status="Completed" %}

## Summary

Trained **Proximal Policy Optimization (PPO)** policies for a simulated Unitree A1 quadruped in PyBullet, evaluating terrain-adaptive locomotion across slopes, stairs, and randomized terrain parameters. The controller learned stable walking behavior without relying on a reference gait, using a custom simulation and control framework.

- **Repository**: [GitHub](https://github.com/chiaraevangelisti01/Legged_robots){:target="_blank" rel="noopener noreferrer"}
- **Robot**: Unitree A1 (simulated)
- **Environment**: PyBullet
- **RL Algorithm**: PPO via Stable-Baselines3
- **Control Modes**: Joint-space, Cartesian-space, and PD control
- **Terrains**: Slopes, stairs, and gaps
- **Team**: Advaith Sriram, Chiara Evangelisti and Camille Coppieters


## Simulation Video

<div class="video-wrapper">
  <video controls muted>
    <source src="/assets/videos/lr_stair_slope_environment.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p>Learned locomotion policy navigating stairs and slopes</p>
</div>



## Project Overview

Implemented a custom simulation and control stack for terrain-adaptive quadruped locomotion via PPO. The system included:
- A tunable **PD controller** in both joint-space and Cartesian-space
- Flexible terrain generation and observation design
- An **extended observation space** including:
  - Joint angles, velocities
  - Foot contact states
  - Desired vs. actual CPG phase and amplitude

Training was performed in PyBullet, using reward shaping focused on stability, forward velocity, and foot contact accuracy.



## Reinforcement Learning Architecture

- **Policy**: The policy network was a feedforward MLP with three hidden layers of sizes 512, 256, and 128, using ELU activations
- **Observation Space**: Base Orientation (Quaternion) and Velocity, Contact Booleans and CPG phase/amplitude
- **Reward Terms**:
  - Step frequency matching
  - Forward motion velocity
  - Foot clearance and contact stability
  - Penalties for slipping or collisions

The controller learned to coordinate leg phases effectively using local sensory feedback, without explicit trajectory references.



## Evaluation and Domain Randomization

To assess and improve robustness, the policy was trained and evaluated on terrains with randomized parameters:
- **Flat Terrain**: Baseline performance assessment
- **Slopes**: Random pitch range between 0.1 m and 0.4 m
- **Stairs**:
    - Step height randomly sampled between 0.04 m and 0.075 m
    - Step width between 0.22 m and 0.28 m
    - Number of steps varied between 9 and 15

These randomized conditions ensured the policy could adapt to unseen variations in terrain geometry and maintain stability without explicit re-training.


## Tools and Libraries

- **Python** for simulation scripting, RL integration, and analysis  
- **PyBullet** for physics simulation and terrain modeling  
- **Stable-Baselines3 (PPO)** for reinforcement learning  
- **OpenAI Gym** for environment interfacing  
- **PyTorch** for policy implementation  
- **NumPy, SciPy** for math utilities and processing  
- **Matplotlib & Seaborn** for visualizing reward curves, gait plots  



## Technical Takeaways

- Reward shaping was critical as small changes drastically impacted stability
- Including **CPG phase and amplitude** in the observation space significantly improved terrain adaptation
- Training time increased with more complex terrain, but locomotion generalization also improved
- Cartesian-space control helped improve foothold precision on slopes



## Possible Extensions

- Extend terrain types (e.g. gaps, obstacles)
- Transfer learned policy to real robot using domain randomization
- Add vision-based terrain awareness
- Use curriculum learning to gradually increase terrain complexity

---
