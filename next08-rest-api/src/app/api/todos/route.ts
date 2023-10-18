import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

const API_KEY: string = process.env.DATA_API_KEY as string

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL)

  const todos: Todo[] = await res.json()

  return NextResponse.json(todos)
}

export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json()

  if(!id) return NextResponse.json({ "message": "Todo id required"})

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY
    }
  })

  return NextResponse.json({"message": `T0do ${id} deleted`})
}


/* POST: Metode ini digunakan untuk mengirim data ke server, misalnya, saat Anda mengisi formulir online. Data yang dikirim dengan metode POST disertakan dalam badan permintaan HTTP, yang tidak terlihat dalam URL. */

export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json()

  if(!userId || !title) return NextResponse.json({ "message": "Missing required data"})

  const res = await fetch(DATA_SOURCE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY
    },
    body: JSON.stringify({
      userId, title, completed: false
    })
  })

  const newTodo: Todo = await res.json()

  return NextResponse.json(newTodo)
}

/* PUT: Metode ini digunakan untuk memperbarui atau membuat sumber daya di server. Biasanya digunakan dalam konteks RESTful API untuk mengirim data untuk pembuatan atau perubahan sumber daya. */

export async function PUT(request: Request) {
  const { userId, id, title, completed }: Todo = await request.json()

  if(!userId || !id || !title || typeof(completed) !== 'boolean') return NextResponse.json({ "message": "Missing required data"})

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY
    },
    body: JSON.stringify({
      userId, title, completed
    })
  })

  const updatedTodo: Todo = await res.json()

  return NextResponse.json(updatedTodo)
}