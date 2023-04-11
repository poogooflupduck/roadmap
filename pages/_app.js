import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [themeType, setThemeType] = useState("dark");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Component {...{switchThemes, ...pageProps}} />
    </GeistProvider>
  );
}
