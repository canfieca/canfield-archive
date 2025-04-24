import { MongoClient } from "mongodb";
import { generatePresignedUrl } from "@/app/lib/getSignedUrls";

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);

export async function getPhotosByYear(year: string, page: number, pageSize: number) {
    await client.connect();
    const db = client.db("years");
    const collection = db.collection(year);

    const skip = (page - 1) * pageSize;

    const totalCount = await collection.countDocuments();
    const docs = await collection
        .find({})
        .skip(skip)
        .limit(pageSize)
        .toArray();

    const photos = await Promise.all(
        docs.map(async (doc) => {
            const lowerKey = doc.object_key.toLowerCase();
            const isVideo = lowerKey.endsWith(".mp4") || lowerKey.endsWith(".mov") || lowerKey.endsWith("avi") || lowerKey.endsWith("m4v");
            return {
                key: doc.object_key,
                url: await generatePresignedUrl(doc.object_key),
                type: isVideo ? "video" : "photo"
            };
        })
    );
    
    return { photos, totalCount };
}