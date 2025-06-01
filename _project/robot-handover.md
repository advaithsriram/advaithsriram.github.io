---
title: "Bachelor Thesis: Human-to-Robot Handover of Large Objects using Pose Estimation to Overcome Hand Occlusion"
layout: single
permalink: /project/robot-handover
author_profile: true
---


### Summary

This project, which started as my bachelor thesis and was later published at ICRA 2024, focuses on enabling safe and effective **human-to-robot handovers of large objects**, particularly in scenarios where the human's hands are **occluded** by the object. Traditional handover models rely heavily on visible hand detection, which breaks down for large items. This work proposes a novel approach using **pose estimation** to infer the hand's position and generate **a complementary robot pose** that avoids physical contact.

---

### Motivation

Human-robot handovers are essential for collaborative robotics. While extensive research exists for **small-object handovers**, large objects introduce a new challenge: **occlusion of the human hand**. When hands are hidden, typical computer vision methods like MediaPipe fail, and robots risk **contact-based discomfort or safety hazards**.

Our goal was to develop a **vision-based, non-intrusive system** capable of:
- Estimating occluded hand positions,
- Predicting a full-body robot pose for safe handover,
- Running without external sensors or markers.

---

### System Overview

The system consists of three core components:

1. **Pose Estimation**: We used [AlphaPose](https://github.com/MVIG-SJTU/AlphaPose) to extract keypoints from camera frames and compute **shoulder-elbow angles** as a proxy for hand location.

2. **Model Prediction**: A custom **Deep Neural Network (DNN)** was trained to regress the robot’s full 14-arm-joint angles based on those angles.

3. **Evaluation with Multiple Cameras**: The system was tested using three camera inputs:
   - RGB camera (robot’s eyes),
   - Fisheye camera (robot’s nose),
   - [De-Fisheye](https://github.com/duducosmos/defisheye) (distortion-corrected fisheye).

---

### Methodology

- **Robot**: Tokyo Robotics’ Dry-AIREC — a dual-arm humanoid robot with 7 DOFs per arm.
- **Camera Setup**: Internal RGB and fisheye cameras mounted on the robot's face; no external sensors.
- **Dataset**: Collected from 15 participants across 80 handover scenarios, combining variations in:
  - Object shape/size (5 objects),
  - Pose (4 complementary human-robot poses),
  - Height (upper/lower),
  - Depth (near/far).
- **Data Pipeline**:
  - Capture camera frame → extract keypoints with AlphaPose → calculate 4 key angles → predict 14 robot joint angles with DNN → simulate handover in Gazebo → send joint coordinates to Dry-AIREC

---

### Key Contributions

- **Occlusion-Robust Inference**: Instead of *requiring hand visibility*, the system *inferred hand positions* from upper body pose angles, improving reliability in occluded scenarios.

- **Camera Analysis**: The De-Fisheye input provided the best trade-off between field of view and distortion, outperforming RGB-only inputs in some conditions.

- **Multimodal Extension**: In the ICRA publication, we introduced a **three-branch multimodal DNN** that additionally incorporated:
  - Object segmentation masks,
  - Intrinsic object attributes (e.g., Fourier descriptors), improving model accuracy by **17.7%** compared to the pose-only baseline.

---

### Results

- **Quantitative Metrics**:
  - Mean Absolute Error (MAE) of predicted joint angles improved significantly with the multimodal model: from ~11.2° (pose-only) to **9.19°**.
  - Success rate (based on <10° joint error) averaged over **80%**, highest for **depth** and **object size**.

- **Qualitative Evaluation**:
  - Pose predictions were visualized in simulation using Gazebo.
  - The predicted robot pose closely mirrored expected positions even under occlusion.

- **Publication**:  
  📄 *Overcoming Hand and Arm Occlusion in Human-to-Robot Handovers: Predicting Safe Poses with a Multimodal DNN Regression Model*, [ICRA 2024](https://ieeexplore.ieee.org/document/10610777)

---

### Tools and Libraries

- **AlphaPose** for keypoint detection
- **PyTorch** for DNN regression model
- **ROS Melodic + Gazebo** for simulation
- **RViz + MoveIt** for visualization and motion planning
- **De-Fisheye** for distortion correction

---

### Reflection and Future Work

This work highlighted the importance of robust pose estimation in physical human-robot interaction. Potential future directions include:
- Integrating temporal modeling (e.g. LSTM) for dynamic handovers,
- Expanding to **bidirectional handovers** (robot-to-human),
- Real-world hardware deployment beyond simulation.

---
