import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl mb-4">404</h1>
      <p className="text-gray-500 mb-8">page not found</p>
      <Link href="/">
        <button className="px-6 py-2 bg-gray-900 hover:bg-gray-800 rounded-md transition">return home</button>
      </Link>
    </div>
  )
}

