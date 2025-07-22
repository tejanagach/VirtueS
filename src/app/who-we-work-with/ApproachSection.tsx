import React from "react";

export function ApproachSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-bold text-gray-800">
          Our Approach is <span className="text-[#D27500]">Centered On</span>
        </h2>

        {/* Card Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1050px]">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-tr-[68px] rounded-bl-[42px] p-6">
            <h3 className="text-xl text-[#D27500] font-semibold mb-3">
              Tailored Strategies for Your Unique Needs
            </h3>
            <hr className="text-[#C0C0C0] my-6 bg-[#C0C0C0] w-52 h-[1px]" />
            <p className="text-gray-600 leading-relaxed">
              We understand that one size doesn’t fit all. We design customized
              solutions that align with your unique goals, resolving challenges
              today while unlocking future growth. Whether it’s scaling
              operations, enhancing efficiency, or strengthening talent, we
              create strategies that drive real, lasting success.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-tr-[68px] rounded-bl-[42px] p-6">
            <h3 className="text-xl text-[#D27500] font-semibold mb-3">
              Innovation-Driven Execution
            </h3>
            <hr className="text-[#C0C0C0] my-6 bg-[#C0C0C0] w-52 h-[1px]" />
            <p className="text-gray-600 leading-relaxed">
              We go beyond adaptation—we drive transformation. By leveraging
              cutting-edge technology and industry best practices, we streamline
              operations, enhance efficiency, and implement powerful digital
              solutions. With a focus on continuous innovation, we don’t just
              help you stay ahead; we empower you to lead.
            </p>
          </div>

          {/* Card 3 - Spans full width on larger screens */}
          <div className="bg-white shadow-md rounded-tr-[68px] rounded-bl-[42px] p-6 md:col-span-2 flex flex-col items-center">
            <h3 className="text-xl text-[#D27500] font-semibold mb-3 text-center">
              Collaborative Growth—Your Team, Empowered
            </h3>
            <hr className="text-[#C0C0C0] my-6 bg-[#C0C0C0] w-1/3 h-[1px]" />
            <p className="text-gray-600 leading-relaxed text-center">
              We believe that true success comes from collaboration. When you
              partner with us, we work seamlessly with your team, sharing
              knowledge, fostering a culture of continuous improvement, and
              driving innovation together. Our experts act as an extension of
              your team, helping you to not only meet immediate goals but also
              build long-term capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
