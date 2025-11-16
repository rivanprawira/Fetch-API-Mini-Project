import "./globals.css";
import { Jua } from "next/font/google";
import { PrimeReactClientProvider } from "./prime-react-provider";

const jua = Jua({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jua.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body>
        <PrimeReactClientProvider>{children}</PrimeReactClientProvider>
      </body>
    </html>
  );
}
