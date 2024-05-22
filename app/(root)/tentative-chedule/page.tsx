"use client"

import Nav from "@/components/Navbar/navbar";
import { useEffect } from "react";

import { Prompt, Syncopate } from "next/font/google";

const title = Prompt({
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
    weight: '800'
  })
  
  const subTitle = Syncopate({
    subsets: ['latin'],
    weight: '700'
  })


export default function TentativeSchedule() {


    return (
        <main className="">
            <Nav />
            <div className="w-4/5 mx-auto pt-[15rem]">
                <h1 className={`${title.className} uppercase text-6xl`}>Tentative Schedule</h1>
                <div>
                    <h2>Friday:</h2>
                    <p>5:00pm-6:00pm (Opening prayer & Worship VO1)</p>
                    <p>6:00pm-7:30pm (Apostle Enmith)</p>
                    <p>7:30pm-8:00pm (Worship with TFC choir)</p>
                    <p>8:00pm-9:30pm (Apostle Tomi Arayomi)</p>
                    <p>9:30pm-10:30pm (Consecration & Closing)</p>
                    <p></p>
                </div>

                <div>
                    <h2>Saturday:</h2>

                    <div>
                        <h3>Morning Glory</h3>
                        <p>9:00am-10:00am (Intercession)</p>
                        <p>10:00am-10:50am (Pastor Daniel Sandoval)</p>
                        <p>10:50 am-11:00 am (Offering & Closing)</p>
                    </div>

                    <div>
                        <h3>Second Service</h3>
                        <p>3:00 pm-3:40 pm (Worship with TFC Choir)</p>
                        <p>3:40 pm-4:45 pm (Pastor Kofi Dartey)</p>
                        <p>4:45pm-4:55pm (Offering & Closing)</p>
                    </div>

                    <div>
                        <h3>Evening Service</h3>
                        <p>7:00pm-7:30pm (Opening Prayer)</p>
                        <p>7:30pm-8:15pm (Worship with Pastor Eddy James)</p>
                        <p>8:15pm-9:45pm (Apostle Randolph Adjei)</p>
                        <p>10:00pm-10:30pm (Calling, Offering, & Closing)</p>
                    </div>
                </div>

                <div>
                    <h2>Sunday: Miracles Services</h2>
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