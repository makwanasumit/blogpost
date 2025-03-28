// import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaAdapter } from "@auth/prisma-adapter"

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import { prisma } from "./prisma"

// import { PrismaClient } from "@prisma/client"



// const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session({ session, user }) {
            session.user.id = user.id
            return session
        }
    },
    debug: process.env.NODE_ENV === 'development'
})