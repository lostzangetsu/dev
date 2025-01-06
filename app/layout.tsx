import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "Syntax Syndicate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/code.png" sizes="any" />
      <body 
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}