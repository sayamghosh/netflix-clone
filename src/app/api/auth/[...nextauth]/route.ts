import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { AuthOptions } from 'next-auth';
import { connectDB } from '@/dbconfig/dbconnect';
import User from '@/models/userModel';


connectDB();
const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({user}) {
            try {
                await User.create({name:user.name, email:user.email, image:user.image});  
            } catch (error) {
                console.log("Mongo db not working",error);
            }
            return true; // Return `true` to allow sign-in, `false` to deny it
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };