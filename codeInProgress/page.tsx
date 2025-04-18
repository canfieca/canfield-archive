"use client";
import '../../css/globals.css';
import PhotoCard from '@/app/app/ui/photos/photoCard';
import { useEffect, useState } from 'react';

interface Photo {
    '0th'?: {
        ImageDescription?: string;
    };
    // Add other properties if needed
}

export default function Photos() {
    const [photos, setPhotos] = useState<Record<string, Photo>>({});

    useEffect(() => {
        async function fetchPhotos() {
            const response = await fetch('/exif_data.json');
            const data = await response.json();
            setPhotos(data);
        }

        fetchPhotos();
    }, []);

    const photoCards = Object.keys(photos).map((key, index) => {
        const photo = photos[key];
        const src = `/Test Photos/${key}`; // Adjust the path as needed
        const title = photo['0th']?.ImageDescription || key;

        return <PhotoCard 
                    key={index} 
                    src={src} 
                    title={title} 
                />;
    });

    return (
        <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photoCards}
        </div>
    );
}