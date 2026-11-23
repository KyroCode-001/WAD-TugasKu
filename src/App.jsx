import Counter from "./components/Counter.jsx"
import tugas from "./data/tugas.js";
import ToDoList from "./components/ToDoList.jsx";
import KartuTugas from "./components/KartuTugas.jsx";


export default function App() {
  return (
    <>
  <header className="flex items-center justify-between px-8 py-4 bg-white border-b shadow-sm">
    <a href="#beranda" className="text-2xl font-bold no-underline text-slate-800">TugasKu<span className="text-cyan-400">.</span></a>
    <nav>
      <ul className="flex gap-6 list-none">
        <li><a href="#beranda" className="no-underline text-slate-600 hover:text-indigo-600">Beranda</a></li>
        <li><a href="#deadline" className="no-underline text-slate-600 hover:text-indigo-600">Deadline</a></li>
        <li><a href="#tips" className="no-underline text-slate-600 hover:text-indigo-600">Tips</a></li>
        <li><a href="#kontak" className="no-underline text-slate-600 hover:text-indigo-600">Kontak</a></li>
      </ul>
    </nav>

  </header>
  
  <main>

  <section id="beranda" className="p-8 animasi-muncul">
      <h1 className="text-4xl font-bold text-cyan-600">Semua tugas, di satu layar.</h1>
      <p className="mt-2 text-slate-500">Tabel pemantau tugas dan deadline mata kuliah prodi Computer Science
        — biar tidak ada lagi yang diingat 2 jam sebelum dikumpulkan.</p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Counter />

        <div className="rounded-xl bg-white border p-5 efek-angkat">
          <p className="text-sm text-slate-500">Selesai</p>
          <p className="text-3xl font-bold text-emerald-600">3</p>
        </div>
        <div className="rounded-xl bg-white border p-5 efek-angkat">
          <p className="text-sm text-slate-500">Berjalan</p>
          <p className="text-3xl font-bold text-amber-500">4</p>
        </div>
        <div className="rounded-xl bg-white border p-5 efek-angkat">
          <p className="text-sm text-slate-500">Terlewat</p>
          <p className="text-3xl font-bold text-rose-600">1</p>
        </div>
      </div>
    </section>
  
    <section id="deadline" className="bg-white p-8">
      <h2 className="text-2xl font-bold text-slate-800">Papan Tugas</h2>
      <p className="mt-1 text-slate-500">Semua tugas mata kuliah — warna badge memberi tahu yang mana mendesak.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <ToDoList />
        
    {tugas.map((t) => (
          <KartuTugas key={t.id} tugas={t} />
        ))}

      </div>
    </section>

    <section id="tips" className="p-8">
      <h2 className="text-2xl font-bold text-slate-800">Tips Anti Kebut Semalam</h2>
      <p className="mt-1 text-slate-500">Kebiasaan kecil penjaga deadline.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

        <article className="rounded-xl bg-white border p-5 efek-angkat">
          <p className="text-3xl">🧩</p>
          <h3 className="mt-2 font-bold text-slate-800">Pecah jadi potongan kecil</h3>
          <p className="mt-1 text-sm text-slate-500">Tugas besar bikin kepikiran; cicil 30 menit. Kerjakan satu potongan hari ini juga.</p>
        </article>

        <article className="rounded-xl bg-white border p-5 efek-angkat">
          <p className="text-3xl">🎯</p>
          <h3 className="mt-2 font-bold text-slate-800">Mulai dari yang paling dekat</h3>
          <p className="mt-1 text-sm text-slate-500">Urutkan berdasarkan deadline, bukan berdasarkan mood.</p>
        </article>

        <article className="rounded-xl bg-white border p-5 efek-angkat">
          <p className="text-3xl">📦</p>
          <h3 className="mt-2 font-bold text-slate-800">Commit kecil, tapi rutin</h3>
          <p className="mt-1 text-sm text-slate-500">Selesai satu potongan = satu commit. Sejarah pengerjaan menjadi bukti kerja — seperti repo ini.</p>
        </article>

      </div>
    </section>
    
  </main>

  <footer id="kontak" className="bg-slate-900 text-slate-300 p-8 md:p-10">
    <div className="flex flex-col md:flex-row gap-8">

      <div className="flex-1">
        <p className="text-2xl font-bold text-white">TugasKu<span className="text-cyan-400">.</span></p>
      </div>

      <p className="flex-1 text-sm leading-relaxed">Papan pemantau tugas dan deadline mata kuliah Computer Science — satu page untuk semua.</p>

      <div className="flex-1 text-sm md:text-right">
        <p>Muhammad Irsyad Syafei</p>
        <p className="mt-1">mirsyadsyafei@gmail.com</p>
        <p className="mt-1">Depok, Indonesia</p>
      </div>

    </div>
    <p className="mt-8 border-t border-slate-700 pt-4 text-xs text-slate-500">© 2026 TugasKu by KyroCode.inc  — dikelola dengan Git, disimpan di GitHub.</p>
  </footer>
 </>
  );
}