"use client"

import { useEffect } from "react";
import Nav from "@/components/Navbar/navbar";
import HomePage from "./(root)/home/page";
import Speakers from "./(root)/home/_componets/speakers/page";
import Location from "./(root)/home/_componets/map";
import VideoPresention from "./(root)/home/_componets/video";

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
      <VideoPresention />
      <Speakers />
      <Location />
    </main>
  );
}