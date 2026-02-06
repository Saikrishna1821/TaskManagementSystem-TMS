const { supabase } = require("../db/supabaseClient");

async function getAllTasks() {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("status")
    .order("position");

  if (error) throw error;
  return data;
}

async function createTask({ title, description }) {
  const { data, error } = await supabase
    .from("tasks")
    .insert([{ title, description, status: "todo" }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function updateTaskStatus(id, status) {
  const { data, error } = await supabase
    .from("tasks")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

module.exports = {
  getAllTasks,
  createTask,
  updateTaskStatus,
};
