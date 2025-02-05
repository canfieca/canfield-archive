"use client"

import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../../css/about.css'; // Import the CSS file

export default function About() {
    const { ref: h1Ref, inView: h1InView } = useInView({ triggerOnce: true });
    const { ref: divRef, inView: divInView } = useInView({ triggerOnce: true });

    return (
        <div className='my-[50px]'>
            <h1 ref={h1Ref} className={`text-8xl pt-10 pl-10 text-black ${h1InView ? 'slide-in-left' : ''}`}>About</h1>
            <div ref={divRef} className={`text-6xl text-black ml-5 p-24 ${divInView ? 'slide-in-right' : ''}`}>
                <p>
                    If a picture tells a thousand words, what do a thousand pictures say?
                    This platform exists to provide my family with remote access to all of the 
                    photos we&apos;ve been collecting for more than half a century. We&apos;ve amassed more than 100,000
                    and this serves to host many more photos for many more years. 
                </p>
            </div>
        </div>
    );
}