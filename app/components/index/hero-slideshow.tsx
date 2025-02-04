"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';

import image1 from '../../../public/pictures/Dec 26 1996 0095.jpg'
import image2 from '../../../public/pictures/Disney 1999 0168.jpg'
import image3 from '../../../public/pictures/IMG_1003 (3).jpg'
import image4 from '../../../public/pictures/IMG_2955.jpg'
import image5 from '../../../public/pictures/IMG_2965.jpg'
import image6 from '../../../public/pictures/IMG_2992.jpg'


const images = [image1, image2, image3, image4, image5, image6];

export default function HeroSlideshow() {
    const [containerHeight, setContainerHeight] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const inHeight = window.innerHeight;
        console.log("viewport height: ", inHeight);

        const viewHeight = inHeight - 112;
        console.log("viewHeight: ", viewHeight);

        setContainerHeight(viewHeight);
        console.log("Updated containerHeight: ", containerHeight);

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    console.log("Actual container height: ", containerHeight);

    return (
        <div className='fixed w-full bg-black flex justify-center items-center overflow-hidden'>
            <div className='absolute w-full h-full'>
                <Image
                    src={images[currentImageIndex]}
                    alt='background image'
                    layout='fill'
                    objectFit='cover'
                    className='blur-md'
                />
            </div>
            <div className='relative z-10'>
                <Image
                    src={images[currentImageIndex]}
                    alt='slideshow image'
                    height={containerHeight}
                />
            </div>
        </div>
    );
}