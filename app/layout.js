import "./globals.css";
import { DotBackground } from "@/components/DotBackground";

export const metadata = {
  title: 'Anmol Mahobiya - Fullstack Developer',
  description: 'My Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <DotBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
} 