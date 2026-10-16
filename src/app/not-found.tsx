import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-serif mb-4">Page Not Found</h2>
      <p className="text-sm text-brand-dark/70 mb-6">Could not find requested resource</p>
      <Link
        href="/"
        className="px-6 py-2 bg-[#dfd5c6] text-[#2b2b2b] rounded-full text-xs font-semibold tracking-wider uppercase hover:opacity-80 transition-opacity"
      >
        Return Home
      </Link>
    </div>
  );
}
