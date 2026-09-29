import { reactive } from "vue";

import type { TMailSettings } from "@/runtime.ts";

export type TInternals = {
    smtp: TMailSettings;
};

export const internals = reactive<TInternals>({
    smtp: {
        auth: {
            password: "",
            user: ""
        },
        from: "",
        host: "",
        port: 465,
        secure: true
    }
});
