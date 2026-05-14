---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

Curated project portfolio for robotics engineering roles, with strongest robotics deployment and research work prioritized first.

{% assign featured_robotics = site.project | where_exp: "item", "item.project_group == 'featured_robotics'" | sort: "project_priority" %}
{% assign additional_robotics = site.project | where_exp: "item", "item.project_group == 'additional_robotics'" | sort: "project_priority" %}
{% assign other_projects = site.project | where_exp: "item", "item.project_group == 'other'" | sort: "project_priority" %}

## Featured Robotics Projects

<div class="project-grid">
{% for project in featured_robotics %}
  <a href="{{ project.url | relative_url }}" class="project-card" data-tags="{{ project.card_tags }}">
    <img src="{{ project.thumbnail }}" alt="{{ project.card_title | default: project.title }}">
    <div class="overlay"></div>
    <div class="project-info">
      <h3>{{ project.card_title | default: project.title }}</h3>
      <p>{{ project.card_summary }}</p>
    </div>
  </a>
{% endfor %}
</div>

## Additional Robotics / Technical Projects

<div class="project-grid">
{% for project in additional_robotics %}
  <a href="{{ project.url | relative_url }}" class="project-card" data-tags="{{ project.card_tags }}">
    <img src="{{ project.thumbnail }}" alt="{{ project.card_title | default: project.title }}">
    <div class="overlay"></div>
    <div class="project-info">
      <h3>{{ project.card_title | default: project.title }}</h3>
      <p>{{ project.card_summary }}</p>
    </div>
  </a>
{% endfor %}
</div>

## Other Projects

<div class="project-grid">
{% for project in other_projects %}
  <a href="{{ project.url | relative_url }}" class="project-card" data-tags="{{ project.card_tags }}">
    <img src="{{ project.thumbnail }}" alt="{{ project.card_title | default: project.title }}">
    <div class="overlay"></div>
    <div class="project-info">
      <h3>{{ project.card_title | default: project.title }}</h3>
      <p>{{ project.card_summary }}</p>
    </div>
  </a>
{% endfor %}
</div>
