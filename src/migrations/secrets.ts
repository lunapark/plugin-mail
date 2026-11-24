import type { TEnv } from "@luna-park/plugin";
import { getPluginSecretEnvName } from "@luna-park/plugin";

import type { TConfig } from "@/config.ts";
import { secretNames } from "@/config.ts";
import type { TInternals } from "@/internals.ts";

export async function migrateSecrets({ internals, secrets }: TEnv<TConfig, TInternals>) {
    const { password } = internals.smtp.auth;

    if (password && secrets?.available) {
        await secrets.set(secretNames.smtpPassword, password);
        delete internals.smtp.auth.password;
    }
}

export function getLegacySecretEnv({ internals }: TEnv<TConfig, TInternals>) {
    const { password } = internals.smtp.auth;
    return password ? { [getPluginSecretEnvName("mail", secretNames.smtpPassword)]: password } : {};
}
