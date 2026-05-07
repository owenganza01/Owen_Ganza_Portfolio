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
