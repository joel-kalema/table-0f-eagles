"use client"

import TextAbout from "./_componets/text";
import Timer from "@/components/count/timer";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

import { Prompt, Syncopate } from "next/font/google";

const title = Prompt({
  subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
  weight: '800'
})

const subTitle = Syncopate({
  subsets: ['latin'],
  weight: '700'
})

export default function HomePage() {
  const menuItemRef = useRef(null);
  useGSAP(() => {
      const tl = gsap.timeline();
      tl.from(menuItemRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: {
          amount: 0.7,
        }
      });
  });

  return (
    <div className="px-32 home" id="home">
      <div className="h-[100vh] flex justify-center items-center">
        <div ref={menuItemRef} className="text-center">
          <h1 data-scroll data-scroll-speed='0.7' className={`${title.className} font-bold text-8xl mb-4`}>TABLE OF EAGLES</h1>
          <h2 data-scroll data-scroll-speed='0.5' className={`${subTitle.className} mt-6 text-[#d3b975] text-4xl`}>Nov 29 - Dec 01</h2>
          <Timer />
        </div>
      </div>
      <TextAbout />
    </div>
  );
}