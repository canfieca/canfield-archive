export default function Navbar() {
    return (

        <nav className="relative size-28 w-auto text-black bg-gray border-b-8 border-black flex items-center">
            <h1 className="text-5xl font-bold italic ml-10">Canfield Archive</h1>
            <ul className="absolute top-1/2 transform -translate-y-1/2 right-10 inline-flex px-10 space-x-12 h-16 items-center">
                <li className="text-2xl font-bold border-b-8 border-l-8 border border-black p-3 ">About</li>
                <li className="text-2xl font-bold border-b-8 border-l-8 border border-black p-3 ">Inspiration</li>
                <li className="text-2xl font-bold border-b-8 border-l-8 border border-black p-3 ">GitHub</li>
                <li className="text-2xl font-bold p-3 pr-7 pl-7 border border-black rounded-full bg-gray-800 text-white">Sign In</li>
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

    )
}