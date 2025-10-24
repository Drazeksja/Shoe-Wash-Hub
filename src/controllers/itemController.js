import supabase from "../config/supabaseClient.js";

// 🟢 GET semua item (bisa pakai filter ?status=)
export const getAllItems = async (req, res) => {
  try {
    const { status } = req.query;
    let query = supabase.from("items").select("*");

    if (status) query = query.eq("status", status);

    const { data, error } = await query;
    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Gagal mengambil data items", error: err.message });
  }
};

// 🟢 GET item berdasarkan ID
export const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase.from("items").select("*").eq("id", id).single();

    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: "Item tidak ditemukan", error: err.message });
  }
};

// 🟢 CREATE item baru
export const createItem = async (req, res) => {
  try {
    const { customer_name, shoe_type, service_type, price, status } = req.body;

    const { data, error } = await supabase
      .from("items")
      .insert([{ customer_name, shoe_type, service_type, price, status }])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: "Gagal menambahkan item", error: err.message });
  }
};

// 🟢 UPDATE item
export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const { data, error } = await supabase
      .from("items")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    res.status(200).json({ message: "Item berhasil diperbarui", data });
  } catch (err) {
    res.status(500).json({ message: "Gagal memperbarui item", error: err.message });
  }
};

// 🟢 DELETE item
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from("items").delete().eq("id", id);

    if (error) throw error;

    res.status(200).json({ message: "Item berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: "Gagal menghapus item", error: err.message });
  }
};
