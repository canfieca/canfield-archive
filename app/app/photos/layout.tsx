import "../../css/globals.css";
import SideNav from "@/app/app/ui/photos/sideNav";


export default function PhotoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen">
            <SideNav />
            <main className="flex-1 antialiased overflow-auto no-scrollbar">
                {children}
            </main>
        </div>
    );
}