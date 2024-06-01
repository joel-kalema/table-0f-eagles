"use client"

import { useEffect } from "react";

import dynamic from "next/dynamic";

import Nav from "@/components/Navbar/navbar";
import HomePage from "./(root)/home/page";
// import Speakers from "./(root)/home/_componets/speakers/page";
// import Location from "./(root)/home/_componets/map";
// import People from "./(root)/home/_componets/logo";
// import VideoPresention from "./(root)/home/_componets/video";
import Footer from "@/components/footer/footer";

const DynamicVideoPresention = dynamic(() => import("./(root)/home/_componets/video"))
const DynamicSpeakers = dynamic(() => import("./(root)/home/_componets/speakers/page"))
const DynamicLocation = dynamic(() => import("./(root)/home/_componets/map"))
const DynamicPeople = dynamic(() => import("./(root)/home/_componets/logo"))

export default function Home() {
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

  return (
    <main className="">
      <Nav />
      <HomePage />
      <DynamicVideoPresention />
      <DynamicSpeakers />
      <DynamicLocation />
      <DynamicPeople />
      <Footer />
    </main>
  );
}