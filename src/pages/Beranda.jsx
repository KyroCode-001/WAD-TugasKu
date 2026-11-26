import { Link } from "react-router";
import { useTugas } from "../context/TugasContext.jsx";
import Counter from "../components/Counter.jsx";

export default function Beranda() {
  const { tugas } = useTugas();
  const selesai = tugas.filter(t => t.status === "selesai").length;
  const berjalan = tugas.filter(t => t.status === "berjalan").length;
  const terlewat = tugas.filter(t => t.status === "terlewat").length;

  return (
    <section className="p-8 animasi-muncul">
      <h1 className="text-4xl font-bold text-cyan-600">Semua tugas, di satu layar.</h1>
      <p className="mt-2 text-slate-500">Tabel pemantau tugas dan deadline mata kuliah prodi Computer Science — biar tidak ada lagi yang diingat 2 jam sebelum dikumpulkan.</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Counter />
        <div className="rounded-xl bg-white border p-5 efek-angkat"><p className="text-sm text-slate-500">Selesai</p><p className="text-3xl font-bold text-emerald-600">{selesai}</p></div>
        <div className="rounded-xl bg-white border p-5 efek-angkat"><p className="text-sm text-slate-500">Berjalan</p><p className="text-3xl font-bold text-amber-500">{berjalan}</p></div>
        <div className="rounded-xl bg-white border p-5 efek-angkat"><p className="text-sm text-slate-500">Terlewat</p><p className="text-3xl font-bold text-rose-600">{terlewat}</p></div>
      </div>
      <div className="mt-6">
        <Link to="/deadline" className="rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-700 no-underline">Lihat Papan Tugas</Link>
      </div>
    </section>
  );
}