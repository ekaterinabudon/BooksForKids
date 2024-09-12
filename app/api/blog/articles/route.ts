import { NextResponse } from "next/server";
import {db} from "@/lib/mongodb";
import { getDbAndReqBody, getBlogArticles } from "@/lib/utils/api-routes";

export async function GET() {
    return NextResponse.json(await getBlogArticles(await db))
}