import { NextRequest, NextResponse } from "next/server";
import {PrismaClient} from "@prisma/client";
import client from "@/db"

export async function GET(req: NextRequest){
  const user = await client.user.findFirst();
  return NextResponse.json({
    email:user?.username,
    username:"Harsh"
  })
}

export async function POST(req: NextRequest){

  const body = await req.json();
  
  await client.user.create({
    data:{
      username: body.username,
      password: body.password
    }
  })



  return Response.json({
    message: "You are logged in!"
  })
}


//for headers and searchParams
// console.log(req.headers.get("authorization"));
//console.log(req.nextUrl.searchParams.get("name"));