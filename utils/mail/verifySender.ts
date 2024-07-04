import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

const config = useRuntimeConfig();

const smtpConfig: SMTPTransport.Options = {
  host: config.mail.verify.host,
  port: Number(config.mail.verify.port),
  secure: config.mail.verify.secure,
  auth: {
    user: config.mail.verify.auth.user,
    pass: config.mail.verify.auth.pass,
  },
};

const transporter = nodemailer.createTransport(smtpConfig);

export default async (email: string, firstname: string, token: number) => {
  const mailOptions = {
    from: `RentYourBeat - Verify <${config.mail.verify.auth.user}>`,
    to: email,
    subject: "Email Verification",
    text: `Hello ${firstname},\n\nPlease verify your email by using the following token: ${token}\n\nThank you!`, // plain text body
  };

  return await transporter.sendMail(mailOptions);
};
