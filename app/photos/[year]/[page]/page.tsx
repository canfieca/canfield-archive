import PhotoGallery from "@/app/ui/photos/PhotoGallery";
import { getPhotosByYear } from "@/app/lib/getPhotosByYear";

interface Props {
    params: { year: string, page: string }
}

export default async function YearPage({ params }: Props) {
    const { year, page } = await params;
    const pageNum = parseInt(page, 10) || 1;
    const pageSize = 42;

    const { photos, totalCount } = await getPhotosByYear(year, pageNum, pageSize);
    return (
        <PhotoGallery photos={photos} year={year} page={pageNum} totalCount={totalCount} />
    )
}