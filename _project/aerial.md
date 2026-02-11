---
title: "Simulation and Hardware Project: Crazyflie Drone"
layout: single
permalink: /project/aerial
author_profile: true
---

{% include project-status.html status="Completed" %}

## Summary

This project involved developing a navigation pipeline for the **Bitcraze Crazyflie 2.1** nano drone to autonomously fly through a sequence of gates. In simulation, the drone detects gates using computer vision, computes their position through triangulation, and navigates a course with both precision and speed. On the real hardware, physical gate positions and dimensions were predefined, so no vision-based detection was required. The main challenge was designing a robust trajectory controller to autonomously navigate through the gate sequence using the known waypoints

- **Environment**: Webots Simulation & Real Hardware (Bitcraze Crazyflie 2.1)
- **Objective**: Navigate 2 full laps through 4 spatially placed gates  
- **Libraries**: `crazyflie-lib-python`, OpenCV, Webots API  
- **Team**: Advaith Sriram, Federico Rocca, Teo Halevi, Yugo Kadowaki, Nevò Mirzai

---

## Simulation Phase

Using **Webots**, we simulated a randomized gate course in 3D space. The drone’s onboard camera captured images of the environment, and gates were detected using a **color-based segmentation + contour detection** pipeline.

- Triangulation was used to compute gate position from edge and center points
- Navigation was done by computing entry and exit vectors, rather than passing through the center, to improve robustness
- Multiple laps were executed, with the first lap for detection and mapping, and subsequent laps optimized for speed


![](/assets/images/sim_setup.png)  
*Gate setup for simulation project*


---

## Hardware Implementation

After successful simulation tests, the codebase was adapted to work with the **Crazyflie 2.1** drone:

- Interfaced with the drone via the **`crazyflie-lib-python`** library
- Flight commands were executed in real-time from a ground station
- Navigation setpoints were set with entry/exit points rather than gate centers for improved robustness


![](/assets/images/hardware_setup.png)  
*Gate setup and strategy for hardware testing*


---

## Demo Video

<div class="video-wrapper">
  <video controls>
    <source src="/assets/videos/aerial_hardware.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p>Hardware demo: Crazyflie navigating a gate sequence</p>
</div>

---

## Tools and Libraries

- **crazyflie-lib-python** for controlling the drone in hardware mode  
- **Webots** for drone simulation and simulation world setup  
- **OpenCV** for gate detection using color segmentation and contour filtering  
- **Python** for all integration, logic, and visual processing scripts

---

## Key Takeaways

- **Gate detection via entry/exit vectors** significantly improved robustness compared to center-only targeting  
- Successfully adapted simulation pipeline for real-world hardware execution  

---