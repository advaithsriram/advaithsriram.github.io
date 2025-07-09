---
layout: single
title: "Advaith Sriram"
subtitle: "Robotics Graduate Student at EPFL"
sidebar:
  nav: "main"
header:
  overlay_color: "#000"
  overlay_filter: "0.3"
  overlay_image: /assets/images/header.jpg  # optional background image
  actions:
    - label: "View My Projects"
      url: "/projects/"
    - label: "Download CV"
      url: "/assets/docs/Advaith_CV.pdf"
excerpt: "I'm passionate about robotics and AI, and am pursuing a Master's degree (M.Sc.) in Robotics with a Data Science minor"

---

Welcome to my portfolio site!

- 💡 Master’s student in Robotics at EPFL
- 🌱 Always learning and exploring new technologies in robotics and AI
- 🤖 Strong background in Python, ROS, and simulation tools like PyBullet and Webots  
- 📍 Currently working on Next Best View (NBV) planning for aerial swarms

<!-- My bachelor’s thesis was recently published as a paper at **ICRA 2024**: *Overcoming Hand and Arm Occlusion in Human-to-Robot Handovers*. [![ICRA 2024 Publication](https://img.shields.io/badge/Published%20at-ICRA%202024-blue)](https://ieeexplore.ieee.org/abstract/document/10610777){:target="_blank"} -->
My bachelor’s thesis was recently published as a paper at **ICRA 2024**: *Overcoming Hand and Arm Occlusion in Human-to-Robot Handovers*.
<a href="https://ieeexplore.ieee.org/document/10610777" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Published%20at-ICRA%202024-blue" alt="ICRA 2024 Publication Badge" />
</a>

---

## Featured Projects

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 2rem;
}

.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 220px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: scale(1.02);
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

.overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.25); /* 👈 controls the darkness */
  z-index: 1;
}

/* .project-info {
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg, rgba(0,0,0,0.7), transparent);
  color: white;
  padding: 1rem;
  width: 100%;
} */

.project-info {
  position: absolute;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(0deg, rgba(0,0,0,0.6), transparent);
  color: white;
  padding: 1rem;
  width: 100%;
}

.project-info h3 {
  margin: 0 0 0.3rem 0;
  font-size: 1.1rem;
}

.project-info p {
  margin: 0;
  font-size: 0.9rem;
}
</style>

<div class="project-grid">

  <a href="/project/ai-choreo" class="project-card">
    <img src="/assets/images/aixabb_thumbnail.jpg" alt="ABB Choreo">
    <div class="overlay"></div>
    <div class="project-info">
      <h3>ABB x AI Driven Choreography</h3>
      <p>Mapping music to robot motion using a Variational Autoencoder</p>
    </div>
  </a>

  <a href="/project/legged-rl" class="project-card">
    <img src="/assets/images/lr_thumbnail.png" alt="Legged RL">
    <div class="overlay"></div>
    <div class="project-info">
      <h3>Reinforcement Learning for Legged Locomotion</h3>
      <p>Simulated quadruped learns to walk on stairs and slopes with PPO</p>
    </div>
  </a>

  <a href="/project/robot-handover" class="project-card">
    <img src="/assets/images/bachelorthesis_thumbnail.jpg" alt="Handover">
    <div class="overlay"></div>
    <div class="project-info">
      <h3>Bachelor Thesis: Human-to-Robot Handover</h3>
      <p>Pose-estimation based handover of large objects under occlusion</p>
    </div>
  </a>

</div>
