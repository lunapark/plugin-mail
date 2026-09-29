# @luna-park/plugin-mail

Mail plugin for **Luna Park**. Send emails from your backend through an SMTP server.

## Settings

The **SMTP** settings tab configures the server (host, port, TLS, credentials) and the default sender (`From`).

## Visual Scripting Nodes

- `mail/send` (backend): send an email with `To`, `Subject`, `Text` and an optional `HTML` body.

In the editor preview, emails are logged to the browser console instead of being sent. In a built backend, they are sent with [nodemailer](https://nodemailer.com).

## Development

```bash
pnpm install
pnpm build
pnpm preview
```
