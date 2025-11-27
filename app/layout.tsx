import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "nikachu.net",
  description: "nikachu.netは、nikachuが管理するドメインです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
