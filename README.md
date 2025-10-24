# Shoe Wash Hub API

[![Shoe Wash Hub](https://img.shields.io/badge/Shoe_Wash_Hub-API-blue) 
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

| Method | Endpoint           | Deskripsi                       | Body (jika ada) | Response |
|--------|------------------|---------------------------------|-----------------|----------|
| GET    | `/api/shoes`      | Menampilkan semua data sepatu   | -               | ```json
{
  "id": 1,
  "customer_name": "Putra Wijaya",
  "category_name": "Sneakers",
  "brand": "Adidas Superstar",
  "color": "Putih",
  "status": "Diproses",
  "price": 45000,
  "received_at": "2025-10-24T02:00:00.000Z"
}
``` |
| POST   | `/api/shoes`      | Menambahkan data sepatu baru    | ```json
{
  "category_name": "Sneakers",
  "customer_name": "Putra Wijaya",
  "brand": "Adidas Superstar",
  "color": "Putih",
  "status": "Diproses",
  "price": 45000
}
``` | ```json
{
  "message": "Data sepatu berhasil ditambahkan",
  "data": {
    "id": 1,
    "category_id": 2,
    "customer_id": 1,
    "brand": "Adidas Superstar",
    "color": "Putih",
    "status": "Diproses",
    "price": 45000,
    "received_at": "2025-10-24T02:00:00.000Z"
  }
}
``` |
| PUT    | `/api/shoes/:id`  | Memperbarui data sepatu        | ```json
{
  "category_name": "Sneakers",
  "customer_name": "Putra Wijaya",
  "brand": "Nike Air Force 1",
  "color": "Putih",
  "status": "Selesai",
  "price": 55000
}
``` | ```json
{
  "message": "Data sepatu berhasil diperbarui",
  "data": {
    "id": 1,
    "brand": "Nike Air Force 1",
    "color": "Putih",
    "status": "Selesai",
    "price": 55000
  }
}
``` |
| DELETE | `/api/shoes/:id`  | Menghapus data sepatu          | -               | ```json
{
  "message": "Data sepatu berhasil dihapus"
}
``` |


## Struktur Data

### Categories
- id: Primary key
- name: Nama kategori sepatu

### Customers
- id: Primary key
- name: Nama pelanggan
- phone: Nomor telepon
- address: Alamat pelanggan

### Shoes
- id: Primary key
- customer_id: Relasi ke Customers
- category_id: Relasi ke Categories
- brand: Merek sepatu
- color: Warna sepatu
- status: Menunggu / Diproses / Selesai
- price: Harga layanan
- received_at: Tanggal diterima
- finished_at: Tanggal selesai

---
