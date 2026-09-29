import type { TEnv } from "@luna-park/plugin";
import { EInjectionKey } from "@luna-park/plugin";

import type { TInternals } from "@/internals.ts";
import { serverTarget } from "@/nodes/send.ts";

import packageDefinition from "../package.json" with { type: "json" };

const passwordEnvKey = "MAIL_SMTP_PASSWORD";

export const backImports = [
    { name: packageDefinition.name, version: packageDefinition.version },
    { name: "nodemailer", version: packageDefinition.dependencies.nodemailer }
];

export function getEnv({ internals }: TEnv<never, TInternals>) {
    return { [passwordEnvKey]: internals.smtp.auth.password };
}

export function getInjections({ internals }: TEnv<never, TInternals>) {
    const settings = JSON.stringify({ ...internals.smtp, auth: { ...internals.smtp.auth, password: passwordEnvKey } })
        .replace(`"${ passwordEnvKey }"`, `process.env.${ passwordEnvKey }`);

    return {
        [EInjectionKey.ServerImport]: `import { configureMail } from "${ serverTarget }";`,
        [EInjectionKey.ServerBody]: `configureMail(${ settings });`
    };
}
