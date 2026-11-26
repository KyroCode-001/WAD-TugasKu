import { useState } from "react";
import { useNavigate } from "react-router";
import { useTugas } from "../context/TugasContext.jsx";

export default function TambahTugas() {
  const [form, setForm] = useState({ judul: "", matkul: "", deadline: "" });
  const navigate = useNavigate();
  const { tambahTugas } = useTugas();

  function submit(e) {
    e.preventDefault();
    if (!form.judul.trim()) return;
    tambahTugas(form);
    navigate("/deadline");
  }

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-slate-800">Tambah Tugas</h2>
      <form onSubmit={submit} className="mt-6 max-w-md space-y-3">
        <input value={form.judul} onChange={e => setForm({ ...form, judul: e.target.value })} placeholder="Judul tugas" className="w-full rounded-lg border px-3 py-2 text-sm" />
        <input value={form.matkul} onChange={e => setForm({ ...form, matkul: e.target.value })} placeholder="Mata kuliah" className="w-full rounded-lg border px-3 py-2 text-sm" />
        <input value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} placeholder="Deadline (mis. 20 Nov)" className="w-full rounded-lg border px-3 py-2 text-sm" />
        <button type="submit" className="rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-700">Simpan</button>
      </form>
    </section>
  );
}