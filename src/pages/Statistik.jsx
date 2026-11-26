import { useTugas } from "../context/TugasContext.jsx";

export default function Statistik() {
  const { tugas } = useTugas();
  const perMatkul = tugas.reduce((acc, t) => {
    acc[t.matkul] = (acc[t.matkul] || 0) + 1;
    return acc;
  }, {});
  const selesai = tugas.filter(t => t.status === "selesai").length;

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-slate-800">Statistik & Progress</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl bg-white border p-5 efek-angkat">
          <p className="text-sm text-slate-500">Total / Selesai</p>
          <p className="text-3xl font-bold text-slate-800">{tugas.length} / {selesai}</p>
        </div>
        <div className="rounded-xl bg-white border p-5 efek-angkat">
          <h3 className="font-bold mb-2">Per mata kuliah</h3>
          <ul className="space-y-1 text-sm">
            {Object.entries(perMatkul).map(([m, n]) => (
              <li key={m} className="flex justify-between"><span>{m}</span><span className="font-semibold">{n}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}