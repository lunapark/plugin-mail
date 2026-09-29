import type { Transporter } from "nodemailer";
import { createTransport } from "nodemailer";

export type TMailSettings = {
    auth: {
        password: string;
        user: string;
    };
    from: string;
    host: string;
    port: number;
    secure: boolean;
};

export type TMail = {
    html?: string;
    subject: string;
    text?: string;
    to: string;
};

let transporter: Transporter | undefined;
let sender = "";

export function configureMail(settings: TMailSettings) {
    transporter = createTransport({
        auth: { pass: settings.auth.password, user: settings.auth.user },
        host: settings.host,
        port: Number(settings.port),
        secure: settings.secure
    });
    sender = settings.from;
}

export async function sendMail(mail: TMail) {
    if (!transporter) {
        throw new Error("Mail plugin is not configured.");
    }

    await transporter.sendMail({ from: sender, ...mail });
}
