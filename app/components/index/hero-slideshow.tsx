"use client"

import Image from 'next/image';
import image1 from '../../../public/pictures/Dec 26 1996 0095.jpg'
import { useState, useEffect } from 'react';

export default function HeroSlideshow() {
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        const inHeight = window.innerHeight;
        console.log("viewport height: ", inHeight);

        const viewHeight = inHeight - 112;
        console.log("viewHeight: ", viewHeight);

        setContainerHeight(viewHeight);
        console.log("Updated containerHeight: ", containerHeight);
    }, []);

    console.log("Actual container height: ", containerHeight);

    return (
        <div className='fixed w-full bg-black flex justify-center items-center overflow-hidden'>
            <div className='absolute w-full h-full'>
                <Image
                    src={image1}
                    alt='background image'
                    layout='fill'
                    objectFit='cover'
                    className='blur-md'
                />
            </div>
            <div className='relative z-10'>
                <Image
                    src={image1}
                    alt='first image'
                    height={containerHeight}
                />
            </div>
        </div>
    );
}