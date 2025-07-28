const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "";
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";

/**
 * Returns full URL for images hosted either on Strapi (relative path) or already absolute (Supabase or other).
 */
// function getFullUrl(url: string): string {
//   if (!url) return "";
//   if (url.startsWith("http")) return url;
//   return `${STRAPI_URL}${url}`;
// }

export async function fetchWebsites() {
  const res = await fetch(`${STRAPI_URL}/api/websites?populate=*`);
  if (!res.ok) throw new Error("Failed to fetch websites");

  const data = await res.json();
  const updated = data.data.map((website: any) => {
    const rawUrl = website.attributes.coverImage?.data?.attributes?.url || "";
    website.attributes.coverImageUrl = getFullUrl(rawUrl);
    return website;
  });

  return updated;
}


// export async function fetchWebsiteBySlug(slug: string) {
//   const url = new URL("/api/websites", STRAPI_URL);

//   url.searchParams.append("filters[slug][$eq]", slug);
//   url.searchParams.append("populate[blogs][populate]", "coverImage");

//   const res = await fetch(url.toString());

//   if (!res.ok) {
//     throw new Error(`Failed to fetch website by slug: ${res.status}`);
//   }

//   const json = await res.json();
//   return json.data?.[0]; // Get the first matching website
// }
export async function fetchWebsiteBySlug(slug: string, page = 1, pageSize = 3) {
  const url = new URL("/api/websites", STRAPI_URL);

  url.searchParams.append("filters[slug][$eq]", slug);
  url.searchParams.append("populate[blogs][populate]", "coverImage");
  url.searchParams.append("populate[blogs][fields][0]", "title"); // optional - reduce payload
  url.searchParams.append("populate[blogs][fields][1]", "slug");  // optional
  url.searchParams.append("populate[blogs][fields][2]", "description"); // optional
  url.searchParams.append("populate[blogs][fields][3]", "publishedAt"); // optional
  url.searchParams.append("pagination[page]", page.toString());
  url.searchParams.append("pagination[pageSize]", pageSize.toString());

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error(`Failed to fetch website by slug: ${res.status}`);
  }

  const json = await res.json();
  return json.data?.[0]; // Get the first matching website
}



export async function fetchBlogsByWebsiteSlug(slug: string, page = 1, pageSize = 3) {
  const url = new URL("/api/blogs", STRAPI_URL);
  url.searchParams.append("filters[website][slug][$eq]", slug);
  url.searchParams.append("pagination[page]", page.toString());
  url.searchParams.append("pagination[pageSize]", pageSize.toString());
  url.searchParams.append("populate", "coverImage");

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs: ${res.status}`);
  }

  const json = await res.json();
  return json;
}



const SUPABASE_BUCKET_BASE = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_BASE || "";

export const getFullUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SUPABASE_BUCKET_BASE}/${path}`;
};


export async function fetchBlogBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`
  );

  if (!res.ok) throw new Error("Failed to fetch blog");

  const data = await res.json();
  const blog = data?.data?.[0] || null;

  if (blog?.attributes.coverImage?.data?.attributes?.url) {
    const rawUrl = blog.attributes.coverImage.data.attributes.url;
    blog.attributes.coverImageUrl = getFullUrl(rawUrl);
  }

  return blog;
}


