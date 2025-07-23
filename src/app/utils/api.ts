// const STRAPI_URL = "http://localhost:1337";

// utils/api.ts
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function fetchBlogsByWebsite(
  websiteSlug: string,
  page: number = 1,
  pageSize: number = 6
) {
  const res = await fetch(
    `${STRAPI_URL}7/api/blogs?filters[website][slug][$eq]=${websiteSlug}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const json = await res.json();
  return {
    blogs: json.data,
    pagination: json.meta.pagination,
  };
}


export async function fetchBlogBySlug(blogSlug: string) {
  const res = await fetch(
    `${STRAPI_URL}/api/blogs?filters[slug][$eq]=${blogSlug}&populate=*`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data?.data?.[0] || null;
}
