"use client"

import Nav from "@/components/Navbar/navbar";
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

import { CiPaperplane } from "react-icons/ci";

import { Prompt, Syncopate } from "next/font/google";

const title = Prompt({
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
    weight: '800'
})

const subTitle = Syncopate({
    subsets: ['latin'],
    weight: '400'
})


export default function TentativeSchedule() {
    useEffect(() => {
        const initializeLocomotiveScroll = async () => {
            try {
                const { default: LocomotiveScroll } = await import('locomotive-scroll');
                const locomotiveScroll = new LocomotiveScroll();
            } catch (error) {
                console.error("Error initializing LocomotiveScroll:", error);
            }
        };

        initializeLocomotiveScroll();
    }, []);

    const menuItemRef = useRef(null);
    const saturday = useRef(null);
    const sunday = useRef(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        tl.from(menuItemRef.current.children, {
            opacity: 0,
            duration: 1.5,
            delay: 0.5,
            stagger: {
                amount: 0.7,
            }
        });

        const scrool1 = gsap.timeline({
            scrollTrigger: {
                trigger: saturday.current,
                start: "top center+=100px",
                end: "bottom bottom-=100px",
                scrub: true,
            }
        });

        scrool1.from(saturday.current.children, {
            x: 200,
            opacity: 0,
            duration: 1.5,
            delay: 0.5,
            stagger: {
                amount: 0.7,
            },
        });

        const scrool2 = gsap.timeline({
            scrollTrigger: {
                trigger: sunday.current,
                start: "top center+=100px",
                end: "bottom bottom",
                scrub: true,
            }
        });

        scrool2.from(sunday.current.children, {
            x: 200,
            opacity: 0,
            duration: 1.5,
            delay: 0.5,
            stagger: {
                amount: 0.7,
            },
        });
    });

    return (
        <main className="">
            <Nav />
            <div className="w-4/5 mx-auto pt-[15rem] text-xl" ref={menuItemRef}>
                <h1 data-scroll data-scroll-speed='0.8' className={`${title.className} uppercase text-4xl mb-10`}>Tentative Schedule</h1>
                <div className="border-t-[1px] border-[#9b9a96] py-10" data-scroll data-scroll-speed='0.6'>
                    <h2 className={`${subTitle.className} uppercase text-6xl mb-6`}>Friday:</h2>
                    <p>5:00pm-6:00pm (Opening prayer & Worship VO1)</p>
                    <p>6:00pm-7:30pm (Apostle Enmith)</p>
                    <p>7:30pm-8:00pm (Worship with TFC choir)</p>
                    <p>8:00pm-9:30pm (Apostle Tomi Arayomi)</p>
                    <p>9:30pm-10:30pm (Consecration & Closing)</p>
                    <p></p>
                </div>

                <div ref={saturday} className="border-t-[1px] border-[#9b9a96] py-10 overflow-hidden" data-scroll data-scroll-speed='0.2'>
                    <h2 className={`${subTitle.className} uppercase text-6xl`}>Saturday:</h2>


                    <h3>Morning Glory</h3>
                    <p>9:00am-10:00am (Intercession)</p>
                    <p>10:00am-10:50am (Pastor Daniel Sandoval)</p>
                    <p>10:50 am-11:00 am (Offering & Closing)</p>



                    <h3>Second Service</h3>
                    <p>3:00 pm-3:40 pm (Worship with TFC Choir)</p>
                    <p>3:40 pm-4:45 pm (Pastor Kofi Dartey)</p>
                    <p>4:45pm-4:55pm (Offering & Closing)</p>



                    <h3>Evening Service</h3>
                    <p>7:00pm-7:30pm (Opening Prayer)</p>
                    <p>7:30pm-8:15pm (Worship with Pastor Eddy James)</p>
                    <p>8:15pm-9:45pm (Apostle Randolph Adjei)</p>
                    <p>10:00pm-10:30pm (Calling, Offering, & Closing)</p>

                </div>

                <div ref={sunday} className="border-t-[1px] border-[#9b9a96] py-10 pb-[20rem] overflow-hidden" data-scroll data-scroll-speed='0.1'>
                    <h2 className={`${subTitle.className} uppercase text-6xl`}>Sunday: Miracles Services</h2>
                    <p>5:00pm-5:30pm (Opening Prayer)</p>
                    <p>5:30pm-6:15pm (Worship with Pastor Eddy James)</p>
                    <p>6:15pm-8:45pm (Prophet Christopher Beleke Preaching, Service, Offering)</p>
                    <p>8:45pm-9:45pm (Graduation)</p>
                    <p>9:45 pm-10:30 pm (Praise/Worship & Closing)</p>
                </div>
            </div>
        </main>
    );
}