import "../../css/globals.css";

export default function PhotoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main className="antialiased overflow-auto min-h-screen no-scrollbar">
                {children}
            </main>
        </>
    );
}