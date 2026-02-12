---
title: "Clickbait Detection in YouTube Titles"
layout: single
permalink: /project/clickbait
author_profile: true
---

{% include project-status.html status="Completed" %}



## Summary

This project analyzes clickbait patterns in YouTube video titles using data analysis techniques. The full interactive data story with visualizations is available at our [project website](https://epfl-ada.github.io/ada-2025-project-datahunt3rs/){:target="_blank" rel="noopener noreferrer"}. The code is publically available [here](https://github.com/epfl-ada/ada-2025-project-datahunt3rs){:target="_blank" rel="noopener noreferrer"}.

- **Team**: Advaith Sriram, Harkeerat Singh Sawhney, Nevò Mirzai Hamadani, Sajal Chaurasia, and Dalia Somekh
- **Dataset**: YouNiverse dataset containing metadata for over 72 million videos


## Project Overview:

In this project we addressed the following research questions:
- How can we identify and classify clickbait video titles within the YouNiverse dataset?
- What are the distribution and trends of clickbait usage across channels and over time? Do videos with clickbait titles receive higher engagement than non-clickbait videos?
- Does the effectiveness of clickbait differ across categories such as Entertainment, Education, Gaming, and News?
- Does channel size influence the impact of clickbait? For instance, do smaller creators benefit more from clickbait tactics than large, established channels?
- If you have a channel, what strategy should you employ (depending on your subscriber count and category)? How much clickbait should you use?


## Methods:

- To identify and classifier clickbait video titles we used a hybrid dataset containing an external dataset with 32,000 labeled titles and domain-specific category data which we annotated using a local LLM. We then developed a classification model to distinguish between clickbait and non-clickbait YouTube titles.

- To determine the overall impact of clickbait over time, we analyzed the distribution and trends in the usage of clickbait to identify how different channels used clickbait and to what extent. We performed normality tests on the engagement metrics and visualized the impact of clickbait using box plots to compare distributions between clickbait and non-clickbait videos.

- Next, we tested the effect of clickbait vs non-clickbait titles by category on various engagement metrics to determine whether clickbait yielded higher engagement. Engagement metrics include views, likes, dislikes, likes-to-views ratio, etc. We performed statistical hypothesis testing to determine whether the null hypothesis (of clickbait having no impact on any engagement metric) can be rejected. We then modeled the engagement as a function of clickbait, controlling for various factors such as the channel subscriber count, duration of the video and age of the video.

- We then tested whether the effectiveness of clickbait changes with channel size by merging the time series dataset with the video metadata dataset. All channels, irrespective of category, were binned into subscriber count categories: Very Small (<10K), Small (10K - 100K), Medium (100K - 500K), Large (500K - 2M), and Very Large (≥2M). We examined the audience backlash of using clickbait (through the dislike dynamics) and modeled the engagement as a function of clickbait and channel sizes. This reveals how the relative gain from clickbait evolves as channels grow.

- Finally, we examined the usage of clickbait by all channels and evaluated how their subscriber count has changed. Using the subscriber growth rate of the channel, their current size, and the category they belong to, we performed quadratic regression on clickbait ratio to determine the "Sweet Spot" for maximum channel growth. This identifies what percentage use of clickbait in video titles yields the strongest long-term performance. We can then use these results as a personalized strategy: For a specific category of videos (e.g., Gaming) and subscriber count (e.g., 50k-200k subscribers), what is the ideal amount of clickbait to use to maximize channel growth?

## Tools and Libraries

- **Data Manipulation**: `Pandas` and `NumPy` for data processing 
- **Visualization**: `Matplotlib` and `Seaborn` for interactive trend analysis.
- **Statistical Analysis**: `Scipy`, `Scikit-learn` and `Statsmodels` for correlation testing, significance validation and regression analysis

---
