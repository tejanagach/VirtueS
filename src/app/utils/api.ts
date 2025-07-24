import { createClient } from '@supabase/supabase-js';

// Supabase client setup
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_API_KEY!
);

// ✅ Fetch all blogs for a website slug (with pagination)
export async function fetchBlogsByWebsite(
  websiteSlug: string,
  page: number = 1,
  pageSize: number = 6
) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  try {
    const { data, error, count } = await supabase
      .from("blogs")
      .select("*, website!inner(*)", { count: "exact" }) // include website relation
      .eq("website.slug", websiteSlug)
      .range(from, to)
      .order("publishedAt", { ascending: false });

    if (error) {
      console.error("Supabase fetchBlogsByWebsite error:", error.message);
      return null;
    }

    return {
      blogs: data,
      pagination: {
        page,
        pageSize,
        pageCount: Math.ceil((count || 0) / pageSize),
        total: count || 0,
      },
    };
  } catch (err) {
    console.error("Unexpected error fetching blogs:", err);
    return null;
  }
}

// ✅ Fetch a single blog by its slug
export async function fetchBlogBySlug(blogSlug: string) {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*, website(*)") // optional join
      .eq("slug", blogSlug)
      .single();

    if (error) {
      console.error("Supabase fetchBlogBySlug error:", error.message);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Unexpected error fetching blog:", err);
    return null;
  }
}
