import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET(req) {
  return NextResponse.json({ message: "Hello from API!" });
}

export async function POST(req: NextRequest) {
  try {
    const { sender, subject, text } = await req.json();

    if (!sender || !subject || !text) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    
    // send  a mail  sender to receiver
    await transporter.sendMail({
      from: sender,
      to:process.env.GMAIL_USER,
      subject:"Throu Portfolio",
      text:`senderId: ${sender}, Message: ${text}`,
    });

    // send a mail receiver to sender

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to:sender,
      subject:"Thank you",
      html:`
        <h3>Hello, Ms. ${sender}</h3>
        <p>I'll contact you within 24 hours.</p>
      `
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Email sending failed', error: error.message }, { status: 500 });
  }
}
