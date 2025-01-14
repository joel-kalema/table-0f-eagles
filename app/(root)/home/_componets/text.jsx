import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import Link from "next/link";

import { Syncopate } from "next/font/google";

const time = Syncopate({
    subsets: ['latin'],
    weight: '400'
})

export default function TextAbout() {
    const text = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: text.current,
              start: "top-=130px center",
              end: "bottom bottom-=100px",
              scrub: true,
            }
          });
          
          tl.from(text.current.children, {
            x: 250,
            opacity: 0,
            duration: 2,
            delay: 0.5,
            stagger: {
              amount: 0.7,
            },
          });
    }, []);

    return (
        <div id="about" className="pb-[10rem] xl:w-[70%] mx-auto">
            <div className="md:w-5/6 mx-auto overflow-hidden lg:mt-[10rem] relative text-sm md:text-xl" ref={text}>
                <h1 className={`${time.className} font-extrabold text-xl md:text-4xl mb-10 uppercase text-[#d3b975]`}>Welcome to the Table Of Eagles</h1>
                <p><span className="text-[#d3b975] font-extrabold">TABLE OF EAGLES</span> is a conference carrying a vision of the Preparation of the Bride of Christ for the soon return of our Lord Jesus (The Rapture). It seeks to build a Prophetic Nation of believers through a conference once every year focusing on:</p>
                <ul className="list-disc ml-6 mt-4">
                    <li>Encounters with Jesus</li>
                    <li>Enlightment(Revelations of The Mind of God through the word)</li>
                    <li>A strong Move of the Prophetic Anointing to Instruct, Guide, & Orient & intercede for the church, the city, & the nation</li>
                    <li>A Strong Understanding of the Apostolic end time mandate of the Church in the Nations (Spiritually & in Marketplace)</li>
                    <li>Equiping & Demonstrating the Supernatural Power of God</li>
                </ul>
                <Link href="https://www.eventbrite.com/e/the-table-of-eagles-tickets-885272783727" target="_blank" className="box w-3/6 md:w-2/6 text-sm md:text-xl mt-10 flex justify-center">
                    REGISTER NOW
                </Link>
            </div>
        </div>
    );
}

