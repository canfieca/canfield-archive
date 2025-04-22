import React from "react";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

// const photos = [
//     '/Test Photos/40th Party & Vermont 0043.jpg',
//     '/Test Photos/2006 0001.jpg',
//     '/Test Photos/Brooklyn Blockparty 2002 & John\'s Birthday 0095.jpg',
//     '/Test Photos/Brooklyn Blockparty 2002 & John\'s Birthday 0098.jpg',
//     '/Test Photos/Cruise Nov 2008 0005.jpg',
//     '/Test Photos/Dec 26 1996 0016.jpg',
//     '/Test Photos/Disney & Florida 2008 0018.jpg',
//     '/Test Photos/Disney 1999 0080.jpg',
//     '/Test Photos/Disney World 0020.jpg',
//     '/Test Photos/IMG_0142.jpg',
//     '/Test Photos/IMG_0259 (2).jpg',
//     '/Test Photos/IMG_0323.jpg',
//     '/Test Photos/IMG_0473 (1).jpg',
//     '/Test Photos/IMG_0529.jpg',
//     '/Test Photos/IMG_0685.jpg',
//     '/Test Photos/IMG_0737 (1).jpg',
//     '/Test Photos/IMG_1150 (4).jpg',
//     '/Test Photos/IMG_1347 (1).jpg',
//     '/Test Photos/DJI_0018 (2).jpg'
// ];

interface Props {
    photos: { key: string; url: string }[];
    year: string;
    page: number;
    totalCount: number;
}

const PhotoGallery = ({ photos, year, page, totalCount }: Props) => {
    const totalPages = Math.ceil(totalCount / 42);
    
    return (
        <div className="container mt-4">
            <div className="row">
                {photos.map(({ key, url }, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <Image 
                                src={url}
                                alt={`Photo ${index + 1}`}
                                width={800}
                                height={600}
                                style={{ width: '100%', height: 'auto' }}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <p className="card-text">{key}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Bar */}
            <div className="d-flex justify-content-center mt-4">
                {page > 1 && (
                    <Link href={`/photos/${year}/${page - 1}`} className="mx-2">
                        Previous
                    </Link>
                )}
                {Array.from({ length: Math.min(10, totalPages) }, (_, i) => {
                    const startPage = Math.max(1, page - 2);
                    const currentPage = startPage + i;
                    if (currentPage > totalPages) return null;
                    return (
                        <Link
                            key={currentPage}
                            href={`/photos/${year}/${currentPage}`}
                            className={`mx-2 ${currentPage === page ? "fw-bold" : ""}`}
                        >
                            {currentPage}
                        </Link>
                    );
                })}
                {page < totalPages && (
                    <Link href={`/photos/${year}/${page + 1}`} className="mx-2">
                        Next
                    </Link>
                )}
            </div>
        </div>
    );
};

export default PhotoGallery;