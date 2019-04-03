---
title: Some common command for anaconda
date: "2019-04-03T00:00:00.000Z"
layout: post
draft: false
path: "/posts/anaconda-common-command/"
category: "Anaconda"
tags:
  - "Anaconda"
  - "Machine learning"
  - "Tensor flow"
description: "There are some conda command must know"
---

### Anaconda common command  
1. conda info --envs : lists all environments
2. source activate <env name> : activate an environment
3. source deactivate: deactivate an environment
4. conda list : list all packages installed
5. conda create --name <env name> python=3 astroid babel : create new environment, specify version of python, and install packages
6. WINDOWS NOTE: SOURCE is not recognized. When deactivating and activating in the anaconda command prompt, skip 'source' and just type 'deactivate' or 'activate' depending on what you are trying to do.
7. conda env export > environment.yml: export conda environment requirements list to a file
