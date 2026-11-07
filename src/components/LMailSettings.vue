<template>
    <LCard>
        <div class="fields">
            <LInput
                v-model="internals.smtp.host"
                class="host"
                label="Host"
                placeholder="smtp.example.com"
            />
            <LInput
                v-model="internals.smtp.port"
                label="Port"
                placeholder="465"
            />
            <LInput
                v-model="internals.smtp.auth.user"
                class="half"
                label="Username"
                placeholder="username"
            />
            <LInput
                v-model="internals.smtp.auth.password"
                class="half"
                label="Password"
                placeholder="********"
                type="password"
            />
        </div>
        <LSettingRow
            description="Encrypt the connection. Usually on for port 465, off for 587 and 25."
            title="Use TLS"
        >
            <LSwitch
                v-model="internals.smtp.secure"
                small
            />
        </LSettingRow>
    </LCard>
</template>

<script setup lang="ts">
import { LCard, LInput, LSettingRow, LSwitch } from "@luna-park/design";

import { internals } from "@/internals.ts";
</script>

<style scoped>
.fields {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--length-s);
    padding: var(--length-s);
    border-bottom: 1px solid var(--color-background-2);

    .host {
        grid-column: span 3;
    }

    .half {
        grid-column: span 2;
    }
}
</style>
