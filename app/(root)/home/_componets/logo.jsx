"use client"

import { useState } from "react";
import { Syncopate } from "next/font/google";
import Image from "next/image";
import Link from "next/link";


const time = Syncopate({
    subsets: ['latin'],
    weight: '400'
})

export default function People() {
    const [isLoading, setLoading] = useState(true);
    return (
        <div className="logo flex justify-center items-center flex-col">
            <div className="w-2/4 lg:w-1/4 overflow-hidden mb-10">
                <Image src="/logo.png" alt="about" loading="lazy" layout="responsive" width={500} height={500} quality={80}
                    className={`
                    duration-700 ease-in-out group-hover:opacity-75
                    ${isLoading
                            ? "scale-110 blur-2xl grayscale"
                            : "scale-100 blur-0 grayscale-0"
                        })`}
                    onLoadingComplete={() => setLoading(false)}
                />

            </div>
            <p className={`${time.className} w-5/6 text-sm md:text-xl lg:w-4/6 text-center uppercase mb-10`}>We believe in the apostolic end-time mandate of the Church. At our conference, we delve into the spiritual and marketplace realms, equipping believers to fulfill their divine purpose. Armed with a strong understanding of this mandate, we march forward, impacting nations with the love and power of God.</p>
            <Link href="" className="box">
                <p>REGISTER NOW</p>
            </Link>
        </div>
    );
}