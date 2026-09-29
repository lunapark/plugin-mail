import { faEnvelope } from "@fortawesome/pro-solid-svg-icons";
import { makePlugin } from "@luna-park/plugin";
import { shallowRef } from "vue";

import { backImports, getEnv, getInjections } from "@/build.ts";
import LMailSettings from "@/components/LMailSettings.vue";
import { internals } from "@/internals.ts";
import icon from "@/logo.svg";
import { sendNode } from "@/nodes/send.ts";

export default makePlugin({
    id: "mail",
    name: "Mail",
    description: "Send emails from your backend.",
    build: {
        backImports,
        env: getEnv,
        injections: getInjections
    },
    editor: {
        nodes: [sendNode]
    },
    icon,
    internals,
    settings: [
        {
            component: shallowRef(LMailSettings),
            icon: faEnvelope,
            label: "SMTP"
        }
    ]
});
