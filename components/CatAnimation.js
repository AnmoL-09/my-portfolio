'use client';
import Lottie from "lottie-react";
import animationData from "@/public/cat.json";

export default function MyAnimation() {
  return (
    <div className="w-[60px] h-[50px] mr-9 mb-2">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}

