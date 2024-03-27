# Description

CRUD Admin panel. This is a web application that showcase login + CRUD

# Tech Stack

- React
- HTML
- CSS (using CSS modules)
- TypeScript
- Zustand
- Zod
- Mantine

# How to run locally

## Prerequisites

- Node.js: install guide [here](https://nodejs.org/en/download/package-manager)
- Yarn: install guide [here](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

## Steps

1. Install dependencies. In terminal run: `yarn install`
2. Create .env file in root directory. Then copy paste the contents of .env.example. This will load 1 varibles that is used to determine the API BASE URL. For your convenience, right now it is pointing to the production API. You don't need to run the API locally
3. Start development server. In terminal run: `yarn dev`

# How to deploy

This repo is connected to Vercel's CI/CD. Any git push to main branch will trigger a redeploy

# Deployment URL

Link: https://admin-crud-six.vercel.app/login
