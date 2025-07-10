import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import Now from "../components/Now";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto px-4 pt-25">
        <Header />
        <Intro />
        <Hero />
        <Now />
        <ConnectSection/>
        <Footer/>
      </div>
    </main>
  );
} 