import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function TextAbout() {
    const text = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (text.current) {
            gsap.from(text.current.children, {
                opacity: 0,
                x: -200,
                duration: 2,
                scrollTrigger: {
                    trigger: text.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                }
            });
        }
    }, []);

    return (
        <div className="w-4/6 float-right mt-[20rem] relative" ref={text}>
            <h1 className="font-extrabold text-2xl mb-10">Welcome to the Table Of Eagles</h1>
            <p><span className="text-[#d3b975] font-extrabold">TABLE OF EAGLES</span> is a conference carrying a vision of the Preparation of the Bride of Christ for the soon return of our Lord Jesus (The Rapture). It seeks to build a Prophetic Nation of believers through a conference once every year focusing on:</p>
            <ul className="list-disc ml-6 mt-4">
                <li>Encounters with Jesus</li>
                <li>Enlightment(Revelations of The Mind of God through the word)</li>
                <li>A strong Move of the Prophetic Anointing to Instruct, Guide, & Orient & intercede for the church, the city, & the nation</li>
                <li>A Strong Understanding of the Apostolic end time mandate of the Church in the Nations (Spiritually & in Marketplace)</li>
                <li>Equiping & Demonstrating the Supernatural Power of God</li>
            </ul>
            <div className="box w-2/6 mt-10 flex justify-center">
                <p>REGISTER NOW</p>
            </div>
        </div>
    );
}

