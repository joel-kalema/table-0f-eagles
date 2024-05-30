"use client"

import { useState, useEffect } from 'react';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import { Syncopate } from 'next/font/google';

const time = Syncopate({
  subsets: ['latin'],
  weight: '400'
});

export default function Navbar() {
    const [fix, setFix] = useState(false);
  const [active, setActive] = useState('nav_close');

  const navToggle = () => {
    setActive(active === 'nav_active' ? 'nav_close' : 'nav_active');
  };

  const setFixed = () => {
    window.scrollY >= 10 ? setFix(true) : setFix(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', setFixed);
      return () => {
        window.removeEventListener('scroll', setFixed);
      };
    }
  }, []);

    return (
        <div className={
            fix ? "py-4 px-6 lg:px-20 flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-[#22211f] duration-500 ease-in-out"
                : "py-4 px-6 lg:px-20 flex justify-between items-center fixed top-0 left-0 w-full z-50 duration-500 ease-in-out"}>
            <div className={fix ? "w-[5rem] duration-500 ease-in-out" : "w-1/6 duration-500 ease-in-out"}>
                <img src="/logo.png" alt="" className="" />
            </div>

            <div className="w-3/6 hidden lg:flex justify-between items-center">
                <div className="flex w-4/6 justify-around">
                    <Link className="cursor-pointer a" href="/">HOME</Link>
                    <Link className="cursor-pointer a" href="/#about">ABOUT</Link>
                    <Link className="cursor-pointer a" href="/#speaker">SPEAKERS</Link>
                    <Link className="uppercase cursor-pointer a" href="/program">PROGRAM</Link>
                </div>
                <Link href="https://www.eventbrite.com/e/the-table-of-eagles-tickets-885272783727" target="_blank" className="box">
                    REGISTER NOW
                </Link>
            </div>

            <CiMenuFries onClick={navToggle} className="lg:hidden block" />

            <div className={`${active} h-[100vh] flex justify-center items-center w-6/6 backdrop-blur-xl bg-[#22211f]`}>
                <AiOutlineClose className="absolute top-4 right-4 text-xl" onClick={navToggle} />
                <div className={`${time.className} flex text-3xl flex-col text-white`}>
                    <div onClick={navToggle}><Link className="uppercase cursor-pointer a mb-20" href="/">
                    <span className='text-xs text-[#d3b975]'>Go to the</span><br />HOME PAGE</Link></div>
                    <Link onClick={navToggle} href="https://www.eventbrite.com/e/the-table-of-eagles-tickets-885272783727" target="_blank" className="box text-xl">
                        REGISTER NOW
                    </Link>
                </div>
            </div>
        </div>
    );
}