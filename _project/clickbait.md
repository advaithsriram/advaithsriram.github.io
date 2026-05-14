---
title: "Clickbait Detection in YouTube Titles"
layout: single
permalink: /project/clickbait
author_profile: true
card_title: "Analysis of Clickbait in YouTube Titles"
card_summary: "Built a large-scale clickbait analysis pipeline across 72M videos, combining classification, hypothesis testing, and engagement modeling."
card_meta: "EPFL Applied Data Analysis · YouNiverse dataset · Statistical modeling"
card_link_2_label: "Code"
card_link_2_url: "https://github.com/epfl-ada/ada-2025-project-datahunt3rs"
thumbnail: "/assets/images/clickbait_thumbnail.jpg"
card_tags: "ml"
project_group: "other"
project_priority: 1
---

{% include project-status.html status="Completed" %}



## Summary

Built a large-scale data analysis pipeline for clickbait detection across YouTube metadata, combining classification, statistical testing, and regression modeling over the YouNiverse dataset. The full interactive data story with visualizations is available at our [project website](https://epfl-ada.github.io/ada-2025-project-datahunt3rs/){:target="_blank" rel="noopener noreferrer"}. 

- **Repository**: [GitHub](https://github.com/epfl-ada/ada-2025-project-datahunt3rs){:target="_blank" rel="noopener noreferrer"}.
- **Team**: Advaith Sriram, Harkeerat Singh Sawhney, Nevò Mirzai Hamadani, Sajal Chaurasia, and Dalia Somekh
- **Dataset**: YouNiverse dataset containing metadata for over 72 million videos


## Analysis Scope

The analysis focused on four questions:
- Detecting and classifying clickbait video titles within the YouNiverse dataset
- Measuring trends in clickbait usage across channels, categories, and time
- Testing whether clickbait titles correlate with higher engagement after controlling for channel and video attributes
- Modeling how channel size and category affect the relationship between clickbait usage and subscriber growth


## Methods

- Developed a clickbait classifier using a hybrid dataset with 32,000 externally labeled titles and domain-specific category data annotated with a local LLM.

- Analyzed clickbait usage over time and compared engagement distributions between clickbait and non-clickbait videos using statistical tests and visualization.

- Modeled engagement as a function of clickbait while controlling for channel subscriber count, video duration, video age, and category.

- Binned channels by subscriber count and used regression analysis to estimate how clickbait effectiveness changes with channel size and category.

## Tools and Libraries

- **Data Manipulation**: `Pandas` and `NumPy` for data processing 
- **Visualization**: `Matplotlib` and `Seaborn` for interactive trend analysis.
- **Statistical Analysis**: `Scipy`, `Scikit-learn` and `Statsmodels` for correlation testing, significance validation and regression analysis

---
