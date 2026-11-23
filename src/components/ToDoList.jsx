import { useState } from "react";

export default function TodoList() {
  const [daftar, setDaftar] = useState([
    { id: 1, teks: "Implementasi CSS & Tailwind", selesai: false },
    { id: 2, teks: "Latihan nested loop", selesai: false },
  ]);
  const [input, setInput] = useState("");

  function tambah() {
    if (input.trim() === "") return;
    setDaftar([...daftar, { id: Date.now(), teks: input, selesai: false }]);
    setInput("");
  }

  function centang(id) {
    setDaftar(daftar.map(t => t.id === id ? { ...t, selesai: !t.selesai } : t));
  }

  function hapus(id) {
    setDaftar(daftar.filter(t => t.id !== id));
  }

  return (
    <div className="rounded-xl bg-white border p-5 efek-angkat">
      <h3 className="font-bold text-slate-800 mb-3">To-Do List Interaktif</h3>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && tambah()}
          placeholder="Tulis tugas baru..."
          className="flex-1 rounded-lg border px-3 py-1 text-sm"
        />
        <button onClick={tambah} className="rounded-lg bg-indigo-600 text-white px-4 py-1 text-sm hover:bg-indigo-700">
          Tambah
        </button>
      </div>
      <ul className="space-y-2">
        {daftar.map(t => (
          <li key={t.id} className="flex items-center gap-2">
            <input type="checkbox" checked={t.selesai} onChange={() => centang(t.id)} />
            <span className={t.selesai ? "line-through text-slate-400" : "text-slate-700"}>
              {t.teks}
            </span>
            <button onClick={() => hapus(t.id)} className="ml-auto text-rose-500 text-sm hover:text-rose-700">✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}