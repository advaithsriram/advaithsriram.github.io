---
title: "ABB x AI Driven Choreography"
layout: single
permalink: /project/ai-choreo
author_profile: true
---

## Overview

An interactive installation using the **ABB GoFa CRB 15000** robot arm, combining **AI-driven choreography** with artistic expression. The system maps music to expressive robot motion using a custom-trained Variational Autoencoder (VAE), and incorporates **real-time hand tracking** for interaction. Exhibited at the **Swiss Design Awards 2025**.

- **Exhibited**: Swiss Design Awards 2025  
- **Team**: Advaith Sriram, Emilie Grandjean & William Galand 
- **Lab**: REHAssist, EPFL  
- **Robot**: ABB CRB 15000 (GoFa)  
- **Tech Stack**: ROS 2, Python, MediaPipe, VAE, ABB RobotStudio

---

## Project Video

<div style="text-align: center;">
  <video controls width="80%">
    <source src="/assets/videos/abb_robotdance.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p><em>Robot performing music-driven choreography</em></p>
</div>

---

## AI Model: Audio to Motion

We trained a **Variational Autoencoder (VAE)** to convert audio features (MFCCs) into 6-DoF joint trajectories.

- Audio split into 3s chunks → MFCC features extracted  
- Latent vector encoded → decoded into joint positions  
- Cubic spline interpolation for smooth motion  
- Safety-aware joint scaling

![](/assets/images/vae_architecture.png)  
*VAE Architecture: MFCC → Latent Space → Joint Angles*

---

## Robot Integration

- Robot control via ROS 2 Humble  
- Real-time joint trajectory execution through ABB’s Externally Guided Motion (EGM) interface  
- Custom safety zones defined in RobotStudio for exhibition use  
- All code modularized into 3 custom packages:
  - `music_motion`
  - `hand_tracking`
  - `moveit_cpp_interface`

---

## Hand Tracking & Interaction Design

- Hand tracking with MediaPipe  
- Real-time gesture recognition (Palm Up, Down, Open)  
- Robot orients and tracks based on wrist and palm orientation  
- Camera mounted on robot end-effector  
- Due to signal issues, interactive mode was not deployed, but tested independently

![](/assets/images/hand_pose.png)  
*Hand Tracking based on Horizontal and Vertical Displacement Angles*

---

## Interactive Hand Tracking Trial (Video)

<div style="text-align: center;">
  <video controls width="80%">
    <source src="/assets/videos/abb_handtracking.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p><em>Hand-tracking demo using MediaPipe</em></p>
</div>

---

## Exhibition at Swiss Design Awards 2025

- Full system installed and exhibited in Basel from May 29th to June 17th, 2025 
- Deployed with a single-click launch script for non-technical staff  
- 40+ page user manual created  
- Costume aesthetics integrated with motion design

![](/assets/images/exhibition_view.jpeg)  
*Final exhibition setup in Basel*

---

## Tools and Libraries
- **Python** for audio processing, VAE model training, and MediaPipe-based hand tracking
- **C++** for ROS 2-based trajectory publishing and interfacing with MoveIt
- **ROS 2 Humble** for robot control, messaging, and system integration
- **ABB RobotStudio Suite** for defining safety zones and simulating robot motion
- **MediaPipe** for real-time hand tracking and gesture recognition
- **PyTorch** for building and training the Variational Autoencoder (VAE)
- **Librosa** for extracting MFCC audio features
- **RViz + MoveIt 2** for robot visualization and trajectory planning
- **OpenCV** for basic image and video processing
- **Gazebo** for early simulation and trajectory validation

<!-- ---
## Full Report

You can [read the full technical report here](/assets/docs/ai_choreo_report.pdf) -->

