import { Geist_Mono } from "next/font/google";
import "./globals.css";

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pranshu'S HQ — 6-Agent Command Center",
  description: "Real-time 2D pixel office showing 6 AI agents working together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mono.variable} style={{ fontFamily: 'var(--font-mono), Courier New, monospace' }}>
        {children}
      </body>
    </html>
  );
}
