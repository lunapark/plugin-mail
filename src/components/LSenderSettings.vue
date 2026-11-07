<template>
    <LCard>
        <div class="fields">
            <LInput
                v-model="internals.smtp.from"
                label="From"
                placeholder="My App <no-reply@example.com>"
            />
        </div>
    </LCard>
</template>

<script setup lang="ts">
import { LCard, LInput } from "@luna-park/design";

import { internals } from "@/internals.ts";
</script>

<style scoped>
.fields {
    padding: var(--length-s);
}
</style>
