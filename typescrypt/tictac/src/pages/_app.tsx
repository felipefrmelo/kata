import type { AppProps } from "next/app";
import { ReactNode } from "react";
import "tailwindcss/tailwind.css";
import Main from "../componets/template/main";

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = function getLayout(page: ReactNode) {
    return <Main>{page}</Main>;
  };
  
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
