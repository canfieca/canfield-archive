import React from "react";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    photos: { key: string; url: string; type: string }[];
    year: string;
    page: number;
    totalCount: number;
}

const PhotoGallery = ({ photos, year, page, totalCount }: Props) => {
    const totalPages = Math.ceil(totalCount / 42);

    const getVideoType = (key: string) => {
        const extension = key.split('.').pop()?.toLowerCase();
        switch (extension) {
            case 'mp4':
                return 'video/mp4';
            case 'mov':
                return 'video/quicktime';
            case 'avi':
                return 'video/x-msvideo';
            case 'm4v':
                return 'video/x-m4v';
            default:
                return 'video/mp4';
        }
    };
    
    return (
        <div className="container mt-4">
            <div className="row">
                {photos.map(({ key, url, type }, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">

                            {type === "photo" ? (
                                <Image 
                                    src={url}
                                    alt={`Photo ${index + 1}`}
                                    width={800}
                                    height={600}
                                    style={{ width: '100%', height: 'auto' }}
                                    className="card-img-top"
                                />
                            ) : (
                                <video 
                                    controls
                                    width="100%"
                                    className="card-img-top"
                                >
                                    <source src={url} type={getVideoType(key)} />
                                    Your browser does not support the video tag.
                                </video>
                            )}                           
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