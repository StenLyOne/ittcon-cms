export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env.int('SMTP_PORT', 587),
        auth: { user: env('SMTP_USER'), pass: env('SMTP_PASS') },
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'noreply@yourdomain.com'),
        defaultReplyTo: env('EMAIL_REPLY', 'support@yourdomain.com'),
      },
    },
  },
});
