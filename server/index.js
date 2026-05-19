const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

let transporter;

// Initialize transporter, falling back to an Ethereal test account when SMTP is not configured.
const initTransporter = async () => {
  const usingPlaceholder = !process.env.SMTP_HOST || process.env.SMTP_HOST.includes('example.com');
  if (usingPlaceholder || !process.env.SMTP_USER) {
    console.warn('SMTP not configured or using placeholder host; creating a test account (Ethereal) for development.');
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  } else {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
};

app.use(express.static(path.join(__dirname, '..', ' client', 'dist')));

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER;

  try {
    const info = await transporter.sendMail({
      from: `${name} <${email}>`,
      to: toEmail,
      subject: `Owen_Ganza_Portfolio contact from ${name}`,
      text: message,
      html: `<p>${message.replace(/\n/g, '<br/>')}</p><hr/><p>From: ${name} &lt;${email}&gt;</p>`,
    });

    // If using Ethereal (test account) nodemailer provides a preview URL.
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log('Preview email URL: %s', previewUrl);
    }

    console.log('Email sent: %s', info.messageId || '(no id)');
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

const port = process.env.PORT || 3001;

// Initialize transporter before starting the server.
(async () => {
  try {
    await initTransporter();
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Failed to initialize mail transporter:', err);
    process.exit(1);
  }
})();
