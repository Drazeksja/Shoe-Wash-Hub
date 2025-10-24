import supabase from "../config/supabaseClient.js";

// ✅ GET semua kategori
export const getAllCategories = async (req, res) => {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
};

// ✅ POST tambah kategori baru
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // validasi sederhana
    if (!name) {
      return res.status(400).json({ message: "Nama kategori wajib diisi" });
    }

    const { data, error } = await supabase
      .from("categories")
      .insert([{ name }])
      .select();

    if (error) {
      return res
        .status(500)
        .json({ message: "Gagal menambahkan kategori", error: error.message });
    }

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
  }
};
