import { GeistSans } from "geist/font/sans";
import { LanguageProvider } from "@/contexts/language-context";
import "./globals.css";

const geist = GeistSans;

export const metadata = {
  title: "Currency Converter",
  description: "Real-time currency conversion tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.className} bg-black text-white min-h-screen flex items-center justify-center`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
