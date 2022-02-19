import i18next from "i18next";
import { hydrate } from "react-dom";
import { initReactI18next } from "react-i18next";
import { RemixBrowser } from "remix";
import { RemixI18NextProvider } from "remix-i18next";
import i18nextOptions from "./i18nextOptions";

// initialize i18next using initReactI18next and configuring it
if (!i18next.isInitialized) // prevent i18next to be initialized multiple times
  i18next
    .use(initReactI18next)
    .init(i18nextOptions)
    .then(() => {
      i18next.services.backendConnector.backend = { read: () => {} } // has custom backend, but simulate this to check for ready flag in useTranslation
      // then hydrate your app wrapped in the RemixI18NextProvider
      return hydrate(
        <RemixI18NextProvider i18n={i18next}>
          <RemixBrowser />
        </RemixI18NextProvider>,
        document
      );
    });