const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: process.env.SMTP_USER ? {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  } : undefined,
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER;

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: toEmail,
      subject: `Owen_Ganza_Portfolio contact from ${name}`,
      text: message,
      html: `<p>${message.replace(/\n/g, '<br/>')}</p><hr/><p>From: ${name} &lt;${email}&gt;</p>`,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
