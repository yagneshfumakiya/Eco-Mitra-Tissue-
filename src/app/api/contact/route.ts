import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, mobileNumber, email, businessType, message } = body;

    // Validate mandatory fields
    if (!fullName || !mobileNumber || !message) {
      return NextResponse.json(
        { error: 'Full name, mobile number, and message are required.' },
        { status: 400 }
      );
    }

    const recipientEmail = 'fumakiyayagnesh1998@gmail.com';

    // HTML Email Template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f9f5; margin: 0; padding: 20px; color: #1e293b; }
          .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2ece5; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #0F382C 0%, #16A34A 100%); color: #ffffff; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; }
          .header p { margin: 5px 0 0 0; opacity: 0.9; font-size: 14px; }
          .body { padding: 30px; }
          .field { margin-bottom: 20px; }
          .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #16A34A; letter-spacing: 1px; margin-bottom: 4px; }
          .value { font-size: 16px; font-weight: 600; color: #0F382C; background: #f8faf6; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #16A34A; }
          .message-box { font-size: 15px; color: #334155; background: #f8faf6; padding: 16px; border-radius: 8px; line-height: 1.6; border: 1px solid #e2ece5; }
          .footer { background: #0F382C; color: #e2ece5; padding: 20px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1>🌿 Eco Mitra</h1>
            <p>New Website Business Inquiry</p>
          </div>
          <div class="body">
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${fullName}</div>
            </div>

            <div class="field">
              <div class="label">Mobile Number</div>
              <div class="value"><a href="tel:${mobileNumber}" style="color: #0F382C; text-decoration: none;">${mobileNumber}</a></div>
            </div>

            <div class="field">
              <div class="label">Email Address</div>
              <div class="value">${email || 'Not provided'}</div>
            </div>

            <div class="field">
              <div class="label">Business Segment</div>
              <div class="value">${businessType || 'General Inquiry'}</div>
            </div>

            <div class="field">
              <div class="label">Message / Requirement</div>
              <div class="message-box">${message.replace(/\n/g, '<br/>')}</div>
            </div>
          </div>
          <div class="footer">
            Eco Mitra - Softness with Nature's Care<br/>
            Inquiry received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </div>
        </div>
      </body>
      </html>
    `;

    // Retrieve SMTP credentials from environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

    if (!smtpUser || !smtpPass) {
      console.warn(`[Eco Mitra API] SMTP_USER or SMTP_PASS missing in environment variables.`);
      console.log(`[Eco Mitra API] Received Inquiry for ${recipientEmail}:`, { fullName, mobileNumber, email, businessType, message });

      return NextResponse.json({
        success: true,
        isDemoMode: true,
        message: `Inquiry recorded! To receive live emails in ${recipientEmail}, please add your Gmail App Password to SMTP_PASS in .env.local.`,
      });
    }

    // Create Transporter & Send Mail
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Eco Mitra Website" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email || undefined,
      subject: `[Eco Mitra Inquiry] New message from ${fullName}`,
      html: htmlTemplate,
      text: `New Inquiry from ${fullName}\nMobile: ${mobileNumber}\nEmail: ${email}\nBusiness: ${businessType}\nMessage: ${message}`,
    });

    console.log(`[Eco Mitra API] Live email successfully delivered to ${recipientEmail}`);

    return NextResponse.json({
      success: true,
      isDemoMode: false,
      message: `Email notification sent successfully to ${recipientEmail}!`,
    });

  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Unknown server error';
    console.error('[Eco Mitra API] Contact form SMTP error:', errMessage);

    return NextResponse.json(
      { error: `SMTP Error: ${errMessage}. Please verify your SMTP credentials in .env.local.` },
      { status: 500 }
    );
  }
}
