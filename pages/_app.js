import { GeistProvider, CssBaseline } from "@geist-ui/core";

export default function App({ Component, pageProps }) {
  return (
    <GeistProvider themeType={''}>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
