---
title: "Next-Best-View for Multi-Viewpoint Monitoring"
layout: single
permalink: /project/nbv
author_profile: true
card_title: "Multi-Agent Next-Best-View for Active Perception"
card_summary: "Implemented and benchmarked MAP-NBV against swarm control in Unity + Python to maximize scene coverage with coordinated drone viewpoints."
card_meta: "EPFL LIS · Unity + Python · Multi-agent active perception"
card_link_2_label: "Code"
card_link_2_url: "https://github.com/advaithsriram/vr-swarm-simulation"
thumbnail: "/assets/images/nbv_thumbnail.jpg"
card_tags: "robotics,computer-vision,simulation,drones"
project_group: "featured_robotics"
project_priority: 3
featured_order: 3
---

{% include project-status.html status="Completed" %}

## Summary

Implemented a Unity + Python benchmark for **multi-agent Next-Best-View (NBV)** planning, comparing MAP-NBV against potential-field swarming for active scene coverage with depth-camera drones. The system evaluates how viewpoint planning, swarm size, and camera sampling frequency affect mesh visibility, trajectory length, and mission duration in partially observed environments.

- **Repository**: [GitHub](https://github.com/advaithsriram/vr-swarm-simulation){:target="_blank" rel="noopener noreferrer"}
- **Supporting Repository**: [GitHub](https://github.com/advaithsriram/pointr-nbv-advaith){:target="_blank" rel="noopener noreferrer"}
- **Objective**: Compare the performance of multi-agent NBV methods with swarming algorithms for scene observation 
- **Lab**: Laboratory of Intelligent Systems (LIS), EPFL  
- **Key Technologies**: Multi-Agent Next-Best-View, Olfati-Saber swarming Algorithm, Next-Best-View (NBV), Point Cloud Completion Models
- **Tech Stack**: C#, Unity-3D, Python






## Motivation

Robotic inspection and monitoring tasks often operate in partially observable and dynamically changing environments. Traditional coverage strategies either rely on precomputed viewpoints or naive exploration methods that are inefficient and computationally expensive.

The key research challenge is:

> How can a robot autonomously determine *where to move next* to reduce uncertainty and improve environmental understanding?

This project addresses that gap by implementing a Next-Best-View strategy and compares its performance to a traditional swarm-based algorithm, addressing the question:

> How well does a potential-field swarming algorithm perform on next-best-view tasks?



## Approach

Implemented the system as a modular Unity simulation framework with external Python processing for point clouds, completion, and viewpoint selection.

### System Overview

All experiments were conducted in a Unity-based simulation environment, where multiple aerial drones equipped with depth cameras observe textured 3D object models. Each drone operates as an independent agent while exchanging data with an external processing module through a shared memory interface. This design decouples perception and decision-making from simulation, enabling flexible integration of different control and planning algorithms.

### Technical Implementation

#### 1. Multi-Agent Next-Best-View Planning (MAP-NBV)
MAP-NBV is a decentralized, prediction-guided NBV framework designed for active 3D object reconstruction using multiple agents. Each drone incrementally observes the scene using onboard RGB-D sensors and shares its observations with neighboring agents, enabling coordinated viewpoint selection that maximizes information gain while reducing redundant coverage.

At each iteration, each drone captures a depth image of the scene, and a segmentation mask isolates the object of interest. The masked depth image is reprojected into a partial 3D point cloud. Point clouds from all agents are fused into a shared partial observation, then passed to a point cloud completion network based on **PoinTr** to predict the complete point cloud. The information gain at each candidate viewpoint is calculated, and each agent selects its next best viewpoint using a sequential greedy algorithm.

<div class="video-wrapper">
  <video controls muted>
    <source src="/assets/videos/NBV-compressed.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p>MAP-NBV Implementation</p>
</div>

#### 2. Swarming-Based Multi-Agent Control (Olfati-Saber)
In contrast to NBV-based planning, swarming algorithms coordinate multiple agents using local interaction rules rather than explicit optimization of information gain. The Olfati-Saber swarming algorithm computes a desired acceleration for each agent as a weighted sum of interaction forces that regulate inter-agent spacing, velocity alignment, collision avoidance, and obstacle avoidance. The control law is fully distributed and scalable with the number of agents.

#### 3. Visibility Metric
To quantitatively evaluate scene observability without requiring full 3D reconstruction, a mesh surface visibility metric based on point cloud coverage is employed. The metric measures how much of the ground-truth object surface is represented by the reconstructed point cloud accumulated from drone depth measurements.



## Results

- **Key Findings**: 
  - NBV planning achieves comparable mesh visibility to swarm-based exploration using fewer information-rich observations. However, this comes at the expense of longer execution times and increased trajectory lengths
  - Diminishing returns analysis showed both approaches have saturation effects (drone count, camera sampling frequency, NBV iterations)


The experiments were conducted using five random 3D house models from the House3K dataset which contains over 3000 textured houses of varying shapes and complexities. 

### Qualitative Analysis

Under the MAP-NBV strategy, drones follow longer, irregular trajectories with significant lateral and vertical motion as they relocate to discrete NBV positions. This results in higher total distance and mission duration but fewer image captures. Under the swarming-based approach drones maintain formation using local interaction rules, producing smoother, more direct trajectories with shorter path lengths and reduced traversal time. However, periodic image capture throughout motion yields more observations.

![](/assets/images/NBV-trajectory.png)  
*3D drone trajectories for MAP-NBV and swarming-based control around a house model with 4 drones.*

Qualitatively, the unseen regions are primarily confined to geometrically challenging structures, such as roof overhangs and recessed surfaces, which are difficult to observe from the predominantly horizontal viewing angles produced by the swarm trajectories. These missed regions are spatially localized and correspond to surfaces that remain occluded throughout the swarm traversal.

![](/assets/images/NBV-qualitative.png)  
*Binary observability visualization of unseen surface regions. Blue: Seen; Red: Unseen*

### Quantitative Analysis
For the swarm-based approach, mesh visibility increases sharply when moving from a single drone to a two-drone swarm, rising from approximately 40% to over 80% coverage across all camera sampling intervals. Adding a third drone further improves visibility to approximately 85%, after which gains become progressively smaller. There are diminishing returns in mesh visibility as additional drones are added

![](/assets/images/swarm-diminishing.png)  
*Mesh Visibility vs. Number of Drones in the swarm-based approach*

For the NBV-based approach, visibility increases consistently as the number of drones grows, particularly for lower drone counts. However, the marginal gain per additional drone decreases beyond approximately five to six drones, with improvements falling below 2–3% for higher swarm sizes.

![](/assets/images/NBV-diminishing.png)  
*Mesh Visibility vs. Number of Drones in the NBV-based approach*






## Tools and Libraries

- **Unity 3D & C#**: Core simulation engine and agent physics.
- **Python**: Point-cloud processing and MAP-NBV implementation
- **PoinTr**, **MAP-NBV**: Open-source libraries implemented for the project




## Possible Extensions

- Fine-tuning PoinTr point cloud completion model could significantly improve NBV planning performance
- Evaluating performance on more complex architectural structures with self-occlusions and deep recesses could further clarify the strengths and limitations of both methods
- A unified approach combining NBV planning and swarm-based exploration could combine the strengths of both methods


---
