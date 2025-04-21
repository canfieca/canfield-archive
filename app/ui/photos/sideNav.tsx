export default function SideNav() {

    const years = ['Undefined', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']

    return (
        <>
            <nav className="border border-black w-[20%] h-[100vh] text-black">
                <ul>
                    {years.map((year) => (
                        <li key={year}>
                            {year}
                            <hr className="border-black" />
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}