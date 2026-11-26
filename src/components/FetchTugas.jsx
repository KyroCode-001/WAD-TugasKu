import { useState, useEffect } from "react";

export default function FetchTugas() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;


    fetch("/tugas-dummy.json")
      .then(res => {
        if (!res.ok) throw new Error("Gagal mengambil data");
        return res.json();
      })
      .then(hasil => {
        if (!ignore) setData(hasil.tugas);
      })
      .catch(err => {
        if (!ignore) setError(err.message);
      });

    return () => { ignore = true; };
  }, []);

  if (error) return <p className="text-rose-600">Error: {error}</p>;
  if (data === null) return <p className="text-slate-500">Memuat data tugas...</p>;

  return (
    <div className="rounded-xl bg-white border p-5 efek-angkat">
      <h3 className="font-bold text-slate-800 mb-3">Data Tugas</h3>
      <ul className="space-y-2">
        {data.map(t => (
          <li key={t.id} className="text-sm">
            <span className="font-semibold">{t.judul}</span> — {t.matkul} ({t.status})
          </li>
        ))}
      </ul>
    </div>
  );
}