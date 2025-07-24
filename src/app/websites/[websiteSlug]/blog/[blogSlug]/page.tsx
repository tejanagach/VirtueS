// app/[websiteSlug]/[blogSlug]/page.tsx

export default async function BlogPage({
  params,
}: {
  params: { websiteSlug: string; blogSlug: string };
}) {
  const { blogSlug } = params;

  const res = await fetch(
    `https://cms-virtueserve1.onrender.com/api/blogs?filters[slug][$eq]=${blogSlug}&populate=coverImage,images,website`,
    { cache: "no-store" }
  );

  const json = await res.json();
  const blog = json.data[0]?.attributes;

  if (!blog) return <p>Blog not found</p>;

  // Supabase base URL (replace with your actual project-ref)
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";

  // Safely construct URLs
  const coverImagePath = blog.coverImage?.data?.attributes?.url;
  const coverImageUrl = coverImagePath?.startsWith("http")
    ? coverImagePath
    : `${SUPABASE_URL}/${coverImagePath}`;

  const images = blog.images?.data || [];

  return (
    <div className="min-h-screen bg-[#f9f9f9] py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">
          {blog.title}
        </h1>

        {blog.website?.data && (
          <p className="text-sm text-gray-600 mb-4">
            Published on <strong>{blog.website.data.attributes.name}</strong>
          </p>
        )}

        {coverImageUrl && (
          <img
            src={coverImageUrl}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
        )}

        <div className="prose prose-lg prose-slate max-w-none">
          <p>{blog.content}</p>
        </div>

        {images.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img: any, idx: number) => {
                const imgPath = img.attributes?.url;
                const imgUrl = imgPath?.startsWith("http")
                  ? imgPath
                  : `${SUPABASE_URL}/${imgPath}`;

                return (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`Blog Image ${idx + 1}`}
                    className="w-full h-[200px] object-cover rounded-md"
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
