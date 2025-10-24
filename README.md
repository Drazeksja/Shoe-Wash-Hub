# Shoe Wash Hub API 👟

![Shoe Wash Hub](https://img.shields.io/badge/Shoe_Wash_Hub-API-blue)

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)  
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey)](https://expressjs.com/)  
[![Supabase](https://img.shields.io/badge/Supabase-1.x-blueviolet)](https://supabase.com/)  
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-black)](https://vercel.com/)  

Shoe Wash Hub adalah sistem **RESTful API** berbasis **Node.js + Express.js** yang terhubung ke **Supabase** untuk mengelola layanan cuci sepatu.  
API ini mencakup manajemen kategori, pelanggan, sepatu, dan status layanan: **Menunggu, Diproses, Selesai**.  
Proyek ini siap untuk di-deploy ke **Vercel** dan digunakan sebagai backend untuk aplikasi web atau mobile.

---

## Deskripsi Umum
Proyek ini dibuat untuk mempermudah pengelolaan layanan cuci sepatu secara digital:

- Mencatat pelanggan dan kategori sepatu.
- Menambahkan data sepatu yang sedang dicuci.
- Melacak status layanan sepatu (Menunggu, Diproses, Selesai).
- Menampilkan daftar sepatu yang sedang/selesai dicuci secara real-time.

---

## Tujuan
- Menyediakan API terstruktur untuk sistem manajemen cuci sepatu.
- Terhubung langsung dengan Supabase Database agar data tersimpan secara real-time.
- Siap digunakan untuk integrasi front-end (React, Next.js, atau mobile app).

---

## Fitur Utama

- Kelola Kategori  : Tambah & tampilkan kategori sepatu (Sneakers, Boots, Slip-on).  
- Kelola Pelanggan : Tambah pelanggan baru yang mencuci sepatu.  
- Kelola Sepatu    : Tambah, update, hapus data sepatu & statusnya.  
- Status Otomatis  : Status sepatu berubah Menunggu → Diproses → Selesai.

---

## 🔌 Endpoint API - `/api/shoes`

| Method | Endpoint         | Deskripsi                       |
|--------|------------------|---------------------------------|
| GET    | `/api/shoes`     | Menampilkan semua data sepatu   | 
| POST   | `/api/shoes`     | Menambahkan data sepatu baru    | 
| PUT    | `/api/shoes/:id` | Memperbarui data sepatu         | 
| DEL    | `/api/shoes/:id` | Menghapus data sepatu           | 

<img width="1918" height="1130" alt="Image" src="https://github.com/user-attachments/assets/25d885b1-5647-4298-80c0-2b854e033ecc" />

<img width="1919" height="1124" alt="Image" src="https://github.com/user-attachments/assets/fc8e3cbd-d667-46ee-b264-ea85a10c0858" />

<img width="1918" height="1127" alt="Image" src="https://github.com/user-attachments/assets/0160e930-1e64-47cc-b668-2d0ab82236ec" />

<img width="1911" height="1118" alt="Image" src="https://github.com/user-attachments/assets/3db7cf78-8315-4630-8ed4-e59097bf71cc" />

---

## Alur Kerja API

- Pengguna Mengirim Permintaan: melalui Postman, web, atau mobile app
- Server Memproses Permintaan: Controller memanggil model untuk CRUD di Supabase
- Database Menangani Operasi Data: CRUD dijalankan, status selesai dicatat otomatis
- Server Mengembalikan Respons: JSON berisi data & pesan keberhasilan

---

## Teknologi yang Digunakan

- Node.js – runtime environment untuk backend
- Express.js – framework REST API
- JSON – format data
- Supabase – database & auth
- Vercel – deployment platform

---

## Link Deploy

<img width="651" height="524" alt="Image" src="https://github.com/user-attachments/assets/1a163770-744f-4d4d-a756-cc72abd98f47" />

Deployment
shoe-wash-2kt0lvfaj-pwijaya928s-projects.vercel.app

Domains
shoe-wash-hub.vercel.app

---

## Developer

Nama: Hafizh Ridha Putra Wijaya
Project: Praktikum PPB Modul 1 Responsi – API Shoe Wash Hub
Tech Stack: Node.js, Express.js, Supabase, Vercel

"Clean shoes, clean code, clean service."
Shoe Wash Hub – Powered by Supabase & Node.js

---

## Credit

<img width="1080" height="1080" alt="Image" src="https://github.com/user-attachments/assets/4f26f1ea-118c-4e27-8017-768bb1c28684" />

Node.js & Express.js – Backend API
Supabase – Database & Auth
Vercel – Deployment Platform
Markdown template – Inspired by clean GitHub README patterns




