const tips = [
  { icon: "🧩", judul: "Pecah jadi potongan kecil", desc: "Tugas besar bikin kepikiran; cicil 30 menit. Kerjakan satu potongan hari ini juga." },
  { icon: "🎯", judul: "Mulai dari yang paling dekat", desc: "Urutkan berdasarkan deadline, bukan berdasarkan mood." },
  { icon: "📦", judul: "Commit kecil, tapi rutin", desc: "Selesai satu potongan = satu commit. Sejarah pengerjaan menjadi bukti kerja." },
];

export default function Tips() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-slate-800">Tips Anti Kebut Semalam</h2>
      <p className="mt-1 text-slate-500">Kebiasaan kecil penjaga deadline.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {tips.map(t => (
          <article key={t.judul} className="rounded-xl bg-white border p-5 efek-angkat">
            <p className="text-3xl">{t.icon}</p>
            <h3 className="mt-2 font-bold text-slate-800">{t.judul}</h3>
            <p className="mt-1 text-sm text-slate-500">{t.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}