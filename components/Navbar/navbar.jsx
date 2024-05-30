"use client"
'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Link as ScrollLink } from 'next-scroll';
import { CiMenuFries } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import { Syncopate } from 'next/font/google';

const time = Syncopate({
  subsets: ['latin'],
  weight: '400'
});

export default function Nav() {
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
        <img src="/logo.png" alt="Logo" className="" />
      </div>

      <div className="w-3/6 hidden lg:flex justify-between items-center">
        <div className="flex w-4/6 justify-around">
          <ScrollLink className="cursor-pointer a" to="home" offset={-100} duration={1000}><Link href="/">HOME</Link></ScrollLink>
          <ScrollLink className="cursor-pointer a" to="about" offset={-100} duration={1000}>ABOUT</ScrollLink>
          <ScrollLink className="cursor-pointer a" to="speaker" offset={-100} duration={1000}>SPEAKERS</ScrollLink>
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
          <div onClick={navToggle}><Link className="uppercase cursor-pointer a mb-20" href="/program">
            <span className='text-xs text-[#d3b975]'>see the</span><br />PROGRAM</Link></div>
          <Link onClick={navToggle} href="https://www.eventbrite.com/e/the-table-of-eagles-tickets-885272783727" target="_blank" className="box text-xl">
            REGISTER NOW
          </Link>
        </div>
      </div>
    </div>
  );
}