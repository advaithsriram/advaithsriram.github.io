---
title: "Reinforcement Learning for Legged Locomotion Simulation"
layout: single
permalink: /project/legged-rl
author_profile: true
---

{% include project-status.html status="Completed" %}

## Summary

This project explored the use of **Reinforcement Learning (RL)** to train a simulated quadruped robot (Unitree A1) to walk over **challenging terrains** including slopes and stairs. Using **Proximal Policy Optimization (PPO)** and a custom controller framework, the robot learned stable locomotion strategies across uneven surfaces without relying on a reference gait. We explored the effects of different action spaces, observation spaces, and reward functions on various terrains.

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

We implemented a custom simulation and control stack for a quadruped robot to learn terrain-adaptive walking behavior via PPO. The system included:
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



## Key Learnings

- Reward shaping was critical as small changes drastically impacted stability
- Including **CPG phase and amplitude** in the observation space significantly improved terrain adaptation
- Training time increased with more complex terrain, but locomotion generalization also improved
- Cartesian-space control helped improve foothold precision on slopes



## Future Work

- Extend terrain types (e.g. gaps, obstacles)
- Transfer learned policy to real robot using domain randomization
- Add vision-based terrain awareness
- Use curriculum learning to gradually increase terrain complexity

---
