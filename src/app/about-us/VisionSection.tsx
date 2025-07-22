import Image from "next/image";

export function VisionSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-[950px]  mx-auto flex flex-col md:flex-row items-center justify-end gap-8">
        {/* Text Column */}
        <div className="flex-1 w-full">
          <h2 className="section-heading mb-4">To be the global leader</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            To be the global leader in technology-driven business
            transformation, empowering organizations with AI enterprise
            solutions, and innovative talent to achieve efficiency, scalability,
            and long-term success. We focus on modernizing operations, nurturing
            team collaboration, and accelerating innovation so our partners can
            thrive in today’s competitive digital environment.
          </p>
        </div>

        {/* Image Column */}
        <div className="">
          {/* <div className="relative shadow-md shadow-black rounded-3xl overflow-hidden">
            Example Next.js Image usage
            <Image
              src="/discussion.png" // Replace with your own image in /public
              alt="Team meeting"
              height={700}
              width={550}
              className="object-cover"
            />
          </div> */}
          <div
            className="relative shadow-md shadow-black rounded-3xl overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: 'url("/discussion.png")',
              height: "460px",
              width: "390px",
            }}
          >
            {/* Optional overlay or content can go here */}
          </div>
        </div>
      </div>
    </section>
  );
}
