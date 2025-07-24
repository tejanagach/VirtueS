// src/app/websites/[websiteSlug]/page.tsx

import Link from "next/link";
import Image from "next/image";
import { fetchBlogsByWebsite } from "@/app/utils/api";
import { notFound } from "next/navigation";

// ✅ Reusable helper for Supabase images
function getFullUrl(url?: string) {
  if (!url) return "";

  if (url.startsWith("http")) return url;

  // Replace with your actual Supabase project domain
  return `https://xolsmduhuujgmdeyfab.supabase.co/storage/v1/object/public/${url.startsWith("/") ? url.slice(1) : url}`;
}

export default async function WebsiteBlogsPage({
  params,
  searchParams,
}: {
  params: { websiteSlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { websiteSlug } = params;

  const currentPage = parseInt(
    Array.isArray(searchParams.page)
      ? searchParams.page[0]
      : searchParams.page || "1",
    10
  );
  const pageSize = 3;

  const response = await fetchBlogsByWebsite(websiteSlug, currentPage, pageSize);

  if (!response || !response.blogs || response.blogs.length === 0) {
    return (
      <div className="pt-28 text-center text-gray-500">No blogs found.</div>
    );
  }

  const { blogs, pagination } = response;
  const totalPages = pagination?.pageCount || 1;

  return (
    <div className="pt-28 p-6 max-w-6xl mx-auto">
      {/* Blogs Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog: any) => {
          const rawUrl =
            blog.coverImage?.formats?.small?.url || blog.coverImage?.url;
          const imageUrl = getFullUrl(rawUrl);

          return (
            <Link
              key={blog.id}
              href={`/websites/${websiteSlug}/blog/${blog.slug}`}
              className="block border rounded-lg shadow hover:shadow-md transition duration-200 overflow-hidden"
            >
              {imageUrl && (
                <div className="relative w-full h-48">
                  <Image
                    src={imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {typeof blog.content === "string"
                    ? blog.content.slice(0, 200)
                    : "Blog content here..."}
                </p>
                {blog.publishedAt && (
                  <p className="text-gray-500 text-xs mt-2">
                    Published on{" "}
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
        <Link
          href={`/websites/${websiteSlug}?page=${currentPage - 1}`}
          className={`px-4 py-2 rounded ${
            currentPage <= 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          aria-disabled={currentPage <= 1}
        >
          Previous
        </Link>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <Link
            key={pageNum}
            href={`/websites/${websiteSlug}?page=${pageNum}`}
            className={`px-3 py-1 rounded ${
              pageNum === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {pageNum}
          </Link>
        ))}

        <Link
          href={`/websites/${websiteSlug}?page=${currentPage + 1}`}
          className={`px-4 py-2 rounded ${
            currentPage >= totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          aria-disabled={currentPage >= totalPages}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
