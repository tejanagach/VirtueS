"use client";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-screen w-full bg-white overflow-hidden">
      {/* Background image */}
      <Image
        src="/officeMeeting.png"
        alt="People collaborating in an office"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0 opacity-20"
      />

      {/* Content overlay */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Strategic Partnerships <br />
          for
          <span className="text-[#DC9030]">
            {" "}
            Digital and Operational Excellence
          </span>
        </h1>
        <p className="text-gray-700 my-10">
          Ready to see how we can work together?
        </p>
        <button
          className="bg-[#EE8502] text-white font-medium py-2 px-6 rounded transition-colors"
          onClick={() =>
            (window.location.href = "mailto:hello@virtueserve.com")
          }
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}
