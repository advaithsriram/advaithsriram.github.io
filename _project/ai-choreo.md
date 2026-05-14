---
title: "ABB x AI Driven Choreography"
layout: single
permalink: /project/ai-choreo
author_profile: true
card_title: "ABB x AI-Driven Choreography"
card_summary: "Deployed a ROS 2 + VAE motion-generation pipeline on an ABB GoFa CRB 15000 for a public installation at Swiss Design Awards 2025."
card_meta: "EPFL REHAssist · ABB GoFa CRB 15000 · ROS 2"
thumbnail: "/assets/images/aixabb_thumbnail.jpg"
card_tags: "robotics,ml,ros"
project_group: "featured_robotics"
project_priority: 1
featured_order: 1
---

{% include project-status.html status="Completed" %}


## Overview

Deployed an interactive **ABB GoFa CRB 15000** installation that generated expressive robot motion from audio using a VAE-based motion pipeline and ROS 2 control stack. The system combined music-to-motion generation, ABB RobotStudio safety configuration, and MediaPipe-based hand-tracking experiments, and was exhibited at the **Swiss Design Awards 2025**.

- **Exhibited**: Swiss Design Awards 2025  
- **Team**: Advaith Sriram, Emilie Grandjean, William Galand & Léa Pereyre
- **Lab**: REHAssist, EPFL  
- **Robot**: ABB CRB 15000 (GoFa)  
- **Tech Stack**: ROS 2, Python, MediaPipe, VAE, ABB RobotStudio



## Project Video

<div class="video-wrapper">
  <video controls>
    <source src="/assets/videos/abb_robotdance.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p>Robot performing music-driven choreography</p>
</div>



## AI Model: Audio to Motion

We trained a **Variational Autoencoder (VAE)** to convert audio features (MFCCs) into 6-DoF joint trajectories.

- Audio split into 3s chunks → MFCC features extracted  
- Latent vector encoded → decoded into joint positions  
- Cubic spline interpolation for smooth motion  
- Safety-aware joint scaling

![](/assets/images/vae_architecture.png)  
*VAE Architecture: MFCC → Latent Space → Joint Angles*



## Robot Integration

- Robot control via ROS 2 Humble  
- Real-time joint trajectory execution through ABB’s Externally Guided Motion (EGM) interface  
- Custom safety zones defined in RobotStudio for exhibition use  
- All code modularized into 3 custom packages:
  - `music_motion`
  - `hand_tracking`
  - `moveit_cpp_interface`



## Hand Tracking & Interaction Design

- Hand tracking with MediaPipe  
- Real-time gesture recognition (Palm Up, Down, Open)  
- Robot orients and tracks based on wrist and palm orientation  
- Camera mounted on robot end-effector  
- Due to signal issues, interactive mode was not deployed, but tested independently

![](/assets/images/hand_pose.png)  
*Hand Tracking based on Horizontal and Vertical Displacement Angles*



## Interactive Hand Tracking Trial (Video)

<div class="video-wrapper">
  <video controls>
    <source src="/assets/videos/abb_handtracking.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p>Hand-tracking demo using MediaPipe</p>
</div>



## Exhibition at Swiss Design Awards 2025

- Full system installed and exhibited in Basel from May 29th to June 17th, 2025 
- Packaged with a single-click launch script for non-technical staff  
- 40+ page user manual created  
- Costume aesthetics integrated with motion design

![](/assets/images/exhibition_view.jpeg)  
*Final exhibition setup in Basel*



## Tools and Libraries
- **Python** for audio processing, VAE model training, and MediaPipe-based hand tracking
- **C++** for ROS 2-based trajectory publishing and interfacing with MoveIt
- **ROS 2 Humble** for robot control, messaging, and system integration
- **ABB RobotStudio Suite** for defining safety zones and simulating robot motion
- **PyTorch** for building and training the Variational Autoencoder (VAE)
- **Librosa** for extracting MFCC audio features
- **RViz, MoveIt 2 and Gazebo** for robot visualization, trajectory planning and simulation
- **MediaPipe** for real-time hand tracking and gesture recognition

---
