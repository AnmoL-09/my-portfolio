'use client';
import Lottie from "lottie-react";
import animationData from "@/public/Astronaut.json";

export default function MyAnimation() {
  return (
    <div style={{
      position: "absolute",
      bottom: "2px",
      right: "2px",
      width: "350px",
      height: "350px",
      zIndex: 1,
      pointerEvents: "none"
    }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}

