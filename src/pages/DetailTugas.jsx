import { useParams, useNavigate, Link } from "react-router";
import { useTugas } from "../context/TugasContext.jsx";

const warnaBadge = {
  selesai: "bg-emerald-100 text-emerald-700",
  berjalan: "bg-amber-100 text-amber-700",
  terlewat: "bg-rose-100 text-rose-700",
};
const labelBadge = { selesai: "Selesai", berjalan: "Berjalan", terlewat: "Terlewat" };

export default function DetailTugas() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tugas, ubahStatus, hapusTugas } = useTugas();
  const t = tugas.find(x => String(x.id) === String(id));

  if (!t) {
    return (
      <section className="p-8">
        <h2 className="text-2xl font-bold text-rose-600">Tugas tidak ditemukan</h2>
        <Link to="/deadline" className="text-indigo-600">Kembali ke Papan Tugas</Link>
      </section>
    );
  }

  return (
    <section className="p-8">
      <button onClick={() => navigate(-1)} className="text-sm text-slate-500 hover:text-indigo-600 mb-4">← Kembali</button>
      <article className="rounded-xl bg-white border p-6 efek-angkat max-w-xl">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${warnaBadge[t.status]}`}>{labelBadge[t.status]}</span>
        <h2 className="mt-3 text-2xl font-bold text-slate-800">{t.judul}</h2>
        <p className="mt-1 text-slate-500">{t.matkul} · deadline {t.deadline}</p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => ubahStatus(t.id, "selesai")} className="rounded-lg bg-emerald-600 text-white px-3 py-1 text-sm hover:bg-emerald-700">Tandai Selesai</button>
          <button onClick={() => ubahStatus(t.id, "berjalan")} className="rounded-lg bg-amber-500 text-white px-3 py-1 text-sm hover:bg-amber-600">Berjalan</button>
          <button onClick={() => { hapusTugas(t.id); navigate("/deadline"); }} className="rounded-lg bg-rose-500 text-white px-3 py-1 text-sm hover:bg-rose-600">Hapus</button>
        </div>
      </article>
    </section>
  );
}