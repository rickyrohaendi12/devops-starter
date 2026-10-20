# DevOps Starter

A small Node.js API used to practice a full DevOps workflow.

## Pipeline

push / pull request -> run tests (GitHub Actions) -> build Docker image -> push to GitHub Container Registry (GHCR)

## Run locally

    npm install
    npm test
    npm start                      # http://localhost:3000

    docker build -t devops-starter .
    docker run -p 3000:3000 devops-starter

## Roadmap

- [x] Phase 1: automated tests + Docker image build (GitHub Actions + GHCR)
- [ ] Phase 2: deploy to AWS (free plan)
- [ ] Phase 3: infrastructure as code (Terraform)
- [ ] Phase 4: monitoring and alarms

## Architecture

(add a diagram here)
