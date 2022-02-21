import { json, Link, useLoaderData } from "remix";
import remixI18n from "~/i18n.server";
import { useTranslation } from "react-i18next";

export const loader = async ({ request }) => {
  return json({
    locale: await remixI18n.getLocale(request),
    i18n: await remixI18n.getTranslations(request, ["index"]),
    lngs: {
      en: { nativeName: 'English' },
      de: { nativeName: 'Deutsch' }
    }
  });
};

export default function Index() {
  const { lngs, locale } = useLoaderData();
  const { t, ready, i18n } = useTranslation("index");
  if (!ready) return 'loading translations...'; // i18next may not be ready when changing route with <Link>
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>{t('title')}</h1>
      <ul>
        <li>
          <Link to="/second">second</Link>
        </li>
      </ul>
      {Object.keys(lngs).map((lng) => (
        <Link
          key={lng}
          style={{ marginRight: 5, fontWeight: locale === lng ? 'bold' : 'normal' }}
          to={`/?lng=${lng}`}
        >
          {lngs[lng].nativeName}
        </Link>
      ))}
    </div>
  );
}
