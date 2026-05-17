---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

{% assign featured_robotics = site.project | where_exp: "item", "item.project_group == 'featured_robotics'" | sort: "project_priority" %}
{% assign additional_robotics = site.project | where_exp: "item", "item.project_group == 'additional_robotics'" | sort: "project_priority" %}
{% assign other_projects = site.project | where_exp: "item", "item.project_group == 'other'" | sort: "project_priority" %}

## Featured Robotics Projects

<div class="featured-project-list">
{% for project in featured_robotics %}
  <article class="featured-project-item" data-tags="{{ project.card_tags }}">
    <a href="{{ project.url | relative_url }}" class="featured-project-media-link">
      <img src="{{ project.thumbnail }}" alt="{{ project.card_title | default: project.title }}" class="featured-project-media">
    </a>
    <div class="featured-project-content">
      <h3 class="featured-project-title">
        <a href="{{ project.url | relative_url }}">{{ project.card_title | default: project.title }}</a>
      </h3>
      {% if project.card_meta %}
      <p class="featured-project-meta">{{ project.card_meta }}</p>
      {% endif %}
      <p class="featured-project-summary">{{ project.card_summary }}</p>
      <p class="featured-project-links">
        [<a href="{{ project.url | relative_url }}">project page</a>]
        {% if project.card_link_2_label and project.card_link_2_url %}
        [<a href="{{ project.card_link_2_url }}" target="_blank" rel="noopener noreferrer">{{ project.card_link_2_label | downcase }}</a>]
        {% endif %}
      </p>
    </div>
  </article>
{% endfor %}
</div>

## Additional Robotics Projects

<div class="featured-project-list">
{% for project in additional_robotics %}
  <article class="featured-project-item" data-tags="{{ project.card_tags }}">
    <a href="{{ project.url | relative_url }}" class="featured-project-media-link">
      <img src="{{ project.thumbnail }}" alt="{{ project.card_title | default: project.title }}" class="featured-project-media">
    </a>
    <div class="featured-project-content">
      <h3 class="featured-project-title">
        <a href="{{ project.url | relative_url }}">{{ project.card_title | default: project.title }}</a>
      </h3>
      {% if project.card_meta %}
      <p class="featured-project-meta">{{ project.card_meta }}</p>
      {% endif %}
      <p class="featured-project-summary">{{ project.card_summary }}</p>
      <p class="featured-project-links">
        [<a href="{{ project.url | relative_url }}">project page</a>]
        {% if project.card_link_2_label and project.card_link_2_url %}
        [<a href="{{ project.card_link_2_url }}" target="_blank" rel="noopener noreferrer">{{ project.card_link_2_label | downcase }}</a>]
        {% endif %}
      </p>
    </div>
  </article>
{% endfor %}
</div>

## Other Projects

<div class="featured-project-list">
{% for project in other_projects %}
  <article class="featured-project-item" data-tags="{{ project.card_tags }}">
    <a href="{{ project.url | relative_url }}" class="featured-project-media-link">
      <img src="{{ project.thumbnail }}" alt="{{ project.card_title | default: project.title }}" class="featured-project-media">
    </a>
    <div class="featured-project-content">
      <h3 class="featured-project-title">
        <a href="{{ project.url | relative_url }}">{{ project.card_title | default: project.title }}</a>
      </h3>
      {% if project.card_meta %}
      <p class="featured-project-meta">{{ project.card_meta }}</p>
      {% endif %}
      <p class="featured-project-summary">{{ project.card_summary }}</p>
      <p class="featured-project-links">
        [<a href="{{ project.url | relative_url }}">project page</a>]
        {% if project.card_link_2_label and project.card_link_2_url %}
        [<a href="{{ project.card_link_2_url }}" target="_blank" rel="noopener noreferrer">{{ project.card_link_2_label | downcase }}</a>]
        {% endif %}
      </p>
    </div>
  </article>
{% endfor %}
</div>
