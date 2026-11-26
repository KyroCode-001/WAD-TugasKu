import { NavLink, Outlet } from "react-router";

export default function Layout() {
  const link = "no-underline text-slate-600 hover:text-indigo-600";
  const aktif = "text-indigo-600 font-semibold";
  return (
    <>
      <header className="flex items-center justify-between px-8 py-4 bg-white border-b shadow-sm">
        <NavLink to="/" className="text-2xl font-bold no-underline text-slate-800">
          TugasKu<span className="text-cyan-400">.</span>
        </NavLink>
        <nav>
          <ul className="flex gap-6 list-none">
            <li><NavLink to="/" end className={({ isActive }) => (isActive ? aktif : link)}>Beranda</NavLink></li>
            <li><NavLink to="/deadline" className={({ isActive }) => (isActive ? aktif : link)}>Deadline</NavLink></li>
            <li><NavLink to="/kalender" className={({ isActive }) => (isActive ? aktif : link)}>Kalender</NavLink></li>
            <li><NavLink to="/statistik" className={({ isActive }) => (isActive ? aktif : link)}>Statistik</NavLink></li>
            <li><NavLink to="/arsip" className={({ isActive }) => (isActive ? aktif : link)}>Arsip</NavLink></li>
            <li><NavLink to="/tips" className={({ isActive }) => (isActive ? aktif : link)}>Tips</NavLink></li>
          </ul>
        </nav>
      </header>

      <main className="min-h-screen">
        <Outlet />
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
        <p className="mt-8 border-t border-slate-700 pt-4 text-xs text-slate-500">© 2026 TugasKu by KyroCode.inc — dikelola dengan Git, disimpan di GitHub.</p>
      </footer>
    </>
  );
}