import { faEnvelope, faServer } from "@fortawesome/pro-solid-svg-icons";
import { makePlugin } from "@luna-park/plugin";

import { backImports, getEnv, getInjections } from "@/build.ts";
import LMailSettings from "@/components/LMailSettings.vue";
import LSenderSettings from "@/components/LSenderSettings.vue";
import { internals } from "@/internals.ts";
import icon from "@/logo.svg";
import { sendNode } from "@/nodes/send.ts";

export default makePlugin({
    build: {
        backImports,
        env: getEnv,
        injections: getInjections
    },
    description: "Send emails from your backend.",
    editor: {
        nodes: [sendNode]
    },
    icon,
    id: "mail",
    internals,
    name: "Mail",
    workspace: {
        sections: [
            {
                component: LMailSettings,
                description: "The server used to send emails from your backend. In the editor preview, emails are logged instead of sent.",
                icon: faServer,
                id: "smtp",
                title: "SMTP server"
            },
            {
                component: LSenderSettings,
                description: "Address and name shown to recipients.",
                icon: faEnvelope,
                id: "sender",
                title: "Sender"
            }
        ]
    }
});
