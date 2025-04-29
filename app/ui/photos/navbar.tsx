"use client";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { signOut } from "next-auth/react";

interface Props {
    name: string | null | undefined;
}

export default function PhotosNavbar({ name }: Props) {
    return (
        <>
            <nav className="relative size-28 w-auto text-black bg-gray border-b-8 border-black flex items-center">
                <h1 className='xl:text-5xl text-2xl font-bold italic xl:ml-10 ml-5'>Canfield Archive</h1>
                
                <div className="ml-auto mr-5">
                    {/* <Button variant="contained" sx={{ backgroundColor: "black", "&:hover": { backgroundColor: "gray" }}}>Hi Cameron!</Button> */}
                    <DropdownButton id="user-dropdown" title={`Hi ${name}!`} variant="dark">
                        <Dropdown.Item href="#/Sign-out">
                            <button onClick={() => signOut()}>
                                Sign Out
                            </button>
                        </Dropdown.Item>
                    </DropdownButton>
                </div>

            </nav>
        </>
    );

}