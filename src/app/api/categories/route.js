import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const catSlug = searchParams.get("slug");

    try {
        let categories;

        if (catSlug) {
            categories = await prisma.Category.findMany({
                where: { slug: catSlug }, // Ensure filtering by slug works
            });
        } else {
            categories = await prisma.Category.findMany(); // Return all categories if no slug
        }

        return new NextResponse(JSON.stringify(categories), { status: 200 });
    } catch (err) {
        console.error("Error fetching categories:", err);
        return new NextResponse(JSON.stringify({ error: err.message }), { status: 500 });
    }
};
