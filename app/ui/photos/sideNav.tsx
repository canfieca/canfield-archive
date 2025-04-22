import "@/css/globals.css";
import Link from "next/link";

export default function SideNav({ years }: {years: string[] }) {
    return (
        <nav className="border border-black w-[20%] h-[100vh] text-black overflow-scroll no-scrollbar">
            <ul className="p-0 h-full mt-2">
                {years.map((year) => (
                    <li key={year} className="text-lg font-bold text-center">
                        <Link href={`/photos/${year}/1`} className="block py-2 hover:bg-gray-200">
                            {year}
                        </Link>   
                        <hr className="border-black" />
                    </li>
                ))}
            </ul>
        </nav>
    );
}