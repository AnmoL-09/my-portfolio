import "./globals.css";

export const metadata = {
  title: 'Anmol | Portfolio',
  description: 'Fullstack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}