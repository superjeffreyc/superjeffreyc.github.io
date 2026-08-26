# Jeff Chan - Personal Portfolio & Application Hub

Welcome to the repository for [superjeffc.com](https://superjeffc.com), the official personal portfolio, project directory, and web application hub for Jeff Chan, Software Engineer.

This codebase powers the central web platform showcasing interactive web applications, engineering articles, and culinary recipes.

---

## Overview & Featured Applications

The platform functions as both a software portfolio and an application portal routing visitors to specialized web applications:

### 1. Résumé Optimizer
* **URL**: [https://optimize.superjeffc.com](https://optimize.superjeffc.com)
* **Description**: An AI-powered web application built to analyze and optimize résumés for professionals. It helps users refine formatting, quantify achievements, and tailor content for competitive job markets.

### 2. Word Frog
* **URL**: [https://wordfrog.superjeffc.com](https://wordfrog.superjeffc.com)
* **Description**: An interactive browser-based word-guessing game designed to test and challenge user vocabulary with engaging gameplay mechanics.

### 3. Big Bowl
* **URL**: [https://bigbowl.superjeffc.com](https://bigbowl.superjeffc.com)
* **Description**: A digital multiplayer word party game tailored for group events, parties, and social gatherings.

### 4. Yut (Yut Nori)
* **URL**: [https://yut.superjeffc.com](https://yut.superjeffc.com) / `/yut/`
* **Description**: A modern digital adaptation of the traditional Korean board game Yut Nori, rendered for web browsers.

### 5. Recipe Collection & Blog
* **URL**: `/recipes/` & `/blog/`
* **Description**: A static-generated content engine utilizing Jekyll collections to present recipes, cooking techniques, and product reviews.

---

## Technical Stack & Architecture

* **Core Engine**: Jekyll (Ruby-based static site generator using Liquid templating)
* **Frontend Framework & Styling**: Tailwind CSS v4 with custom responsive design layouts
* **SEO & Metadata**: JSON-LD Structured Schema markup for search engine discovery, custom Open Graph metadata, WebP image asset pipeline
* **Deployment & Hosting**: GitHub Pages with custom domain routing (`superjeffc.com`) and HTTP security header rules (`_headers`)

---

## Repository Structure

```
.
├── _config.yml               # Jekyll configuration and collection definitions
├── _headers                  # Security and caching headers configuration
├── _includes/                # Reusable HTML snippets (navigation, schema)
├── _layouts/                 # Jekyll page templates (default, blog, recipe, app)
├── _posts/                   # Technical and general blog posts
├── _recipes/                 # Recipe collection content files
├── assets/                   # Static assets (images, compiled CSS, icons)
├── blog/                     # Blog landing section
├── contact.html              # Contact information page
├── index.html                # Main landing page featuring project showcase
├── package.json              # Node.js dependencies (Tailwind CSS v4)
├── recipes/                  # Recipe index page
├── src/                      # Source CSS files (Tailwind directives)
└── yut/                      # Yut game landing page
```

---

## Local Development & Setup

### Prerequisites
* **Ruby** (v3.0 or higher recommended)
* **Bundler** (`gem install bundler`)
* **Node.js** (v18 or higher recommended)

### Installation & Execution Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/superjeffc/superjeffc.github.io.git
   cd superjeffc.github.io
   ```

2. **Install Ruby Dependencies**
   ```bash
   bundle install
   ```

3. **Install Node Dependencies**
   ```bash
   npm install
   ```

4. **Run the Local Development Server**
   ```bash
   bundle exec jekyll serve --livereload
   ```

   Once started, access the local site at `http://localhost:4000`.

---

## License & Rights

Copyright (c) 2026 Jeff Chan. All rights reserved.

No part of this repository or its associated project materials may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of the owner.
