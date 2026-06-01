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

    await new Promise((resolve) =>
        setTimeout(resolve, 3000)
    );
    return data;
}