"use client"

import { gsap } from "gsap";
import TextAbout from "./_componets/text";
import Timer from "@/components/count/timer";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { Prompt } from "next/font/google";

const prompt = Prompt({
  subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
  weight: '800'
})

export default function HomePage() {
  const menuItemRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (menuItemRef.current) {
      const tl = gsap.timeline();
      tl.from(menuItemRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 2,
        delay: 0.5,
        stagger: {
          amount: 0.7,
        }
      });
    }
  });

  return (
    <div className="flex justify-center items-center px-32 home">
      <div ref={menuItemRef}>
        <div className="mt-[10rem] text-center">
          <h1 className={`${prompt.className} font-bold text-6xl`}>TABLE OF EAGLES</h1>
          <h2 className="mt-6 ">Nov 29 - Dec 01</h2>
          <Timer />
        </div>

        <TextAbout />
      </div>
    </div>
  );
}