import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Beranda from "./pages/Beranda.jsx";
import Deadline from "./pages/Deadline.jsx";
import DetailTugas from "./pages/DetailTugas.jsx";
import TambahTugas from "./pages/TambahTugas.jsx";
import Kalender from "./pages/Kalender.jsx";
import Statistik from "./pages/Statistik.jsx";
import Arsip from "./pages/Arsip.jsx";
import Tips from "./pages/Tips.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/deadline" element={<Deadline />} />
        <Route path="/tugas/baru" element={<TambahTugas />} />
        <Route path="/tugas/:id" element={<DetailTugas />} />
        <Route path="/kalender" element={<Kalender />} />
        <Route path="/kalender/:tanggal" element={<Kalender />} />
        <Route path="/statistik" element={<Statistik />} />
        <Route path="/arsip" element={<Arsip />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}