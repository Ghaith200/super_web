// app/[locale]/contact/actions.ts
"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const phonenumber = formData.get("phone");

    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`, // Best practice: send from your own SMTP user
            to: process.env.SMTP_USER, // Sending to yourself
            replyTo: email as string, // So you can reply directly to the sender
            subject: `New Contact Form Message from ${name}`,
            text: message as string,
            html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>phonenumber:</strong> ${phonenumber}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error("SMTP Error:", error);
        return { success: false, error: "Failed to send email" };
    }
}