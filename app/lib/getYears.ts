import { MongoClient, ServerApiVersion } from "mongodb";

export async function getYears() {
    const uri = process.env.MONGODB_URI!;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    await client.connect();

    const db = client.db();
    const collections = await db.listCollections().toArray();

    const years = collections
        .map((c) => c.name)
        .sort();
    

    await client.close();
    return years;
}
