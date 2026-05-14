---
title: "Wordle Solver: Heuristic + Trained Strategy"
layout: single
permalink: /project/wordle
author_profile: true
card_title: "Wordle Solver: Heuristic + Trained Strategy"
card_summary: "Developed a Python solver and benchmark pipeline with a lightweight trained strategy model and 99.40% solve rate."
card_meta: "Python · Streamlit · Benchmarking"
card_link_2_label: "Code"
card_link_2_url: "https://github.com/advaithsriram/Wordle-Solver"
thumbnail: "/assets/images/wordle_thumbnail.png"
card_tags: "hobby-other,ml"
project_group: "other"
project_priority: 2
---

{% include project-status.html status="Completed" %}

## Summary

Developed a Python Wordle solver with both a heuristic baseline and a lightweight trained strategy model. The project includes an interactive Streamlit UI and a benchmark pipeline for evaluating solve performance at scale.

- **Tag**: Hobby/Other
- **Project Type**: Personal Project
- **Repository**: [GitHub](https://github.com/advaithsriram/Wordle-Solver){:target="_blank" rel="noopener noreferrer"}
- **Tech Stack**: Python, Streamlit

![](/assets/images/wordle_thumbnail.png)
*Example feedback pattern from the interactive solver interface.*


## Approach

### 1. Heuristic Solver

The baseline solver uses letter-frequency heuristics and candidate elimination:

- Candidate words are filtered by feedback
- Early turns prioritize information gain with letter-frequency-biased guesses
- Later turns exploit narrowed candidate sets

### 2. Trained Strategy Solver

A lightweight linear model scores candidate guesses using handcrafted features:

- Unique letter frequency score
- Positional letter frequency score

A random-search training routine optimizes the feature weights to improve solve rate and average number of turns.

### 3. Benchmarking

A benchmark runner simulates full games automatically and reports solve rate, average turns, and hard/unsolved words with the current strategy.

## Results

Latest benchmark summary (2026-03-27):

- **Words tested**: 2315
- **Solved within 6 turns**: 2301
- **Failed within 6 turns**: 14
- **Solve rate**: 99.40%
- **Average turns (solved words)**: 3.609

## Tools and Libraries

- **Python** for solver logic, simulation, and model training
- **Streamlit** for interactive web UI
- **JSON-based model artifact** for trained strategy weights and metrics
