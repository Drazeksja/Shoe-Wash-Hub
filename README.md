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

![alt text] (https://github.com/Drazeksja/Shoe-Wash-Hub/blob/main/POST.png?raw=true)

![alt text] (https://github.com/Drazeksja/Shoe-Wash-Hub/blob/main/GET.png?raw=true)

![alt text] (https://github.com/Drazeksja/Shoe-Wash-Hub/blob/main/PUT.png?raw=true)

![alt text] (https://github.com/Drazeksja/Shoe-Wash-Hub/blob/main/DELETE.png?raw=true)

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

![alt text] (https://github.com/Drazeksja/Shoe-Wash-Hub/blob/main/runningvercel.png?raw=true)

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

Node.js & Express.js – Backend API
Supabase – Database & Auth
Vercel – Deployment Platform
Markdown template – Inspired by clean GitHub README patterns


