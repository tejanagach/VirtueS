const STRAPI_URL = "https://cms-virtueserve.onrender1.com";

export async function fetchBlogsByWebsite(
  websiteSlug: string,
  page: number = 1,
  pageSize: number = 6
) {
  try {
    const url = `${STRAPI_URL}/api/blogs?filters[website][slug][$eq]=${encodeURIComponent(
      websiteSlug
    )}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.error("Failed to fetch blogs by website:", res.statusText);
      return null;
    }

    const json = await res.json();
    return {
      blogs: json.data,
      pagination: json.meta.pagination,
    };
  } catch (err) {
    console.error("Error fetching blogs by website:", err);
    return null;
  }
}

export async function fetchBlogBySlug(blogSlug: string) {
  try {
    const url = `${STRAPI_URL}/api/blogs?filters[slug][$eq]=${encodeURIComponent(
      blogSlug
    )}&populate=*`;

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.error("Failed to fetch blog by slug:", res.statusText);
      return null;
    }

    const data = await res.json();
    return data?.data?.[0] || null;
  } catch (err) {
    console.error("Error fetching blog by slug:", err);
    return null;
  }
}