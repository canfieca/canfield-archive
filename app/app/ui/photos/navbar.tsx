"use client";

import Button from '@mui/material/Button';

export default function PhotosNavbar() {
    return (
        <>
            <nav className="relative size-28 w-auto text-black bg-gray border-b-8 border-black flex items-center">
                <h1 className='xl:text-5xl text-2xl font-bold italic xl:ml-10 ml-5'>Canfield Archive</h1>
                
                <div className="ml-auto mr-5">
                    <Button variant="contained" sx={{ backgroundColor: "black", "&:hover": { backgroundColor: "gray" }}}>Hi Cameron!</Button>
                </div>

            </nav>
        </>
    );

}