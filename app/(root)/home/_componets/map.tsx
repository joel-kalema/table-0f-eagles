"use client"

import { useState } from "react";
import { Prompt } from "next/font/google";
import Image from "next/image";

import { CiLocationOn } from "react-icons/ci";


const prompt = Prompt({
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
    weight: '800'
})

export default function Location() {
    const [isLoading, setLoading] = useState(true);
    return (
        <div className="pb-[10rem] lg:mt-[20rem] px-6 md:px-10 xl:w-[70%] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="md:w-4/6 lg:w-4/6 overflow-hidden drop-shadow-xl">
                    <Image src="/mapusa.png" alt="about" loading="lazy" layout="responsive" width={500} height={500} quality={80}
                        className={`
                    duration-700 ease-in-out group-hover:opacity-75  animate-pulse opacity-25
                    ${isLoading
                                ? "scale-110 blur-2xl grayscale"
                                : "scale-100 blur-0 grayscale-0"
                            })`}
                        onLoadingComplete={() => setLoading(false)}
                    />

                </div>
                <div data-scroll data-scroll-speed='0.6' className="text-center lg:text-start lg:w-1/2 mt-[-10rem] lg:ml-[-14rem] lg:pr-20 xl:text-[1.5rem] text-[1.1rem]">
                    <h1 className={`${prompt.className} text-6xl xl:text-7xl mb-10 justify-center lg:justify-start flex items-center`}>Location <CiLocationOn /></h1>
                    <p className=" mb-10">Join us at the Table Of Eagles, where the Bride of Christ is prepared, the prophetic is released, and the supernatural becomes natural. Together, let us soar to new heights in our walk with the Lord.</p>
                    <h2 className="font-extrabold mb-6">Doubletree by Hilton DFW Airport North</h2>
                    <p className="text-[#d3b975]">4441 W. John Carpenter Freeway, Irving, TX 75063</p>
                    <p className="text-[#d3b975]">Phone: (972) 929-8181</p>
                </div>
            </div>
        </div>
    );
}