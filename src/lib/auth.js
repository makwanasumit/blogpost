import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { Prisma } from "@prisma/client"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"



export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(Prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
})