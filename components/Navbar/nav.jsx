"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [fix, setFix] = useState(false)

    function setFixed() {
        window.scrollY >= 10 ? setFix(true) : setFix(false)
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", setFixed);
    }

    return (
        <div className={
            fix ? "py-4 px-20 flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-[#22211f] duration-500 ease-in-out"
                : "py-4 px-20 flex justify-between items-center fixed top-0 left-0 w-full z-50 duration-500 ease-in-out"}>
            <div className={fix ? "w-[5rem] duration-500 ease-in-out" : "w-1/6 duration-500 ease-in-out"}>
                <img src="/logo.png" alt="" className="" />
            </div>

            <div className="w-3/6 flex justify-between items-center">
                <div className="flex w-4/6 justify-between">
                    <Link className="cursor-pointer a" href="/">HOME</Link>
                    <Link className="cursor-pointer a" href="/#about">ABOUT</Link>
                    <Link className="cursor-pointer a" href="/#speaker">SPEAKERS</Link>
                    {/* <li className="cursor-pointer a">INFOS</li>
          <li className="cursor-pointer a">FAQS</li> */}
                    <Link className="uppercase cursor-pointer a" href="/tentative-chedule">PROGRAM</Link>
                </div>
                <Link href="" className="box">
                    <p>REGISTER NOW</p>
                </Link>
            </div>
        </div>
    );
}