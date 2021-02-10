# Introduction to Deep Learning Course

The contents are hosted by github pages at [https://rses-dl-course.github.io/](https://rses-dl-course.github.io/).

## This course is built using 

* Node & npm - Package management
* vuepress - Website 
* reveal-md - Slides
* google colab - Notebooks (python code)


## Contents

```
├── docs # The site builds to this folder for github pages
├── notebooks # Lab notebooks
│ ├── assets # Notebook-specific assets
│ └── python # Notebooks in python
├── site # Vuepress website content
│ └── .vuepress # Vuepress configs
└── slides # Location of revealjs lesson slides
    ├── assets # Slides specific assets
```

## Installation

* Install [node js](https://nodejs.org/)
* Run `npm install` to install all package dependencies


## Previewing the website 

To run the website run:

```
npm run site
```

Does not work in conjuction with the slides!

## Previewing the slides

Run the slides using:

```
npm run slides
```


## Building the entire site

Website is built to the `docs` directory for hosting on github pages.

```
npm run build
```
