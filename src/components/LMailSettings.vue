<template>
    <div class="mail-settings">
        <h2>SMTP server</h2>
        <span class="description">
            The server used to send emails from your backend. In the editor preview, emails are logged instead of sent.
        </span>
        <div class="row">
            <LInput
                v-model="internals.smtp.host"
                borderless
                label="Host"
                placeholder="smtp.example.com"
            />
            <LInput
                v-model="internals.smtp.port"
                borderless
                label="Port"
                placeholder="465"
            />
            <div class="secure">
                <label class="label">Use TLS</label>
                <LCheckbox
                    v-model="internals.smtp.secure"
                    borderless
                />
            </div>
        </div>
        <div class="row">
            <LInput
                v-model="internals.smtp.auth.user"
                borderless
                label="Username"
                placeholder="username"
            />
            <LInput
                v-model="internals.smtp.auth.password"
                borderless
                label="Password"
                placeholder="********"
                type="password"
            />
        </div>
        <h2>Sender</h2>
        <LInput
            v-model="internals.smtp.from"
            borderless
            label="From"
            placeholder="My App <no-reply@example.com>"
        />
    </div>
</template>

<script setup lang="ts">
import { LCheckbox, LInput } from "@luna-park/design";

import { internals } from "@/internals.ts";
</script>

<style scoped>
.mail-settings {
    padding: var(--length-s);
    display: flex;
    flex-direction: column;
    gap: var(--length-xs);

    h2 {
        font-size: var(--font-size-xs);
        text-transform: uppercase;
        font-weight: 600;
        color: var(--color-content-liter);
        margin: var(--length-s) 0 0;

        &:first-child {
            margin-top: 0;
        }
    }

    .description {
        color: var(--color-content-litest);
        font-size: var(--font-size-s);
    }

    .label {
        color: var(--color-content-lite);
    }

    .row {
        display: flex;
        gap: var(--length-xs);

        &:deep(.input) {
            flex: 1 1 auto;
        }
    }

    .secure {
        display: flex;
        flex-direction: column;
        gap: var(--length-xxs);
        font-size: var(--font-size-s);
    }
}
</style>
