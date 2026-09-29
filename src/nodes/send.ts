/* eslint-disable sort-keys-custom-order/object-keys */
import { ELogicScope, LogicType, makeLogicNode } from "@luna-park/plugin";

export const serverTarget = "@luna-park/plugin-mail/server";

export const sendNode = makeLogicNode({
    name: "mail/send",
    inputs: {
        in_exec: LogicType.exec(),
        in_to: LogicType.string({ name: "To" }),
        in_subject: LogicType.string({ name: "Subject" }),
        in_text: LogicType.string({ name: "Text" }),
        in_html: LogicType.string({ name: "HTML", optional: true })
    },
    outputs: {
        out_exec: LogicType.exec()
    },
    display: {
        name: "Send Mail",
        config: {
            scope: ELogicScope.Backend
        }
    },
    documentation: {
        description: "Send an email with the SMTP server configured in the Mail settings. In the editor preview, the email is logged instead of sent."
    },
    methods: {
        async in_exec() {
            console.info("Mail not sent from the editor preview:", { html: this.in_html, subject: this.in_subject, text: this.in_text, to: this.in_to });
            await this.out_exec();
        }
    },
    build: {
        generate: () => `async function () {
            await sendMail({ html: this.in_html, subject: this.in_subject, text: this.in_text, to: this.in_to });
            await this.out_exec();
        }`,
        imports: [{ name: "sendMail", target: serverTarget }]
    }
});
