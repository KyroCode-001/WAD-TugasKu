import { createContext, useContext, useState } from "react";
import tugasAwal from "../data/tugas.js";

const TugasContext = createContext(null);

export function TugasProvider({ children }) {
  const [tugas, setTugas] = useState(tugasAwal);

  function tambahTugas(bar) {
    setTugas(prev => [...prev, { id: Date.now(), status: "berjalan", ...bar }]);
  }
  function ubahStatus(id, status) {
    setTugas(prev => prev.map(t => (t.id === id ? { ...t, status } : t)));
  }
  function hapusTugas(id) {
    setTugas(prev => prev.filter(t => t.id !== id));
  }

  return (
    <TugasContext.Provider value={{ tugas, tambahTugas, ubahStatus, hapusTugas }}>
      {children}
    </TugasContext.Provider>
  );
}

export function useTugas() {
  const ctx = useContext(TugasContext);
  if (!ctx) throw new Error("useTugas harus di dalam TugasProvider");
  return ctx;
}