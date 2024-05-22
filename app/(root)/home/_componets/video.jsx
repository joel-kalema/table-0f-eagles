import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { Syncopate } from "next/font/google";

const time = Syncopate({
    subsets: ['latin'],
    weight: '400'
})

export default function VideoPresentation() {
    const video = useRef(null);
    const details = useRef(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (video.current) {
            gsap.from(video.current, {
                opacity: 0,
                x: 200,
                duration: 1,
                scrollTrigger: {
                    trigger: video.current,
                    start: "top top+=500px",
                    end: "bottom bottom",
                    scrub: true,
                }
            });
        }

        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: details.current,
              start: "top center+=100px",
              end: "bottom bottom-=100px",
              scrub: true,
            }
          });
          
          tl.from(details.current.children, {
            x: 200,
            opacity: 0,
            duration: 1.5,
            delay: 0.5,
            stagger: {
              amount: 0.7,
            },
          });
    }, []);

    return (
        <div className="overflow-hidden">
            <div ref={video} className='flex flex-col-reverse items-center overflow-hidden lg:flex-row px-6 md:px-20 lg:px-32 justify-around pb-28'>
                <div ref={details} className='w-6/6 lg:w-4/12 lg:ml-12 overflow-hidden lg:px-12 mx-auto mb-10 lg:mb-0'>
                    <video className="h-full w-full rounded-lg" controls>
                        <source src="/event.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={`${time.className} lg:w-4/6 lg:text-start text-center text-3xl overflow-hidden`} ref={details}>
                <div className="w-[6rem] h-[3px] bg-[#d3b975] mb-10 uppercase"></div>
                    <p className="uppercase">The Table Of Eagles is a place where the prophetic anointing flows freely.</p>
                    <p className="uppercase">Through powerful messages and fervent intercession, we seek to instruct,</p>
                    <p className="uppercase">Together, we stand as watchmen, interceding for the church, our cities, and our nations.</p>
                </div>
            </div>
        </div>
    );
}
