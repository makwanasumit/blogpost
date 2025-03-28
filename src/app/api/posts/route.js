import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page")) || 1;
        const cat = searchParams.get("cat") || null;
        const POST_PER_PAGE = 2;

        // Count total posts based on category filter
        const totalPosts = await prisma.Post.count({
            where: cat ? { catSlug: cat } : undefined
        });

        // Fetch paginated posts
        const posts = await prisma.Post.findMany({
            where: cat ? { catSlug: cat } : undefined,
            take: POST_PER_PAGE,
            skip: POST_PER_PAGE * (page - 1),
            orderBy: { createdAt: "desc" } // Ensure latest posts appear first
        });

        return NextResponse.json({
            posts,
            totalPosts,
            currentPage: page,
            totalPages: Math.ceil(totalPosts / POST_PER_PAGE)
        }, { status: 200 });

    } catch (err) {
        console.error("API Error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
};
