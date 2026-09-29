# ✉️ Mail plugin for Luna Park

**Send emails from your backend** (welcome messages, notifications, receipts, password resets) by dropping a single node into your logic.

Plug in any SMTP server (Gmail, Mailgun, Postmark, Amazon SES, Brevo, your own…) and you're done.

## ✨ What you get

| | |
|---|---|
| 📤 **One node to send** | `Send Mail` takes a recipient, a subject, and a text and/or HTML body. |
| 🔌 **Any SMTP provider** | Host, port, TLS and credentials, configured once in the settings. |
| 🧪 **Safe preview** | In the editor, emails are logged to the console instead of sent, so you can test freely without spamming anyone. |
| 🔒 **Secret kept out of the code** | Your SMTP password goes to the project's `.env`, never into the generated source. |

## 🚀 Getting started

1. In Luna Park, open **Library → Install Plugins**, search for **Mail** and install it.
2. Open the plugin's **SMTP** settings and fill in:
   - **Host**, **Port** and **Use TLS** (usually `465` with TLS, or `587` without)
   - **Username** and **Password**
   - **From**: the default sender, e.g. `My App <no-reply@example.com>`
3. Add a **Send Mail** node to any backend logic (a route, a cron, a script).

## 🧩 Nodes

| Node | Side | What it does |
|---|---|---|
| `mail/send` | Backend | Send an email to `To` with a `Subject`, a plain `Text` body and an optional `HTML` body. |

> [!TIP]
> Always fill `Text` even when you send `HTML`: some mail clients only show plain text, and it helps with spam filters.

## 📦 In your deployed backend

When you build your project:

- **Runtime**: emails are sent with [nodemailer](https://nodemailer.com). The plugin and `nodemailer` are added to your backend dependencies automatically.
- **Configuration**: the SMTP settings are applied when the server starts.
- **Secret**: the password is written to the project's `.env` as `MAIL_SMTP_PASSWORD`. Change it there (or in your hosting environment) without rebuilding.

## 🛠️ Development

```bash
pnpm install
pnpm build      # build the plugin
pnpm dev        # rebuild on change
pnpm preview    # serve it to the Luna Park editor (http://127.0.0.1:2084)
```

The package ships two entries:

- `@luna-park/plugin-mail`: the editor plugin (settings and nodes).
- `@luna-park/plugin-mail/server`: the Node runtime used by the generated backend (`configureMail`, `sendMail`).

---

Made with 💙 by [Luna Park](https://luna-park.app).
