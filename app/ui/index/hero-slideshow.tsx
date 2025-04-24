"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';

import image1 from '@/public/pictures/Dec 26 1996 0095.jpg'
import image2 from '@/public/pictures/Disney 1999 0168.jpg'
import image3 from '@/public/pictures/IMG_1003 (3).jpg'
import image4 from '@/public/pictures/IMG_2955.jpg'
import image5 from '@/public/pictures/IMG_2965.jpg'
import image6 from '@/public/pictures/IMG_2992.jpg'


const images = [image1, image2, image3, image4, image5, image6];

export default function HeroSlideshow() {
    const [containerHeight, setContainerHeight] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            const inHeight = window.innerHeight;
            const viewHeight = inHeight - 112;
            setContainerHeight(viewHeight);
        };

        updateHeight();

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        window.addEventListener('resize', updateHeight);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <div className='relative w-full bg-black flex justify-center items-center overflow-hidden' style={{ height: containerHeight }}>
            <div className='absolute top-0 left-0 w-full h-full'>
                <Image
                    src={images[currentImageIndex]}
                    alt='background image'
                    fill
                    className='blur-md object-cover'
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