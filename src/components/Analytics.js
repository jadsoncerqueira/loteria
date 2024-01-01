import React from "react";
import Script from "next/script";

export default function Analy() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.KEY_ANALY}`}
      ></Script>
      <Script id="google-analytics">
        {`
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ${process.env.KEY_ANALY});
    `}
      </Script>
    </>
  );
}
