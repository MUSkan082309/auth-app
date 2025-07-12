export const EMAIL_VERIFY_TEMPLATE = `
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Email Verification</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Open Sans', sans-serif;
      background: #f2f4f6;
      margin: 0;
      padding: 0;
    }

    .email-container {
      max-width: 600px;
      margin: 60px auto;
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .header {
      background-color: #4C83EE;
      color: white;
      padding: 30px;
      text-align: center;
      font-size: 22px;
      font-weight: 600;
    }

    .content {
      padding: 30px;
      color: #333;
      line-height: 1.6;
    }

    .otp-box {
      margin: 20px 0;
      font-size: 28px;
      font-weight: bold;
      text-align: center;
      background-color: #22D172;
      color: white;
      padding: 14px 0;
      border-radius: 8px;
      letter-spacing: 3px;
    }

    .footer {
      text-align: center;
      font-size: 13px;
      color: #777;
      padding: 20px;
    }

    .highlight {
      color: #4C83EE;
      font-weight: 600;
    }

    @media (max-width: 600px) {
      .email-container {
        width: 90%;
        margin: 40px auto;
      }
    }
  </style>
</head>

<body>
  <div class="email-container">
    <div class="header">Verify Your Email</div>
    <div class="content">
      <p>You're almost there! Use the OTP below to verify your account linked with:</p>
      <p class="highlight">{{email}}</p>
      <p>Here’s your OTP:</p>
      <div class="otp-box">{{otp}}</div>
      <p>This OTP is valid for <strong>24 hours</strong>. Please do not share it with anyone.</p>
    </div>
    <div class="footer">
      If you didn't request this, you can safely ignore this email.
    </div>
  </div>
</body>

</html>
`;
export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Password Reset</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Open Sans', sans-serif;
      background: #f7f9fb;
      margin: 0;
      padding: 0;
    }

    .email-container {
      max-width: 600px;
      margin: 60px auto;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .header {
      background-color: #e74c3c;
      color: #fff;
      text-align: center;
      padding: 30px;
      font-size: 22px;
      font-weight: 600;
    }

    .content {
      padding: 30px;
      color: #333;
    }

    .otp-box {
      background: #22D172;
      color: #fff;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      padding: 14px 0;
      margin: 20px 0;
      border-radius: 8px;
      letter-spacing: 3px;
    }

    .footer {
      font-size: 13px;
      text-align: center;
      color: #888;
      padding: 20px;
    }

    .highlight {
      color: #e74c3c;
      font-weight: 600;
    }

    @media (max-width: 600px) {
      .email-container {
        width: 90%;
        margin: 40px auto;
      }
    }
  </style>
</head>

<body>
  <div class="email-container">
    <div class="header">Reset Your Password</div>
    <div class="content">
      <p>We received a request to reset the password for your account:</p>
      <p class="highlight">{{email}}</p>
      <p>Enter the following OTP to proceed:</p>
      <div class="otp-box">{{otp}}</div>
      <p>This OTP is valid for <strong>15 minutes</strong>. Make sure to reset your password before it expires.</p>
    </div>
    <div class="footer">
      Didn't request a reset? Just ignore this email.
    </div>
  </div>
</body>

</html>
`;
