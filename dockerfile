FROM mcr.microsoft.com/playwright:v1.43.1-jammy

WORKDIR /e2e
COPY . .

RUN npm ci