import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Link className="text-3xl grid place-content-center min-h-screen" href="/feedback">Go to feedback</Link>
    </main>
  )
}