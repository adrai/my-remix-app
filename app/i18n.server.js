import { RemixI18Next } from "remix-i18next";
import { FileSystemBackend, FetchBackend } from "remix-i18next";
import i18nextOptions from "./i18nextOptions";
import { createCookie } from "@remix-run/server-runtime";

// import LocizeBackend from "i18next-locize-backend";
// class LocizeBackend {
//   constructor(options) {
//     this.locizeBackend = new LocizeBackend(options);
//   }
//   async getTranslations(namespace, locale) {
//     return new Promise((resolve, reject) => {
//       this.locizeBackend.read(locale, namespace, (err, ret) => {
//         if (err) return reject(err);
//         resolve(ret);
//       });
//     });
//   }
// }
// const backend = new LocizeBackend({
//   projectId: "my-locize-project-id"
// });

// You will need to provide a backend to load your translations, here we use the
// file system one and tell it where to find the translations.
const backend = new FileSystemBackend("./public/locales");

// const backend = new FetchBackend({
//   baseUrl: new URL("http://localhost:3000"),
//   pathPattern: "/locales/:locale/:namespace.json",
// });

export default new RemixI18Next(backend, {
  fallbackLng: i18nextOptions.fallbackLng, // here configure your default (fallback) language
  supportedLanguages: i18nextOptions.supportedLngs, // here configure your supported languages
  cookie: createCookie("locale") // check also for cookie
});
