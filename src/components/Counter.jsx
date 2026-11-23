import { useState } from "react";

export default function Counter() {
  const [hitungan, setHitungan] = useState(8);

  return (
    <div className="rounded-xl bg-white border p-5 efek-angkat text-center">
      <p className="text-sm text-slate-500">Total tugas (klik untuk mengubah)</p>
      <p className="text-3xl font-bold text-slate-800">{hitungan}</p>
      <div className="mt-3 flex gap-2 justify-center">
        <button
          onClick={() => setHitungan(hitungan + 1)}
          className="rounded-lg bg-indigo-600 text-white px-4 py-1 text-sm hover:bg-indigo-700"
        >
          + Tambah
        </button>
        <button
          onClick={() => setHitungan(hitungan - 1)}
          className="rounded-lg bg-slate-200 text-slate-700 px-4 py-1 text-sm hover:bg-slate-300"
        >
          − Kurangi
        </button>
        <button
          onClick={() => setHitungan(8)}
          className="rounded-lg bg-slate-100 text-slate-500 px-4 py-1 text-sm hover:bg-slate-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}