interface PhotoCardProps {
    src: string;
    title: string;
}

export default function PhotoCard({ src, title }: PhotoCardProps) {
    return (
        <div className="border border-black rounded-lg w-[250px] h-[250px]">
            <img src={src} alt={title} className="w-full h-full object-cover rounded-lg" />
            <h1>{title}</h1>
        </div>
    );
}