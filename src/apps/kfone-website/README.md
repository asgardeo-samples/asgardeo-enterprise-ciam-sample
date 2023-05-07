# Kfone website

Website of the Kfone demo telecommunication company. This includes;
  - Kfone landing page
  - My Kfone self service app
  - Enterprise user interactions
    - Downloading a whitepaper
    - Registering a webinar

## Prerequisites

Install Node.JS LTS from https://nodejs.org/en/download/

Verify if you have the LTS version installed.

```bash
node -v 
npm -v 
```

## Setup

```bash
git clone https://github.com/wso2/devrel.git

git checkout Kubecon-demos

cd kfone-website
```

##### Let's setup the environment variables.

Get a copy of the `.env.example` file and rename it as `.env`. Then change the below values, as per the description provided in each .env variable.

```bash
cp .env.example .env
```

## Install Dependencies

From the project root, install dependencies using the below command.

```bash
npm install
```

## Run Application


```bash
npm start
```

The application should be up and running in port 3001 🎉
