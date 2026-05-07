Server for handling contact form submissions using Nodemailer.

Quick start

1. Copy the example env file and fill in credentials:

```bash
cp .env.example .env
# edit .env and provide SMTP_HOST, SMTP_USER, SMTP_PASS, TO_EMAIL
```

2. Install dependencies and start server:

```bash
cd server
npm install
npm start
```

The server will listen on `http://localhost:3001` by default and expose the endpoint `POST /api/contact`.

Security note: Keep real SMTP credentials secret and prefer environment variables in deployment.
