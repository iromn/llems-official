import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { to, subject, html, text, replyTo } = body;

        // Validate required fields
        if (!to || !subject || (!html && !text)) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create a transporter
        // Note: In production, you might want to cache this or use a singleton pattern
        const transporter = nodemailer.createTransport({
            service: process.env.SMTP_SERVICE || 'gmail', // Default to gmail if not specified
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER, // Check for explicit FROM, else use USER
            to,
            subject,
            text,
            html,
            replyTo: replyTo || undefined
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);

        return NextResponse.json({ message: 'Email sent successfully', messageId: info.messageId }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error.message },
            { status: 500 }
        );
    }
}
