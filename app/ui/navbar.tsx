import { signIn } from "next-auth/react";

export default function Navbar() {
    return (
        <>
            <nav className="relative size-28 w-auto text-black bg-gray border-b-8 border-black flex items-center">
                <h1 className='xl:text-5xl text-2xl font-bold italic xl:ml-10 ml-5'>Canfield Archive</h1>
                <ul className="absolute top-1/2 transform -translate-y-1/2 right-10 inline-flex xl:px-10 space-x-12 h-16 items-center">
                    <li className="text-2xl font-bold border-b-8 border-l-8 border border-black p-3 hidden xl:block">About</li>
                    <li className="text-2xl font-bold border-b-8 border-l-8 border border-black p-3 hidden xl:block">Inspiration</li>
                    <li className="text-2xl font-bold border-b-8 border-l-8 border border-black p-3 hidden xl:block">GitHub</li>

                    <button 
                        className="xl:text-2xl font-bold p-3 pr-7 pl-7 border border-black rounded-full bg-gray-800 text-white"
                        onClick={() => signIn("keycloak", { redirectTo: "/photos/Unknown/1" })}
                    >
                        Sign In
                    </button>

                        

                </ul>
                <style jsx>
                    {`
                        li:not(:last-child):hover {
                        border-bottom-width: 4px;
                        border-left-width: 4px;
                        }
                    `}
                </style>
            </nav>
        </>
    );

}