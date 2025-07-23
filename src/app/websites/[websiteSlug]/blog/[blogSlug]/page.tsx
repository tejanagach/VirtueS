import Image from "next/image";
import { fetchBlogBySlug } from "@/app/utils/api";
import { JSX } from "react/jsx-runtime";
 
function getFullUrl(url?: string) {
  if (!url) return "";
  return url.startsWith("http") ? url : `https://cms-virtueserve.onrender.com${url}`;
}
 
export default async function BlogDetailPage({
  params,
}: {
  params: { blogSlug: string };
}) {
  const blogSlug = params.blogSlug; // ❌ Removed unnecessary await
  const blog = await fetchBlogBySlug(blogSlug);
 
  if (!blog) return <p>Blog not found.</p>;
 
  const imageUrl = getFullUrl(blog.coverImage?.url);
 
  const renderChildren = (children: any[]): (JSX.Element | null)[] => {
    return children.flatMap((child: any, i: number): (JSX.Element | null)[] => {
      if (child.type === "image") {
        const src = getFullUrl(child.url || child.image?.url);
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
        const imgUrl = getFullUrl(block.url || block.image?.url);
        if (!imgUrl) return null;
        return (
          <div key={index} className="my-6">
            <Image
              src={imgUrl}
              alt={block.alt || block.image?.alternativeText || "Image"}
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
          <li key={index}>
            {Array.isArray(block.children)
              ? renderChildren(block.children)
              : block.text}
          </li>
        );
 
      default:
        return null;
    }
  };
 
  const contextBlocks =
    typeof blog.context === "string"
      ? JSON.parse(blog.context)
      : blog.context;
 
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
 
      <div className="prose max-w-none">
        {contextBlocks?.map((block: any, index: number) =>
          renderBlock(block, index)
        )}
      </div>
 
      {blog.images?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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