import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData
} from "remix";
import { useRemixI18Next } from "remix-i18next";
import remixI18n from "~/i18n.server";
import { useTranslation } from "react-i18next";

export const loader = async ({ request }) => {
  const locale = await remixI18n.getLocale(request);
  const t = await remixI18n.getFixedT(request, 'common');
  const title = t("headTitle");
  return json({ locale, title });
};

export function meta({ data }) {
  return { title: data.title };
}

export default function App() {
  const { i18n } = useTranslation();
  const { locale } = useLoaderData();
  useRemixI18Next(locale);

  return (
    <html lang={i18n.language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
