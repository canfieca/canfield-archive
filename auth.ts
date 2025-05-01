import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/app/lib/db";
import authConfig from "./auth.config";;


export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        async signIn({ user }) {
            const client = await clientPromise;
            const db = client.db("users");
            const usersCollection = db.collection("approved");

            const existingUser = await usersCollection.findOne({ email: user.email });

            if (!existingUser) {
                await usersCollection.insertOne({
                    email: user.email,
                    name: user.name,
                    approved: false,
                    createdAt: new Date(),
                });

                console.log("New user inserted with approval pending.");
                return false;
            }

            return existingUser.approved === true;
        }
    },
    session: { strategy: 'jwt' },
});