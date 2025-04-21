/* eslint-disable @typescript-eslint/no-explicit-any */

// import { useEffect, useState } from 'react';

export default function SideNav() {
    // const [years, setYears] = useState<string[]>([]);

    // useEffect(() => {
    //     async function fetchYears() {
    //         const response = await fetch('/exif_data.json');
    //         const data = await response.json();
    //         const yearsSet = new Set<string>();

    //         Object.values(data).forEach((photo: any) => {
    //             const dateTime = photo['0th']?.DateTime;
    //             if (dateTime) {
    //                 const year = dateTime.split(':')[0];
    //                 yearsSet.add(year);
    //             }
    //         });

    //         setYears(Array.from(yearsSet).sort());
    //     }

    //     fetchYears();
    // }, []);

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