import Layout from "components/Layout";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "react-calendar/dist/Calendar.css";
import "react-modern-drawer/dist/index.css";
import "react-vertical-timeline-component/style.min.css";
import "ress";
import "styles/globals.scss";
import "styles/mq-settings.scss";
import "swiper/css";
import "swiper/css/pagination";

dayjs.locale("ja");

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? ((page): ReactNode => page);

  return (
    <>
      <DefaultSeo />
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </>
  );
}

export default MyApp;
