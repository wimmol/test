'use client';
import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { Telegram } from '@twa-dev/types';

declare global {
  interface Window {
    Telegram: Telegram;
  }
}
export default function Document() {
  return (
    <Html>
      <Head />
      <Script
        id="TelegramWebApp"
        src="https://telegram.org/js/telegram-web-app.js"
        onReady={() => {
          window.Telegram.WebApp.MainButton.setParams({
            text: `Hello`,
            is_visible: true,
          });
        }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
