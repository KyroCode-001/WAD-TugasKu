const warnaBadge = {
  selesai: "bg-emerald-100 text-emerald-700",
  berjalan: "bg-amber-100 text-amber-700",
  terlewat: "bg-rose-100 text-rose-700",
};

const labelBadge = {
  selesai: "Selesai",
  berjalan: "Berjalan",
  terlewat: "Terlewat",
};

export default function KartuTugas({ tugas }) {
  return (
    <article className="rounded-xl bg-white border p-5 efek-angkat">
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${warnaBadge[tugas.status]}`}>
        {labelBadge[tugas.status]}
      </span>
      <h3 className="mt-3 font-bold text-slate-800">{tugas.judul}</h3>
      <p className="mt-1 text-sm text-slate-500">{tugas.matkul} · deadline {tugas.deadline}</p>
    </article>
  );
}