import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Wrapper from "@/components/Wrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
