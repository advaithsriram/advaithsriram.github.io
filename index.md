---
layout: single
title: "Advaith Sriram"
subtitle: "Robotics Graduate Student at EPFL"
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

My bachelor’s thesis was recently published as a paper at **ICRA 2024**: *Overcoming Hand and Arm Occlusion in Human-to-Robot Handovers*. [![ICRA 2024 Publication](https://img.shields.io/badge/Published%20at-ICRA%202024-blue)](https://ieeexplore.ieee.org/abstract/document/10610777)

---

## 🚀 Featured Projects

<div class="grid__wrapper">

<div class="grid__item" style="text-align: center;">
  <a href="/project/ai-choreo/">
    <img src="/assets/images/aixabb_thumbnail.jpg" class="hover-img" data-hover="/assets/images/aixabb_thumbnail.jpg" width="100%" /> <!-- change to gifs later on hover -->
    <h3>ABB x AI Driven Choreography</h3>
    <p>Mapping music to robot motion using a Variational Autoencoder (VAE)</p>
  </a>
</div>



<div class="grid__item" style="text-align: center;">
  <a href="/project/legged-rl/">
    <img src="/assets/images/lr_thumbnail.png" class="hover-img" data-hover="/assets/images/lr_thumbnail.png" width="100%" /> <!-- change to gifs later on hover -->
    <h3>Reinforcement Learning for Legged Locomotion</h3>
    <p>Simulated quadruped learns to walk on stairs and slopes with PPO</p>
  </a>
</div>

<div class="grid__item" style="text-align: center;">
  <a href="/project/robot-handover/">
    <img src="/assets/images/bachelorthesis_thumbnail.jpg" class="hover-img" data-hover="/assets/images/bachelorthesis_thumbnail.jpg" width="100%" /> <!-- change to gifs later on hover -->
    <h3>Bachelor Thesis: Human-to-Robot Handover of Large Objects</h3>
    <p>Allowing safe and effective human-to-robot handovers of large objects</p>
  </a>
</div>

</div>

<style>
.hover-img {
  transition: 0.2s ease-in-out;
}
.hover-img:hover {
  content: attr(data-hover);
}
</style>