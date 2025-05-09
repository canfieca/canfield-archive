import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    }
});

export async function generatePresignedUrl(key: string, expiresInSeconds = 3600) {
    if (!key) {
        console.error("generatePresignedUrl called with invalid key:", key);
        throw new Error("Missing or invalid S3 object key.");
    }
    
    const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: key,
    });

    return await getSignedUrl(s3, command, { expiresIn: expiresInSeconds });
}