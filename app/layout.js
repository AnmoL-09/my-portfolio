import "./globals.css";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: 'Anmol | Portfolio',
  description: 'Fullstack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${poppins.className} ${roboto.className} min-h-[90vh]`}>
        {children}
      </body>
    </html>
  );
}