"use client"

import { useState } from "react";
import { Prompt } from "next/font/google";
import Image from "next/image";


const prompt = Prompt({
  subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
  weight: '800'
})

export default function Speakers() {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="w-4/6 mx-auto mb-[12rem]">
      <h1 className={`${prompt.className} text-6xl`}>SPEAKERS</h1>
      <div className="border-dashed border-[1px] border-[#9b9a96]">

        <div className="mt-20 px-20">

          <div className="md:w-4/5 lg:w-3/6 overflow-hidden drop-shadow-xl my-10">
            <Image src="/beleke.jpeg" alt="beleke" loading="lazy" layout="responsive" width={500} height={500} quality={80}
              className={`
                    duration-700 ease-in-out group-hover:opacity-75
                    ${isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
                })`}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>

          <div className="w-4/6 my-[10rem] flex">
            <div className="md:w-4/5 lg:w-2/5 overflow-hidden drop-shadow-xl my-10">
              <Image src="/speaker01.jpeg" alt="about" loading="lazy" layout="responsive" width={500} height={500} quality={80}
                className={`
                    duration-700 ease-in-out group-hover:opacity-75
                    ${isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                  })`}
                onLoadingComplete={() => setLoading(false)}
              />
            </div>

            <div className="md:w-4/5 lg:w-2/5 overflow-hidden drop-shadow-xl">
              <Image src="/speaker02prime.jpeg" alt="about" loading="lazy" layout="responsive" width={500} height={500} quality={80}
                className={`
                    duration-700 ease-in-out group-hover:opacity-75
                    ${isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                  })`}
                onLoadingComplete={() => setLoading(false)}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}