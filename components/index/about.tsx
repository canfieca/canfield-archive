"use client"

import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../../css/about.css'; // Import the CSS file

export default function About() {
    const { ref: h1Ref, inView: h1InView } = useInView({ triggerOnce: true });
    const { ref: divRef, inView: divInView } = useInView({ triggerOnce: true });

    return (
        <div className='my-[50px]'>
            <h1 ref={h1Ref} className={`xl:text-8xl text-4xl xl:pt-10 xl:pl-10 p-5 text-white bg-black xl:w-[35%] w-min rounded-r-lg ${h1InView ? 'slide-in-left' : ''}`}>About</h1>
            <div ref={divRef} className={`xl:text-6xl/[1.25] text-4xl text-black ml-5 xl:p-24 pt-5 ${divInView ? 'slide-in-right' : ''}`}>
                <p>
                    If a picture tells a thousand words, what do a thousand pictures say?
                    This platform exists to provide my family with remote access to all of the 
                    photos we&apos;ve been collecting for more than half a century. We&apos;ve amassed tens of thousands
                    and this serves to host many more photos for many more years. 
                </p>
            </div>
        </div>
    );
}