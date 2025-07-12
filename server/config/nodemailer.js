import nodemailer from 'nodemailer';

// Create transporter for Brevo SMTP relay
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false, // use STARTTLS (TLS after connecting)
  auth: {
    user: process.env.SMTP_USER, // your Brevo SMTP username
    pass: process.env.SMTP_PASS, // your Brevo SMTP password
  },
  logger: true, // enable to see logs in console (optional)
  debug: true,  // show SMTP traffic (optional)
});

// Function to send email
export async function sendEmail({ from, to, subject, text, html }) {
  try {
    const info = await transporter.sendMail({
      from,    // sender address
      to,      // receiver address
      subject, // Subject line
      text,    // plain text body
      html,    // html body (optional)
    });
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // re-throw so caller can handle if needed
  }
}

export default transporter;
