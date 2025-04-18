import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

const photos = [
    '/Test Photos/40th Party & Vermont 0043.jpg',
    '/Test Photos/2006 0001.jpg',
    '/Test Photos/Brooklyn Blockparty 2002 & John\'s Birthday 0095.jpg',
    '/Test Photos/Brooklyn Blockparty 2002 & John\'s Birthday 0098.jpg',
    '/Test Photos/Cruise Nov 2008 0005.jpg',
    '/Test Photos/Dec 26 1996 0016.jpg',
    '/Test Photos/Disney & Florida 2008 0018.jpg',
    '/Test Photos/Disney 1999 0080.jpg',
    '/Test Photos/Disney World 0020.jpg',
    '/Test Photos/IMG_0142.jpg',
    '/Test Photos/IMG_0259 (2).jpg',
    '/Test Photos/IMG_0323.jpg',
    '/Test Photos/IMG_0473 (1).jpg',
    '/Test Photos/IMG_0529.jpg',
    '/Test Photos/IMG_0685.jpg',
    '/Test Photos/IMG_0737 (1).jpg',
    '/Test Photos/IMG_1150 (4).jpg',
    '/Test Photos/IMG_1347 (1).jpg',
    '/Test Photos/IMG_3872.heic'
];

const PhotoGallery = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                {photos.map((src, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <Image 
                                src={src}
                                alt={`Photo ${index + 1}`}
                                layout="responsive"
                                width={800}
                                height={600}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <p className="card-text">{src.replace('/Test Photos/', '')}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;