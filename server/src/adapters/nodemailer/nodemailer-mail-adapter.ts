import { SendMailData } from "./../mail-adapters";
import { MailAdapter } from "../mail-adapters";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "46e05044d2608a",
    pass: "7ace27f8be9634",
  },
});
export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Leocendino Cardoso <ncardosoleo@gmail.com>",
      subject,
      html: body,
    });
  }
}
