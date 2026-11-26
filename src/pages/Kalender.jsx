import { useParams, Link } from "react-router";
import { useTugas } from "../context/TugasContext.jsx";

export default function Kalender() {
  const { tanggal } = useParams();
  const { tugas } = useTugas();
  const hariUnik = [...new Set(tugas.map(t => t.deadline))];
  const byDate = tanggal ? tugas.filter(t => t.deadline === decodeURIComponent(tanggal)) : [];

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-slate-800">Kalender Deadline</h2>
      {!tanggal ? (
        <>
          <p className="mt-2 text-slate-500">Pilih tanggal untuk melihat tugas.</p>
          <ul className="mt-4 space-y-2">
            {hariUnik.map(d => (
              <li key={d}>
                <Link to={`/kalender/${encodeURIComponent(d)}`} className="text-indigo-600 font-semibold">{d}</Link>
                <span className="text-slate-500"> — {tugas.filter(t => t.deadline === d).length} tugas</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <p className="mt-2 text-slate-500">Tugas deadline {decodeURIComponent(tanggal)}</p>
          <ul className="mt-4 space-y-2">
            {byDate.length === 0 ? <li className="text-slate-500">Tidak ada tugas.</li> : byDate.map(t => (
              <li key={t.id} className="rounded-xl bg-white border p-3">{t.judul} — {t.matkul} ({t.status})</li>
            ))}
          </ul>
          <Link to="/kalender" className="mt-4 inline-block text-indigo-600 text-sm">← Kembali ke kalender</Link>
        </>
      )}
    </section>
  );
}