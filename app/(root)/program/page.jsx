"use client"

import Navbar from "@/components/Navbar/nav";
import Footer from "@/components/footer/footer";
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
    const friday = useRef(null);
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
                start: "top-=200px center",
                end: "bottom bottom-=200px",
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

        const scrool3 = gsap.timeline({
            scrollTrigger: {
                trigger: friday.current,
                start: "top-=200px center",
                end: "bottom bottom-=200px",
                scrub: true,
            }
        });

        scrool3.from(friday.current.children, {
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
            <Navbar />
            <div className="lg:w-4/5 mx-auto pt-[10rem] md:pt-[20rem] lg:pt-[15rem] px-4 md:px-10 lg:px-20 text-xl" ref={menuItemRef}>
                <h1 data-scroll data-scroll-speed='0.6' className={`${title.className} uppercase text-3xl md:text-5xl my-10 lg:my-20 text-[#d3b975]`}>Tentative Schedule</h1>
                <p data-scroll data-scroll-speed='0.5' className={`${subTitle.className} uppercase text-xl md:text-3xl mb-2 text-[#d3b975]`}>Nov 29 - Dec 01</p>
                <p data-scroll data-scroll-speed='0.4' className={`${subTitle.className} uppercase text-xl md:text-3xl mb-20 lg:w-3/4`}>3 days of the prophetic, of impartation, of the power of God, of size wonders, and miracles, and three days of Salvation you cannot miss.</p>

                <div ref={friday} className="pt-10 mb-6 lg:mb-0 text-sm md:text-xl overflow-hidden" data-scroll data-scroll-speed='0.3'>
                    <h2 className={`${subTitle.className} uppercase text-3xl lg:text-6xl mb-4`}>Friday:</h2>
                    <p>5:00pm-5:15 (Prayer)</p>
                    <p>5:15-6:00pm Worship VO1</p>
                    <p>6:00pm-7:30pm</p>
                    <p>7:30pm-8:00pm </p>
                    <p>8:00pm-9:30pm </p>
                    <p>9:30pm-10:30pm (Consecration & Closing)</p>
                </div>

                <div ref={saturday} className="lg:pt-10 text-sm md:text-xl overflow-hidden">
                    <h2 className={`${subTitle.className} uppercase text-3xl lg:text-6xl mb-4`}>Saturday:</h2>


                    <h3 className="flex items-center text-[#d3b975] mb-4 text-xl lg:text-2xl"><CiPaperplane /> Morning Glory</h3>
                    <p>9:00am-10:00am (Intercession/ worship team ready)</p>
                    <p>10:00am-10:50am (Prophetic Service)</p>
                    <p>10:50 am-11:00 am (Closing)</p>



                    <h3 className="flex items-center text-[#d3b975] mb-4 text-xl lg:text-2xl mt-10"><CiPaperplane />Second Service</h3>
                    <p>3:00 pm-3:40 pm</p>
                    <p>3:40 pm-4:45 pm</p>
                    <p>4:45pm-4:55pm (Closing)</p>



                    <h3 className="flex items-center text-[#d3b975] mb-4 text-xl lg:text-2xl mt-10"><CiPaperplane />Evening Service</h3>
                    <p>7:00pm-7:30pm (Opening Prayer)</p>
                    <p>7:30pm-8:15pm (Worship)</p>
                    <p>8:15pm-9:45pm </p>
                    <p>10:00pm-10:30pm (Calling, & Closing)</p>

                </div>

                <div ref={sunday} className="py-10 mb-6 lg:pb-[10rem] text-sm lg:text-xl overflow-hidden">
                    <h2 className={`${subTitle.className} uppercase text-3xl lg:text-6xl mb-4`}>Sunday:<br /> Miracles Services</h2>
                    <p>5:00pm-5:30pm (Opening Prayer)</p>
                    <p>5:30pm-6:15pm (Worship)</p>
                    <p>6:15pm-8:45pm (Preaching, Service)</p>
                    <p>8:45pm-9:45pm (Graduation)</p>
                    <p>9:45 pm-10:30 pm (Praise/Worship Rachel & Closing)</p>
                </div>
            </div>
            <div className="box w-2/4 lg:w-1/5 ml-4 mb-10 flex justify-center lg:ml-52">
                <p>REGISTER NOW</p>
            </div>
            <Footer />
        </main>
    );
}