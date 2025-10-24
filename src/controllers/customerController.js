import supabase from "../config/supabaseClient.js";

export const getAllCustomers = async (req, res) => {
  const { data, error } = await supabase.from("customers").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
};

export const getCustomerById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("customers").select("*").eq("id", id).single();
  if (error) return res.status(404).json({ error: "Pelanggan tidak ditemukan" });
  res.status(200).json(data);
};

export const createCustomer = async (req, res) => {
  const { name, email, phone, address } = req.body;
  const { data, error } = await supabase.from("customers").insert([{ name, email, phone, address }]);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address } = req.body;
  const { data, error } = await supabase.from("customers").update({ name, email, phone, address }).eq("id", id);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("customers").delete().eq("id", id);
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ message: "Pelanggan berhasil dihapus" });
};
