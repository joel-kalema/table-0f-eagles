"use client"

import { useState } from "react";
import { Prompt } from "next/font/google";
import Image from "next/image";


const prompt = Prompt({
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
    weight: '800'
})

export default function Location() {
    const [isLoading, setLoading] = useState(true);
    return (
        <div className="my-[20rem]">
            <h1 className={`${prompt.className} font-extrabold text-4xl mb-10 text-center`}>Location</h1>
            <div className="flex items-center">
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
                <div className="w-1/2 ml-[-10rem] pr-20">
                    <p className="text-sm mb-10">Join us at the Table Of Eagles, where the Bride of Christ is prepared, the prophetic is released, and the supernatural becomes natural. Together, let us soar to new heights in our walk with the Lord.</p>
                    <h2 className="font-extrabold mb-6">Doubletree by Hilton DFW Airport North</h2>
                    <p className="text-[#d3b975]">4441 W. John Carpenter Freeway, Irving, TX 75063</p>
                    <p className="text-[#d3b975]">Phone: (972) 929-8181</p>
                </div>
            </div>
        </div>
    );
}