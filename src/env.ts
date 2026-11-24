import type { TEnv } from "@luna-park/plugin";

import type { TConfig } from "@/config.ts";
import type { TInternals } from "@/internals.ts";
import { migrateSecrets } from "@/migrations/secrets.ts";

export const env = {} as TEnv<TConfig, TInternals>;

export async function mount(pluginEnv: TEnv<TConfig, TInternals>) {
    Object.assign(env, pluginEnv);
    await migrateSecrets(pluginEnv);
}
