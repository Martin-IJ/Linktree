import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { AuthProvider } from "./context/AuthContext";
import "./globals.css";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Links",
  description: "Linktree - Safely store your link and share it with others",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`${instrumentSans.className} bg-secondary-light text-primary-light`}
        >
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
