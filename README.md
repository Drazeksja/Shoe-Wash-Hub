Shoe Wash Hub API

Shoe Wash Hub adalah sistem **RESTful API** berbasis **Node.js + Express + Supabase** yang digunakan untuk mengelola data layanan cuci sepatu.  
API ini mencakup manajemen kategori, pelanggan, dan sepatu dengan status layanan (Menunggu, Diproses, atau Selesai).  
Proyek ini dirancang agar mudah di-deploy ke **Vercel** dan terhubung langsung dengan database **Supabase**.

Deskripsi Umum Proyek
Shoe Wash Hub dibuat untuk membantu pengelolaan data pencucian sepatu seperti:
- Mencatat pelanggan dan kategori sepatu.
- Menambahkan data sepatu yang sedang dicuci.
- Melacak status layanan sepatu (Menunggu, Diproses, Selesai).
- Melihat daftar semua sepatu yang sedang/selesai dicuci.

Tujuan dan Fitur Utama
Tujuan
- Menyediakan API terstruktur untuk sistem manajemen cuci sepatu.
- Terhubung langsung dengan **Supabase Database** agar data tersimpan secara real-time.
- Siap digunakan untuk integrasi front-end (React, Next.js, atau mobile app).

Fitur Utama
Kelola Kategori  = Menambahkan dan menampilkan kategori sepatu (misalnya Sneakers, Boots, Slip-on). |
Kelola Pelanggan = Menambahkan pelanggan baru yang mencuci sepatu. |
Kelola Sepatu    = Menambahkan, mengubah, dan menghapus data sepatu berikut statusnya. |
Status Otomatis  = Status sepatu dapat diubah dari Menunggu → Diproses → Selesai. |

Struktur Data (Supabase Tables)

1. categories
| Kolom | Tipe Data | Keterangan |
|-------|------------|------------|
| id | bigint | Primary key |
| name | text | Nama kategori sepatu |

2. customers
| Kolom | Tipe Data | Keterangan |
|-------|------------|------------|
| id | bigint | Primary key |
| name | text | Nama pelanggan |
| phone | text | Nomor telepon pelanggan |
| address | text | Alamat pelanggan |

3. shoes
| Kolom | Tipe Data | Keterangan |
|-------|------------|------------|
| id | bigint | Primary key |
| customer_id | bigint | Relasi ke tabel customers |
| category_id | bigint | Relasi ke tabel categories |
| brand | text | Merek sepatu |
| color | text | Warna sepatu |
| status | text | Menunggu / Diproses / Selesai |
| price | numeric(10,2) | Harga layanan |
| received_at | timestamp | Tanggal diterima |
| finished_at | timestamp | Tanggal selesai |

Endpoint API

🔹1. GET /api/shoes
Menampilkan semua data sepatu
Response:

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

🔹 2. POST /api/shoes
Menambahkan data sepatu baru

Body (JSON):

{
  "category_name": "Sneakers",
  "customer_name": "Putra Wijaya",
  "brand": "Adidas Superstar",
  "color": "Putih",
  "status": "Diproses",
  "price": 45000
}
Response:

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
🔹 3. PUT /api/shoes/:id
Memperbarui data sepatu berdasarkan ID

Body (JSON):
{
  "category_name": "Sneakers",
  "customer_name": "Putra Wijaya",
  "brand": "Nike Air Force 1",
  "color": "Putih",
  "status": "Selesai",
  "price": 55000
}
Response:

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
🔹 4. DELETE /api/shoes/:id
Menghapus data sepatu berdasarkan ID

Response:

{
  "message": "Data sepatu berhasil dihapus"
}

Struktur Folder Proyek
shoe-wash-hub/
├── controllers/
│   ├── categoryController.js
│   ├── customerController.js
│   └── shoeController.js
├── routes/
│   ├── categoryRoutes.js
│   ├── customerRoutes.js
│   └── shoeRoutes.js
├── config/
│   └── supabaseClient.js
├── index.js
├── package.json
└── README.md

⚙️ Langkah Instalasi & Menjalankan API
1️⃣ Clone Repository
git clone https://github.com/username/shoe-wash-hub.git
cd shoe-wash-hub

2️⃣ Install Dependencies
bash
Copy code
npm install

3️⃣ Konfigurasi Supabase
Buat file .env di root folder:
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
PORT=4000

4️⃣ Jalankan Server Lokal
bash
Copy code
npm start
API akan berjalan di:
http://localhost:4000

5️⃣ Test API
Gunakan Postman atau Thunder Client untuk menguji endpoint:

GET /api/shoes

POST /api/shoes

PUT /api/shoes/:id

DELETE /api/shoes/:id

Link Deploy (Vercel)
https://shoe-wash-hub.vercel.app

Developer
Nama: Hafizh Ridha Putra Wijaya
Project: Praktikum PPB Modul 1 Responsi – API Shoe Wash Hub
Tech Stack: Node.js, Express.js, Supabase, Vercel

“Clean shoes, clean code, clean service.”
Shoe Wash Hub – Powered by Supabase & Node.js
