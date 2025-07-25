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


export async function fetchWebsiteBySlug(slug: string) {
  const url = new URL("/api/websites", STRAPI_URL);

  url.searchParams.append("filters[slug][$eq]", slug);
  url.searchParams.append("populate[blogs][populate]", "coverImage");

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error(`Failed to fetch website by slug: ${res.status}`);
  }

  const json = await res.json();
  return json.data?.[0]; // Get the first matching website
}


// export async function fetchBlogBySlug(slug: string) {
//   const res = await fetch(`${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`);
//   if (!res.ok) throw new Error("Failed to fetch blog");

//   const data = await res.json();
//   const blog = data?.data?.[0] || null;

//   if (blog?.attributes.coverImage?.data?.attributes?.url) {
//     const rawUrl = blog.attributes.coverImage.data.attributes.url;
//     blog.attributes.coverImageUrl = getFullUrl(rawUrl);
//   }

//   return blog;
// }


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


