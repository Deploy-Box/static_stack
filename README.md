# Static Stack

A Next.js static website template for [Deploy Box](https://deploybox.io).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is written to `out/`. This is what gets deployed to Azure Static Website hosting.

## Deployment

Handled automatically by the CD pipeline on push to `dev`, `test`, or `main`.

The pipeline:
1. Builds the Next.js static export
2. Zips and uploads source to Azure Blob Storage
3. Registers/updates the stack in the Deploy Box database via the [register-stack](https://github.com/Deploy-Box/deploy-box-platform) reusable workflow
