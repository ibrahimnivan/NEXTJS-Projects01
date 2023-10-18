import { limiter } from "../config/limiter"
import { NextResponse } from "next/server"

export async function GET(request: Request) {

  const origin = request.headers.get('origin')

  const remaining = await limiter.removeTokens(1)
  console.log('remaining: ', remaining)

  if (remaining < 0 ) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too many request",
      headers: {
        'Acess-Control-Allow-Origin': origin || '*',
        'Control-Type': 'text/plain',
      }
    })
  }
  return new Response('Hello, Next.js')
} 