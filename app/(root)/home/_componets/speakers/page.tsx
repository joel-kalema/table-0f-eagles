"use client"

import { useState } from "react";
import { Prompt, Syncopate } from "next/font/google";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";


const prompt = Prompt({
  subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
  weight: '800'
})

const subTitle = Syncopate({
  subsets: ['latin'],
  weight: '700'
})

const speakers = [
  {
    name: "BELEKE",
    url: "/beleke.jpeg"
  },
  {
    name: "Eddie James",
    url: "/speaker01.jpeg"
  },
  {
    name: "Kofi Dartey",
    url: "/speaker02prime.jpeg"
  },
  {
    name: "BELEKE",
    url: "/beleke.jpeg"
  }
]

export default function Speakers() {
  const [isLoading, setLoading] = useState(true);
  gsap.registerPlugin(ScrollTrigger);

  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const elements = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0
    }, {
      translateX: "-300vw",
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "3000 top",
        scrub: 0.6,
        pin: true,
      }
    });
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="w-4/6 mx-auto mb-[12rem] pt-20">
      <h1 className={`${prompt.className} text-6xl mb-10`}>SPEAKERS</h1>
      <div className="border-dashed border-[1px] border-[#9b9a96] overflow-hidden">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="pl-20 pt-20 w-[400vw] h-[100vh] flex justify-between items-center flex-row relative">
            {
              speakers.map((item, index) => (
                <div ref={elements} key={index} className="flex items-center w-1/4">
                  <div className="w-2/5 relative">
                    <Image src={item.url} alt="beleke" loading="lazy" layout="responsive" width={500} height={500} quality={80}
                      className={`
                    duration-700 ease-in-out group-hover:opacity-75
                    ${isLoading
                          ? "scale-110 blur-2xl grayscale"
                          : "scale-100 blur-0 grayscale-0"
                        })`}
                      onLoadingComplete={() => setLoading(false)}
                    />
                    <p className="absolute bottom-2 right-[-2rem] text-9xl mix-blend-difference border border-[#fff]">{index+1}</p>
                  </div>
                  <div className="w-3/6">
                    <h2>Pastor</h2>
                    <p className={`${subTitle.className} text-5xl text-[#d3b975]`}>{item.name}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}