import "@/css/globals.css";

export default function SideNav({ years }: {years: string[] }) {
    return (
        <nav className="border border-black w-[20%] h-[100vh] text-black overflow-scroll no-scrollbar">
            <ul className="p-0 h-full mt-2">
                {years.map((year) => (
                    <li key={year} className="text-lg font-bold text-center">
                        {year}
                        <hr className="border-black" />
                    </li>
                ))}
            </ul>
        </nav>
    );
}