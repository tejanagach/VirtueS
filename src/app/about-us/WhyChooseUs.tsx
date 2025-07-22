import React from "react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Innovation at the Core",
      description:
        "We embrace the latest advancements in AI, IoT, and enterprise systems to deliver future-ready solutions.",
      style: "col-span-12 row-span-1 md:col-span-6 md:row-span-4",
      img: "/bulb2.svg",
    },
    {
      title: "End-to-End Solutions",
      description:
        "From strategy development to execution, we provide comprehensive support to meet your goals.",
      style: "col-span-12 row-span-1 md:col-span-6 md:row-span-4",
      img: "/e2eSolution.svg",
    },
    {
      title: "Proven Expertise",
      description:
        "With more than a decade of hands-on experience, our consultants deliver strategic insights and practical solutions across manufacturing, finance, and technology sectors. From optimizing production workflows and implementing enterprise systems to driving financial performance and harnessing emerging digital innovations, our team consistently enables organizations to achieve operational excellence, maximize ROI, and sustain long-term growth.",
      style: "col-span-12 row-span-1 md:col-span-5 md:row-span-6",
      img: "/book.svg",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "We tailor every solution to align with your business objectives, delivering outcomes that matter.",
      style: "col-span-12 row-span-1 md:col-span-7 md:row-span-3",
      img: "/person-3.svg",
    },
    {
      title: "Sustainability and Responsibility",
      description:
        "We are committed to environmentally conscious practices, helping businesses embrace sustainable growth.",
      style: "col-span-12 row-span-1 md:col-span-7 md:row-span-3",
      img: "/carbon_sustainability.svg",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Why Choose <span className="heading-orange">Us ?</span>
        </h2>

        {/* Intro Paragraph */}
        <p className="mt-4 text-center text-gray-700 max-w-3xl mx-auto">
          At VirtueS, we don’t just deliver technology—we transform businesses.
          In today’s fast-paced digital world, technology is more than a tool;
          it’s the foundation of innovation, growth, and success. With over a
          decade of expertise, we provide tailored technology solutions,
          AI-driven consulting, and enterprise-grade systems that empower
          organizations to lead in their industries.
        </p>

        {/* Card Grid */}
        <div className="mt-12 grid grid-cols-12  gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-md p-6 flex flex-col ${item.style} bg-[#f5f5f5]`}
            >
              {/* Circular Icon Placeholder */}
              <div className="w-16 h-16 rounded-full bg-white shadow-2xl mb-4 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Card Title */}
              <h3 className="text-lg section-heading mb-2">{item.title}</h3>

              {/* Card Description */}
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
