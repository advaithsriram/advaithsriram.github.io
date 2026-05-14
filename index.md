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
  # actions:
  #   - label: "View My Projects"
  #     url: "/projects/"
  #   - label: "Download CV"
  #     url: "/assets/docs/AdvaithSriram-Mar2026.pdf"
excerpt: "Robotics engineer and M.Sc. Robotics student at EPFL focused on robot perception, learning-based control, active perception, and real-world deployment."

---

Robotics engineer and **M.Sc. Robotics student at EPFL** focused on **robot perception, learning-based control, active perception, and real-world deployment**.

Currently completing an industry master’s thesis at [CynLr SA](https://www.cynlr.com/) on active perception and view planning for object manipulation, and seeking full-time robotics engineering roles from **October 2026**.

<div class="selected-highlights">
  <div class="highlight-item">
    <h3>M.Sc. Robotics at EPFL</h3>
    <p>Robotics major with a Data Science minor.</p>
  </div>
  <div class="highlight-item">
    <h3>Industry Thesis at CynLr</h3>
    <p>Active perception and next-view planning for robotic manipulation.</p>
  </div>
  <div class="highlight-item">
    <h3>ICRA 2024 Publication</h3>
    <p>Published human-to-robot handover research on occlusion-robust pose prediction.</p>
  </div>
  <div class="highlight-item">
    <h3>ABB GoFa Deployment</h3>
    <p>Installed AI-driven choreography system exhibited at Swiss Design Awards 2025.</p>
  </div>
</div>

<div class="cv-download-section">
  <a href="/assets/docs/AdvaithSriram-Mar2026.pdf" class="cv-download-btn" download>
    <span class="cv-text">
      <strong>Download CV</strong>
      <small>Updated March 2026</small>
    </span>
  </a>
</div>
## Featured Projects

{% assign featured_projects = site.project | where_exp: "item", "item.featured_order != nil" | sort: "featured_order" %}
<div class="project-grid">
{% for project in featured_projects %}
  <a href="{{ project.url | relative_url }}" class="project-card">
    <img src="{{ project.thumbnail }}" alt="{{ project.card_title | default: project.title }}">
    <div class="overlay"></div>
    <div class="project-info">
      <h3>{{ project.card_title | default: project.title }}</h3>
      <p>{{ project.card_summary }}</p>
    </div>
  </a>
{% endfor %}
</div>
