import PhotoGallery from "@/app/ui/photos/PhotoGallery";
import { getPhotosByYear } from "@/app/lib/getPhotosByYear";

interface Props {
    params: Promise<{ year: string; page: string }>;
}

export default async function YearPage({ params }: Props) {
    const resolvedParams = await params;

    // Validate params
    if (!resolvedParams || !resolvedParams.year || !resolvedParams.page) {
        throw new Error("Invalid params: year and page are required.");
    }

    const { year, page } = resolvedParams;
    const pageNum = parseInt(page, 10) || 1;
    const pageSize = 42;

    const { photos, totalCount } = await getPhotosByYear(year, pageNum, pageSize);
    return (
        <PhotoGallery 
            photos={photos} 
            year={year} 
            page={pageNum} 
            totalCount={totalCount} 
        />
    );
}