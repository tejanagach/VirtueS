import Link from "next/link";
import Image from "next/image";
import { fetchWebsiteBySlug } from "@/app/utils/api";

export default async function WebsiteBlogsPage({
  params,
}: {
  params: { websiteSlug: string };
}) {
  const websiteSlug = params.websiteSlug;
  const website = await fetchWebsiteBySlug(websiteSlug);

  if (!website) return <p>Website not found.</p>;

  const blogs = website.attributes.blogs?.data || [];

  return (
    <div className="max-w-5xl mx-auto px-4 pt-20 pb-8">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog: any) => {
          const { title, description, slug, publishedAt, coverImage } = blog.attributes;
          const imageUrl =
            coverImage?.data?.attributes?.url || "/placeholder.jpg"; // fallback

          return (
            <Link
              key={blog.id}
              href={`/websites/${websiteSlug}/blog/${slug}`}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
            >
              <div className="relative w-full h-48">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-sm text-gray-500 mb-1">
                  {new Date(publishedAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
