import { LogicType } from "@luna-park/plugin";

export const secretNames = {
    smtpPassword: "SMTP_PASSWORD"
};

export const config = LogicType.object({
    smtpPassword: LogicType.string({ name: "SMTP password", options: { hidden: true, secret: secretNames.smtpPassword } })
});

export type TConfig = typeof config;
