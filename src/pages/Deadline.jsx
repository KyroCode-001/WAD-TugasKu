import { Link } from "react-router";
import { useTugas } from "../context/TugasContext.jsx";
import KartuTugas from "../components/KartuTugas.jsx";
import FetchTugas from "../components/FetchTugas.jsx";
import ToDoList from "../components/ToDoList.jsx";

export default function Deadline() {
  const { tugas } = useTugas();
  return (
    <section className="bg-white p-8">
      <h2 className="text-2xl font-bold text-slate-800">Papan Tugas</h2>
      <p className="mt-1 text-slate-500">Semua tugas mata kuliah — warna badge memberi tahu yang mana mendesak.</p>
      <div className="mt-4">
        <Link to="/tugas/baru" className="rounded-lg bg-indigo-600 text-white px-4 py-1 text-sm hover:bg-indigo-700 no-underline">+ Tambah Tugas</Link>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <FetchTugas />
        <ToDoList />
        {tugas.map(t => (
          <Link key={t.id} to={`/tugas/${t.id}`} className="no-underline">
            <KartuTugas tugas={t} />
          </Link>
        ))}
      </div>
    </section>
  );
}