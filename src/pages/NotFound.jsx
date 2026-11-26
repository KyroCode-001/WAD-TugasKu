import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold text-rose-600">404</h1>
      <p className="mt-2 text-slate-500">Halaman tidak ditemukan.</p>
      <Link to="/" className="mt-4 inline-block text-indigo-600">Kembali ke Beranda</Link>
    </section>
  );
}