import type { TEnv } from "@luna-park/plugin";
import { EInjectionKey, getPluginSecretEnvName } from "@luna-park/plugin";

import type { TConfig } from "@/config.ts";
import { secretNames } from "@/config.ts";
import type { TInternals } from "@/internals.ts";
import { getLegacySecretEnv } from "@/migrations/secrets.ts";
import { serverTarget } from "@/nodes/send.ts";

import packageDefinition from "../package.json" with { type: "json" };

export const backImports = [
    { name: packageDefinition.name, version: packageDefinition.version },
    { name: "nodemailer", version: packageDefinition.dependencies.nodemailer }
];

export function getEnv(env: TEnv<TConfig, TInternals>) {
    return getLegacySecretEnv(env);
}

export function getInjections({ internals }: TEnv<TConfig, TInternals>) {
    const { auth, ...smtp } = internals.smtp;
    const settings = `{ ...${ JSON.stringify(smtp) }, auth: { password: process.env[${ JSON.stringify(getPluginSecretEnvName("mail", secretNames.smtpPassword)) }], user: ${ JSON.stringify(auth.user) } } }`;

    return {
        [EInjectionKey.ServerImport]: `import { configureMail } from "${ serverTarget }";`,
        [EInjectionKey.ServerBody]: `configureMail(${ settings });`
    };
}
