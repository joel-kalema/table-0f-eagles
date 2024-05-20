"use client"

import { useState } from "react";
import { Prompt } from "next/font/google";
import Image from "next/image";


const prompt = Prompt({
    subsets: ['latin', 'latin-ext', 'thai', 'vietnamese'],
    weight: '800'
})

export default function People() {
    const [isLoading, setLoading] = useState(true);
    return (
        <div className="logo">
            
        </div>
    );
}