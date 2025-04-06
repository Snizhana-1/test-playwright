FROM mcr.microsoft.com/playwright:v1.51.1-jammy

WORKDIR /e2e
COPY package*.json ./

RUN npm ci