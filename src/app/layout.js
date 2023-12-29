import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import GoogleAnalytic from "../components/GoogleAnalytic";

const ibm = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Calculator App",
  description: "Simulasi screen printing studio based in Yogyakarta, Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytic />
      <body className={ibm.className}>{children}</body>
    </html>
  );
}
