require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SMTP_HOST = process.env.SMTP_HOST || "smtp.hostinger.com";
const SMTP_PORT = process.env.SMTP_PORT || 465; // Use 587 for TLS
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

if (!SMTP_USER || !SMTP_PASS) {
  console.error("❌ SMTP_USER or SMTP_PASS is missing! Add it to .env");
  process.exit(1);
}

// Nodemailer transporter for Hostinger SMTP
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT == 465, // true for SSL, false for TLS
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { to, subject, html } = req.body;

  if (!to || !subject || !html) {
    return res.status(400).json({ success: false, error: "Missing email fields" });
  }

  try {
    const info = await transporter.sendMail({
      from: 'sachin@code-crush.dev', // Your business email
      to,
      subject,
      html,
    });

    console.log("✅ Email sent:", info.messageId);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
