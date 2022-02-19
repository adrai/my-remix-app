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
import i18n from "~/i18n.server";
import { useTranslation } from "react-i18next";

export let loader = async ({ request }) => {
  let locale = await i18n.getLocale(request);
  return json({ locale });
};

export function meta() {
  return { title: "New Remix App" };
}

export default function App() {
  let { i18n } = useTranslation();
  let { locale } = useLoaderData();
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
