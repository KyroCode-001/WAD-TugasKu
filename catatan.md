# Catatan Tugas WAD 1 — Muhammad Irsyad Syafei

## 1. Tag HTML yang dipakai dan fungsinya

| Tag | Fungsi |
|---|---|
| `<!DOCTYPE html>` | Menandai dokumen ini sebagai HTML5 |
| `<html lang="id">` | Akar dokumen sekaligus menandai bahasa konten |
| `<head>` | Wadah pengaturan tak terlihat: meta, judul, dan link CSS |
| `<meta charset="UTF-8">` | Standar huruf agar teks tampil normal |
| `<meta name="viewport">` | Agar halaman menyesuaikan lebar layar HP |
| `<title>` | Judul di tab browser |
| `<link rel="stylesheet">` | Menyambungkan halaman ke file style.css |
| `<header>` | Tag semantik untuk bagian paling atas halaman |
| `<nav>` | Tag semantik untuk wadah menu navigasi |
| `<ul>` dan `<li>` | Daftar dan item — dipakai untuk menyusun menu |
| `<a href="#id">` | Tautan; tanda pagar berarti lompat ke bagian halaman yang sama |
| `<main>` | Tag semantik untuk isi utama halaman |
| `<section id="...">` | Blok isi yang berdiri sendiri; id-nya jadi sasaran lompatan menu |
| `<h1>`, `<h2>`, `<h3>` | Judul bertingkat: paling besar sampai sub-judul kartu |
| `<p>` | Paragraf teks |
| `<footer>` | Tag semantik untuk bagian bawah halaman |
| `<div class="...">` | Kotak wadah serbaguna: logo, kartu, info footer |

## 2. Properti CSS untuk menyusun header dan footer

**Header (logo kiri, menu kanan):**
- `display: flex` — mengubah header menjadi wadah flexbox agar anak-anaknya bisa diatur tata letaknya
- `justify-content: space-between` — anak pertama (logo) terdorong ke kiri, anak terakhir (nav) ke kanan
- `align-items: center` — logo dan menu sejajar di tengah secara tegak
- Pada `nav ul`: `display: flex` + `gap: 24px` membuat menu tersusun mendatar berjarak rapi, `list-style: none` menghapus bullet

**Footer (tiga bagian sejajar):**
- `display: flex` + `gap: 24px` — menyusun logo, deskripsi, dan info dalam satu baris
- `flex: 1` pada ketiga anaknya — membagi lebar jadi tiga bagian sama rata
- `text-align: center` dan `text-align: right` — mengatur perataan teks kolom tengah dan kanan

**Bonus:**
- `@media (max-width: 600px)` — jika layar sempit, kartu dan footer berubah `flex-direction: column` (menumpuk ke bawah).
- `html { scroll-behavior: smooth; }` — lompatan menu ke setiap section dianimasikan menggulir dengan halus (smooth scrolling), bukan berpindah seketika.
- `nav a:hover` — warna tautan menu berubah saat kursor menimpanya, memberi umpan balik visual untuk user.

## 3. Kesulitan yang dihadapi dan cara mengatasinya

1. Tidak paham kenapa `nav ul` perlu `display: flex` sendiri padahal `header` sudah flex.
   Solusi: belajar bahwa flex hanya mengatur anak langsung (logo dan nav), tidak menular ke dalam — jadi `ul` harus menjadi wadah flex sendiri agar menu tersusun mendatar.
2. Tidak paham cara kerja `flex: 1` pada footer.
   Solusi: memahami bahwa `flex: 1` memberi tiap anak porsi ruang sama rata (sepertiga lebar), sehingga tiga kolom tetap stabil rapi tanpa `space-between`.
3. Blok `@media (max-width: 600px)` awalnya asing bagi saya.
   Solusi: memahami ini sebagai syarat — aturan di dalamnya hanya aktif saat layar sempit, sehingga kartu dan footer menumpuk ke bawah di layar HP.
4. Menu navigasi ketika diklik terasa tidak berfungsi: alamat halaman berubah (misal menjadi ...index.html#tentang) tetapi halaman tidak bergeser.
   Solusi: mengetahui itu bukan error — halaman masih terlalu pendek sehingga tidak ada ruang untuk digulir, dan lompatan anchor tetap tercatat di URL. Sebagai sentuhan tambahan, menambahkan `scroll-behavior: smooth` agar lompatan beranimasi halus saat halaman sudah bisa digulir.