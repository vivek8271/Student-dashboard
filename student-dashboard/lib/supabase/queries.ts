import { supabase } from "./client";

export async function getCourses() {
    const { data, error } = await supabase
        .from("courses")
        .select("*")
        .order("created_at", {
            ascending: false,
        });

    if (error) {
        console.error(error);
        throw new Error("Failed to fetch courses");
    }

    return data;
}

export async function getProfile() {
  // limit to a single row and use maybeSingle to avoid "cannot coerce" errors
  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .limit(1)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ?? null;
}


export async function getActivity() {
  const { data, error } = await supabase
    .from("activity")
    .select("*")
    
  if (error) {
    throw new Error(error.message);
  }

  return data;
}