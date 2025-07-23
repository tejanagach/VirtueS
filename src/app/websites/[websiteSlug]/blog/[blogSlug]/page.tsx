// src/app/websites/[websiteSlug]/blog/[blogSlug]/page.tsx

import Image from "next/image";
import { fetchBlogBySlug } from "@/app/utils/api";
import { JSX } from "react/jsx-runtime";

function getFullUrl(url?: string) {
  if (!url) return "";
  return url.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
}

export default async function BlogDetailPage({
  params,
}: {
  params: { blogSlug: string };
}) {
  const blog = await fetchBlogBySlug(params.blogSlug);
  if (!blog) return <p className="pt-24 text-center text-gray-500">Blog not found.</p>;

  const imageUrl = getFullUrl(blog.coverImage?.url);

  const renderChildren = (children: any[]): (JSX.Element | null)[] => {
    return children.flatMap((child: any, i: number) => {
      if (child.type === "image") {
        const src = getFullUrl(child.url);
        if (!src) return [null];
        return [
          <div key={i} className="my-4">
            <Image
              src={src}
              alt={child.alt || "Embedded Image"}
              width={800}
              height={400}
              className="rounded"
            />
          </div>,
        ];
      }

      if (child.text) {
        return [<span key={i}>{child.text}</span>];
      }

      if (child.children) {
        return renderChildren(child.children);
      }

      return [null];
    });
  };

  const renderBlock = (block: any, index: number): JSX.Element | null => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-4">
            {renderChildren(block.children || [])}
          </p>
        );
      case "heading":
        const level = block.level ?? 2;
        const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag key={index} className="font-semibold my-4">
            {renderChildren(block.children || [])}
          </HeadingTag>
        );
      case "image":
        const src = getFullUrl(block.image?.url);
        if (!src) return null;
        return (
          <div key={index} className="my-6">
            <Image
              src={src}
              alt={block.image?.alternativeText || "Image"}
              width={block.image?.width || 800}
              height={block.image?.height || 400}
              className="rounded"
            />
          </div>
        );
      case "list":
        return (
          <ul key={index} className="list-disc pl-6 my-4">
            {(block.children || []).map((item: any, i: number) =>
              renderBlock(item, i)
            )}
          </ul>
        );
      case "list-item":
        return (
          <li key={index}>{renderChildren(block.children || [])}</li>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 pt-24 pb-10">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {blog.publishedAt && (
        <p className="text-gray-500 text-sm mb-6">
          Published on {new Date(blog.publishedAt).toLocaleDateString()}
        </p>
      )}

      {imageUrl && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={imageUrl}
            alt={blog.title}
            fill
            className="object-cover rounded"
          />
        </div>
      )}

      {/* 🧠 Rich Text Context Blocks */}
      <div className="prose max-w-none">
        {blog.context?.map(renderBlock)}
      </div>

      {/* 📸 Additional Image Gallery */}
      {blog.images?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          {blog.images.map((img: any, index: number) => {
            const imgUrl = getFullUrl(img.url);
            if (!imgUrl) return null;

            return (
              <div key={index} className="relative w-full h-64">
                <Image
                  src={imgUrl}
                  alt={img.name || "Image"}
                  fill
                  className="object-cover rounded"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
