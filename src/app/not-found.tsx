import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#030303] text-white">
      <h2 className="text-4xl font-bold">404 - Page Not Found</h2>
      <Link href="/" className="mt-4 text-[#ff7a18] hover:underline">
        Return Home
      </Link>
    </div>
  );
}
