import { supabase } from "../config/supabaseClient.js";

export const ShoeModel = {
  async getAll(status) {
    let query = supabase
      .from("shoes")
      .select("*, customers(name), categories(name)");

    if (status) query = query.eq("status", status);

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },
  async getById(id) {
    const { data, error } = await supabase
      .from("shoes")
      .select("*, customers(name), categories(name)")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },
  async create(payload) {
    const { data, error } = await supabase
      .from("shoes")
      .insert([payload])
      .select()
      .single();
    if (error) throw error;
    return data;
  },
  async update(id, payload) {
    const { data, error } = await supabase
      .from("shoes")
      .update(payload)
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
  async remove(id) {
    const { error } = await supabase.from("shoes").delete().eq("id", id);
    if (error) throw error;
    return { message: "Shoe deleted" };
  },
};
