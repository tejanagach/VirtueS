import Link from "next/link";
import { Instagram } from "./iconComponents/Instagram";
import Linkedin from "./iconComponents/Linkedin";

export default function Footer() {
  return (
    <footer className="py-12 text-white bg-[#0f2d49] relative z-20">
      <div className="container grid grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-3 md:px-20">
        {/* Column 1 */}
        <div>
          <h3 className="mb-4 text-xl font-bold">VirtueS</h3>
          <p className="mb-4 text-sm">
            At VirtueS, we are more than a technology partner—we are catalysts
            of transformation. With over 14 years of global experience
            specializing in staffing, consulting, and product innovation to help
            businesses unlock their true potential.
          </p>
          <div className="mt-6">
            <h4 className="mb-2 text-sm font-bold">
              Subscribe to our Newsletter
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 text-black bg-white border-none rounded-l-md focus:outline-none"
              />
            </div>
            <p className="mt-4 text-xs">
              Copyright {new Date().getFullYear()} Virtue Serve LLC | <br />
              All rights reserved
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us" className="text-sm hover:text-[#ee8502]">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/what-we-do/product-innovation"
                className="text-sm hover:text-[#ee8502]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link href="/career" className="text-sm hover:text-[#ee8502]">
                Career
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm hover:text-[#ee8502]"
              >
                Legal and Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Get In Touch</h3>
          <p className="mb-2 text-sm">
            Head Quarter - 9000 Freeport Pkwy Ste 220, <br />
            Irving, TX 75063
          </p>
          <p className="mb-2 text-sm">
            VirtueS, 5th Floor, Trendz Trident, Jubilee Enclave, Hitech City,
            Madhapur, Hyderabad, TG 500081
          </p>
          <p className="mb-2 text-sm">Ph: (+1) 4694993565</p>
          <p className="mb-4 text-sm">Email: hello@virtueserve.com</p>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/company/virtueserve/"
              className="text-white hover:text-[#ee8502]"
              target="_blank"
            >
              <Linkedin />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.instagram.com/virtueserve/"
              className="text-white hover:text-[#ee8502]"
              target="_blank"
            >
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
