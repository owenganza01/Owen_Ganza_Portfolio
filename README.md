# Owen_Ganza_Portfolio

This is a modern portfolio website built with React, TypeScript, and Tailwind CSS.

Repository layout (monorepo)

- `client/` — Frontend app (Vite + React)
- `server/` — Backend (Express + Nodemailer)

Quick start

1. Install dependencies (root installs both workspaces):

```bash
npm install
```

2. Start the frontend dev server:

```bash
npm run dev
```

3. Start the backend server in another terminal:

```bash
npm --workspace server start
```

Build frontend for production:

```bash
npm run build
```

Server

See `server/README.md` for server setup and SMTP environment variables.

Running locally (detailed)

From the repository root (`c:/Users/HP/OneDrive/Documents/GitHub/Owen_Ganza_Portfolio`):

- Install all dependencies (root runs workspace installs):

```bash
npm install
```

- Start the frontend dev server (Vite):

```bash
npm run dev
```

- Start the backend server in a second terminal (Express + Nodemailer):

```bash
# start from the repo root (recommended)
npm --workspace server start

# OR, from the server folder:
cd server
npm install
npm start
```

- Server environment:

Copy the example env file and fill in your SMTP credentials before starting the server:

```bash
cp server/.env.example server/.env
# edit server/.env and set SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, TO_EMAIL
```

- Build the frontend for production:

```bash
npm run build
```

Notes

- If you only want to run the frontend and not the backend, `npm run dev` from the repo root is sufficient.
- Keep real SMTP credentials secret; use environment variables in deployment.
