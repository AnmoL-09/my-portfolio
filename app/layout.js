import "./globals.css";
import { DotBackground } from "@/components/DotBackground";
import { Great_Vibes } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
})

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
          <LoadingScreen />
          {children}
        </div>
      </body>
    </html>
  );
} 