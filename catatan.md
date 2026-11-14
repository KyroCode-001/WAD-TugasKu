# Catatan Tugas WAD 1 — Versi 2: TugasKu
Muhammad Irsyad Syafei · Web Application Development

## 1. Konsep Halaman
TugasKu adalah papan pemantau tugas dan deadline untuk mahasiswa Computer Science
yang mengelola banyak mata kuliah sekaligus. Masalahnya: tugas tercecer di
catatan HP, grup chat, dan kepala — sementara deadline sering baru diingat menjelang
waktu pengumpulan. Solusinya: satu halaman yang menampilkan seluruh tugas dengan
badge warna status (hijau = selesai, kuning = berjalan, merah = terlewat) dan
statistik ringkas di bagian pembuka.

## 2. Perubahan dari Versi 1
| Aspek | Versi 1 | Versi 2 |
|---|---|---|
| Konsep | halaman latihan profil | TugasKu — papan tugas berkonsep |
| Styling | CSS murni di style.css (89 baris) | Tailwind (CDN) + CSS tambahan |
| Layout | flexbox manual | kelas Tailwind: flex dan grid responsive |
| Isi | 2 section generik | hero statistik + papan 8 kartu + 3 tips |
| Git | belum ada | repo GitHub, commit bertahap per tahap pengerjaan |

## 3. Tag HTML yang Dipakai
`<header>` `<nav>` `<main>` `<section>` `<article>` (kartu — item berdiri sendiri) `<footer>` `<h1>`-`<h3>` `<p>` `<a href="#...">` (lompat antar-section) `<span>` (badge status) `<ul>` `<li>` `<div>` — semuanya tag semantik, struktur sama seperti versi 1.

## 4. Kelas Tailwind Utama dan Fungsinya
- Layout: `flex`, `justify-between`, `items-center`, `grid`, `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, `gap-4`, `flex-1`
- Responsive: awalan `sm:` `md:` `lg:` = aturan berlaku mulai lebar layar tertentu
- Ruang: `p-8`, `px-8`, `py-4`, `mt-6`, `pt-4` (angka × 4px)
- Tampilan: `bg-white`, `bg-slate-50/900`, `text-indigo-600`, `font-bold`, `text-4xl`, `rounded-xl`, `rounded-full` (badge pil), `border`, `border-t`, `shadow-sm`
- State: `hover:text-indigo-600` — reaksi saat kursor menimpa
- Pemasangan: satu baris `<script>` CDN di head; kelas dikompilasi Tailwind saat halaman dibuka.

## 5. CSS di style.css — Pembagian Kerja dengan Tailwind
Tailwind mengurus layout, jarak, warna, tipografi standar. CSS asli mengurus:
`@import` font Plus Jakarta Sans + `font-family`; `@keyframes muncul` + `.animasi-muncul` (animasi); `.efek-angkat` (kartu terangkat saat hover); `::selection`; `html { scroll-behavior: smooth }`. Satu elemen sering memakai keduanya sekaligus (contoh: `class="rounded-xl border p-5 efek-angkat"`).

## 6. Git: Cara Dipakai
Repo diinisialisasi di folder tugas, versi 1 lama di-commit apa adanya sebagai
arsip sebelum diubah, lalu setiap tahap pengerjaan (kerangka, header+hero,
papan tugas, tips, footer, catatan) menjadi satu commit bermakna, lalu
didorong ke GitHub sebagai pengumpulan. `git log` di repo memperlihatkan
keseluruhan proses transformasi versi 1 menjadi versi 2.

## 7. Kesulitan dan Cara Mengatasinya
1. Kelas Tailwind tidak berefek sama sekali. Penyebab: attribute src tertulis
   di luar tag script karena bracket keburu tertutup. Solusi: menulis
   `<script src="...">` dengan src di dalam bracket.
2. Push pertama ditolak (rejected, fetch first). Penyebab: repo dibuat dengan
   README tercentang sehingga ada sejarah di GitHub yang tidak dikenal lokal.
   Solusi: `git pull origin main --allow-unrelated-histories --no-edit` lalu push ulang.
3. Nama repo salah ketik saat dibuat. Solusi: `git remote set-url origin <URL baru>` —
   memperbarui alamat tanpa membuat repo ulang.
4. Bingung membagi CSS dan Tailwind. Solusi: pembagian kerja — Tailwind untuk
   yang cepat dan berulang, CSS asli untuk font custom, animasi keyframes,
   dan efek hover kompleks.