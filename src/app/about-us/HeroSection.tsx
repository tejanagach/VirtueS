export default function HeroSection() {
  return (
    <section className="flex items-center justify-center h-[750px] w-full relative bg-[url('/peopleWithLaptops.png')] bg-cover bg-center overflow-hidden">
      {/* Content overlay */}

      <div className="absolute inset-0 bg-white/70" />
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Discover <span className="text-[#DC9030]">Virtues</span>
        </h1>
        <p className="text-gray-700 mb-6">
          At VirtueS, we empower businesses with cutting-edge technology,
          exceptional talent, and AI-driven solutions that fuel innovation,
          optimize operations, and drive sustainable growth. With over 14 years
          of global expertise in consulting, enterprise solutions, and product
          innovation,
        </p>
      </div>
    </section>
  );
}
