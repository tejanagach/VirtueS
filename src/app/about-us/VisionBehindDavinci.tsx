import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

export function VisionBehindDavinci() {
  return (
    <section className="py-16 px-4 bg-white ">
      <div className="flex flex-col md:flex-row items-center justify-center gap-15">
        {/* LEFT COLUMN: Image with curved background */}
        <div className="relative  flex justify-end">
          {/* Colored background shape */}

          {/* Person Image */}
          <div className="relative w-80 h-96 z-10">
            <div className="absolute bottom-0  w-[305px] h-[85%] rounded-tl-[6rem] bg-yellow-500 shadow-md shadow-black" />

            {/* Replace with your own image path, alt text, and sizing */}
            <Image
              src="/arvind.png"
              alt="Arvind Nerella"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Text content */}
        <div className="w-full max-w-[500px] ">
          <h2 className="text-2xl md:text-3xl text-gray-800 mb-2">
            Vision Behind{" "}
            <span className="heading-orange font-semibold">DAVINCI</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold heading-orange mb-4">
            Arvind Nerella
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Arvind envisions VirtueS as a global powerhouse in technology,
            consulting, and innovation. With a focus on AI-driven solutions and
            operational excellence, his mission is to push boundaries and
            empower businesses with future-ready capabilities that drive
            efficiency, scalability, and impact. Committed to customer success
            and breakthrough innovation, Arvind is transforming VirtueS into a
            pioneer of digital transformation—delivering game-changing solutions
            that set new industry standards and create lasting value. His vision
            is not just to lead but to revolutionize how businesses grow and
            adapt in a rapidly evolving world.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {/* LinkedIn */}
            <Link
              href={"https://www.linkedin.com/in/arvind-nerella-7170338/"}
              target="_blank"
              className="text-black hover:text-gray-700 transition-colors"
            >
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
