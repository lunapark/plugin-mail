import { reactive } from "vue";

import type { TMailSettings } from "@/runtime.ts";

export type TInternals = {
    smtp: Omit<TMailSettings, "auth"> & {
        auth: {
            password?: string;
            user: string;
        };
    };
};

export const internals = reactive<TInternals>({
    smtp: {
        auth: {
            user: ""
        },
        from: "",
        host: "",
        port: 465,
        secure: true
    }
});
