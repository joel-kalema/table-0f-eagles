"use client"

import { useState, useRef, createRef } from "react";
import { Prompt, Syncopate } from "next/font/google";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const prompt = Prompt({
  subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
  weight: '800'
});

const subTitle = Syncopate({
  subsets: ['latin'],
  weight: '700'
});

const speakers = [
  {
    name: "Christopher Beleke Tabu",
    url: "/beleke.jpeg",
    title: "Apostle/Prophet"
  },
  {
    name: "Enmith Trejo",
    url: "/EnmithTrejo.jpeg",
    title: "Apostle"
  },
  {
    name: "Eddie James",
    url: "/speaker01.jpeg",
    title: "Apostle"
  },
  {
    name: "Kofi Dartey",
    url: "/speaker02prime.jpeg",
    title: "Apostle"
  },
  {
    name: "Randolph Adjei",
    url: "/TomiArayomi.jpeg",
    title: "Apostle"
  },
  {
    name: "Randolph Adjei",
    url: "/RandolphAdjei.jpeg",
    title: "Apostle"
  },
  {
    name: "Rachel Anyeme",
    url: "/RachelAnyeme.jpeg",
    title: "Apostle"
  }
];

export default function Speakers() {
  const [isLoading, setLoading] = useState(true);
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const elements = useRef([]);
  const textRefs = useRef([]);
  const numberRefs = useRef([]);

  if (textRefs.current.length !== speakers.length) {
    textRefs.current = Array(speakers.length).fill().map((_, i) => textRefs.current[i] || createRef());
  }

  if (numberRefs.current.length !== speakers.length) {
    numberRefs.current = Array(speakers.length).fill().map((_, i) => numberRefs.current[i] || createRef());
  }

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

    textRefs.current.forEach((text, index) => {
      gsap.from(text.current, {
        yPercent: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: text.current,
          start: "left center",
          end: "center center",
          containerAnimation: pin,
          scrub: true,
        }
      });
    });

    numberRefs.current.forEach((number, index) => {
      gsap.from(number.current, {
        x: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: number.current,
          start: "left center",
          end: "center center",
          containerAnimation: pin,
          scrub: true,
        }
      });
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="w-4/6 mx-auto mb-[12rem] pt-20" id="speaker">
      <h1 className={`${prompt.className} text-6xl mb-10`}>SPEAKERS</h1>
      <div className="border-dashed border-[1px] border-[#9b9a96] overflow-hidden">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="pl-20 pt-20 w-[360vw] h-[100vh] flex justify-between items-center flex-row relative">
            {speakers.map((item, index) => (
              <div ref={(el) => (elements.current[index] = el)} key={index} className="w-1/6">
                <div className="w-3/5 relative z-20">
                  <Image src={item.url} alt={item.name} loading="lazy" layout="responsive" width={500} height={500} quality={80}
                    className={`
                      duration-700 ease-in-out group-hover:opacity-75
                      ${isLoading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                      }`}
                    onLoadingComplete={() => setLoading(false)}
                  />
                  <p ref={numberRefs.current[index]} className="absolute bottom-2 right-[-2rem] text-9xl mix-blend-difference border border-[#fff]">{index + 1}</p>
                </div>
                <div ref={textRefs.current[index]} className="w-4/6 z-20 mt-4">
                  <h2 className="text-2xl font-extrabold">{item.title}</h2>
                  <p className={`${subTitle.className} text-3xl uppercase text-[#d3b975]`}>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}