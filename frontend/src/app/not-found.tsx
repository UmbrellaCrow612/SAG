// app/not-found.tsx or pages/404.tsx in Next.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <main className="relative text-center">
        <h1 className="text-7xl font-extrabold text-pink-500 drop-shadow-lg animate-bounce">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-white">
          Oops! Page Not Found
        </p>
        <p className="mt-2 text-gray-400">
          Seems like this page wandered off into another dimension...
        </p>

        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full shadow-md transition duration-300"
        >
          🏠 Return Home
        </Link>
      </main>
    </div>
  );
}
