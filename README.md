## Project Structure

This repository uses npm workspaces and is split into two apps:

- `frontend/`: Next.js app (React UI)
- `backend/`: Node.js server (MongoDB connection)

## Getting Started

Install all dependencies from the repo root:

```bash
npm install
```

Run the frontend from the repo root:

```bash
npm run dev
```

Run backend directly:

```bash
npm run dev:backend
```

## Useful Commands

- `npm run dev:frontend` - start Next.js app
- `npm run build` - build frontend
- `npm run start` - start frontend production server
- `npm run start:backend` - start backend server
