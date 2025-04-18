/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';

interface PhotoCardProps {
    src: string;
    title: string;
}

export default function PhotoCard({ src, title }: PhotoCardProps) {
    return (
        <div className="relative border border-black rounded-lg w-[250px] h-[250px]">
            <Image 
                src={src} 
                alt={title} 
                className="object-cover rounded-lg" 
                fill
            />
            <h1>{title}</h1>
        </div>
    );
}