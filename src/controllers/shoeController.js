import supabase from "../config/supabaseClient.js";

// 📌 CREATE Shoe
export const createShoe = async (req, res) => {
  const { category_name, customer_name, brand, color, status, price } = req.body;

  if (!category_name || !customer_name || !brand || !price) {
    return res.status(400).json({ message: "Field wajib diisi: category_name, customer_name, brand, price" });
  }

  try {
    // Cari atau buat kategori
    let { data: catData } = await supabase
      .from("categories")
      .select("id")
      .eq("name", category_name)
      .maybeSingle();

    if (!catData) {
      const { data: newCat } = await supabase
        .from("categories")
        .insert([{ name: category_name }])
        .select("id")
        .single();
      catData = newCat;
    }

    // Cari atau buat customer
    let { data: custData } = await supabase
      .from("customers")
      .select("id")
      .eq("name", customer_name)
      .maybeSingle();

    if (!custData) {
      const { data: newCust } = await supabase
        .from("customers")
        .insert([{ name: customer_name }])
        .select("id")
        .single();
      custData = newCust;
    }

    // Insert ke tabel shoes
    const { data: shoeData, error: shoeError } = await supabase
      .from("shoes")
      .insert([
        {
          customer_id: custData.id,
          category_id: catData.id,
          brand,
          color,
          status: status || "Menunggu",
          price,
        },
      ])
      .select()
      .single();

    if (shoeError) throw shoeError;

    res.status(201).json({
      message: "✅ Data sepatu berhasil ditambahkan",
      data: shoeData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

// 📄 READ Semua Shoes
export const getAllShoes = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("shoes")
      .select(`id, brand, color, status, price, received_at, finished_at, customers(name), categories(name)`);

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data sepatu",
      error: error.message,
    });
  }
};

// 📄 READ Shoe by ID
export const getShoeById = async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from("shoes")
      .select(`*, customers(name), categories(name)`)
      .eq("id", id)
      .single();

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: "Sepatu tidak ditemukan",
      error: error.message,
    });
  }
};

// ✏️ UPDATE Shoe
// controllers/shoeController.js
export const updateShoe = async (req, res) => {
  try {
    const { id } = req.params;
    const { category_name, customer_name, brand, color, status, price } = req.body;

    // Ambil id kategori
    const { data: categoryData } = await supabase
      .from("categories")
      .select("id")
      .eq("name", category_name)
      .single();

    // Ambil id customer
    const { data: customerData } = await supabase
      .from("customers")
      .select("id")
      .eq("name", customer_name)
      .single();

    // Update data sepatu
    const { data, error } = await supabase
      .from("shoes")
      .update({
        category_id: categoryData.id,
        customer_id: customerData.id,
        brand,
        color,
        status,
        price,
      })
      .eq("id", id)
      .select("*") // 🟢 inilah kuncinya: ambil data yang baru diupdate
      .single();

    if (error) throw error;

    res.status(200).json({
      message: "Data sepatu berhasil diperbarui",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal memperbarui data sepatu",
      error: error.message,
    });
  }
};


// ❌ DELETE Shoe
export const deleteShoe = async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = await supabase.from("shoes").delete().eq("id", id);
    if (error) throw error;

    res.status(200).json({
      message: "🗑️ Data sepatu berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus data sepatu",
      error: error.message,
    });
  }
};
