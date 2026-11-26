import { Link } from "react-router";
import { useTugas } from "../context/TugasContext.jsx";

export default function Arsip() {
  const { tugas } = useTugas();
  const selesai = tugas.filter(t => t.status === "selesai");

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-slate-800">Arsip Tugas Selesai</h2>
      {selesai.length === 0 ? (
        <p className="mt-4 text-slate-500">Belum ada tugas selesai.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {selesai.map(t => (
            <li key={t.id} className="rounded-xl bg-white border p-4 efek-angkat">
              <Link to={`/tugas/${t.id}`} className="font-bold text-slate-800 no-underline">{t.judul}</Link>
              <p className="text-sm text-slate-500">{t.matkul} · {t.deadline}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}