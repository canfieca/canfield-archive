import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client();

export async function generatePresignedUrl(key: string, expiresInSeconds = 3600) {
    if (!key) {
        console.error("generatePresignedUrl called with invalid key:", key);
        throw new Error("Missing or invalid S3 object key.");
    }
    
    const command = new GetObjectCommand({
        Bucket: 'canfield-archive',
        Key: key,
    });

    return await getSignedUrl(s3, command, { expiresIn: expiresInSeconds });
}