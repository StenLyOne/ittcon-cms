export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // чтобы работали превью/иконки/видео с Cloudinary
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          // на всякий случай
          "connect-src": ["'self'", "https:", "http:"],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["https://ittcon.vercel.app/"], // адрес твоего Next.js
      headers: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      keepHeaderOnError: true,
    },
  },
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
