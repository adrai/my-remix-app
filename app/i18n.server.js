import { RemixI18Next } from "remix-i18next";
import { FileSystemBackend, FetchBackend } from "remix-i18next";

// You will need to provide a backend to load your translations, here we use the
// file system one and tell it where to find the translations.
const backend = new FileSystemBackend("./public/locales");

// const backend = new FetchBackend({
//   baseUrl: new URL("http://localhost:3000"),
//   pathPattern: "/locales/:locale/:namespace.json",
// });

export default new RemixI18Next(backend, {
  fallbackLng: "en", // here configure your default (fallback) language
  supportedLanguages: ["en", "de"], // here configure your supported languages
});
