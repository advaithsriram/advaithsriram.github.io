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
    <img src="/assets/images/ai_choreo_thumb.jpg" class="hover-img" data-hover="/assets/gifs/ai_choreo.gif" width="100%" />
    <h3>ABB x AI Driven Choreography</h3>
    <p>Mapping music to robot motion using a Variational Autoencoder (VAE)</p>
  </a>
</div>

<div class="grid__item" style="text-align: center;">
  <a href="/project/legged-rl/">
    <img src="/assets/images/legged_rl_thumb.jpg" class="hover-img" data-hover="/assets/gifs/legged_rl.gif" width="100%" />
    <h3>Reinforcement Learning for Legged Locomotion</h3>
    <p>Quadruped learns to walk on stairs and slopes with PPO</p>
  </a>
</div>

<div class="grid__item" style="text-align: center;">
  <a href="/project/aerial/">
    <img src="/assets/images/aerial_thumb.jpg" class="hover-img" data-hover="/assets/gifs/aerial_hover.gif" width="100%" />
    <h3>Aerial Robotics: Gate Navigation</h3>
    <p>Crazyflie drone navigates gates in simulation and real flight</p>
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