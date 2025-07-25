// app/websites/[websiteSlug]/blog/[blogSlug]/page.tsx
import { fetchBlogBySlug } from "@/app/utils/api";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default async function BlogDetailPage({
  params,
}: {
  params: { blogSlug: string };
}) {
  const blog = await fetchBlogBySlug(params.blogSlug);
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";

  if (!blog) return <p className="mt-32 text-center text-gray-600">Blog not found.</p>;

  const { title, content, context, coverImage, images } = blog.attributes;

  const coverImageUrl = coverImage?.data?.attributes?.url
    ? coverImage.data.attributes.url.startsWith("http")
      ? coverImage.data.attributes.url
      : `${SUPABASE_URL}${coverImage.data.attributes.url}`
    : null;

  const galleryImages = images?.data || [];

  return (
    <div className="max-w-4xl mx-auto px-4 pt-32 pb-16"> {/* top padding added */}
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 leading-tight">{title}</h1>

      {/* Cover Image */}
      {coverImageUrl && (
        <Image
          src={coverImageUrl}
          alt="Cover"
          width={1200}
          height={600}
          className="rounded-lg mb-10 object-cover w-full h-auto max-h-[500px]"
        />
      )}

      {/* Content Section */}
      {content && (
        <div className="text-gray-700 text-lg leading-7 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <p>{content}</p>
        </div>
      )}

      {/* Context Section */}
      {context && (
        <div className="text-gray-800 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Context</h2>
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  alt={props.alt || "image"}
                  className="rounded-lg my-4 max-w-full"
                />
              ),
              p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
            }}
          >
            {context}
          </ReactMarkdown>
        </div>
      )}

      

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {galleryImages.map((img: any, idx: number) => {
              const imgPath = img.attributes?.url;
              const imgUrl = imgPath?.startsWith("http")
                ? imgPath
                : `${SUPABASE_URL}${imgPath}`;

              return (
                <img
                  key={idx}
                  src={imgUrl}
                  alt={`Blog Image ${idx + 1}`}
                  className="w-full h-[200px] object-cover rounded-md shadow-sm"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
