import "../../css/globals.css";
import SideNav from "@/app/ui/photos/sideNav";
import PhotosNavbar from "@/app/ui/photos/navbar";
import { getYears } from "@/app/lib/getYears";
import { auth } from "@/auth";


export default async function PhotoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const years = await getYears(); // server-side fetch
    const session = await auth();
    const name = session?.user?.name;
    const fname = name?.split(" ")[0];

    return (
        <div className="flex flex-col min-h-screen">
            <PhotosNavbar name={fname} />
            <div className="flex flex-1">
                <SideNav years={years} />
                <main className="flex-1 antialiased overflow-auto no-scrollbar">
                    {children}
                </main>
            </div>
        </div>
    );
}