"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export const NavBar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const needWhiteLogo = isHomePage || isScrolled;
  const logoSrc = needWhiteLogo ? "/virtuesWhite.svg" : "/virtuesBlack.svg";

  useEffect(() => {
    const handleClickOutside = () => {
      if (isDropdownOpen) setIsDropdownOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isDropdownOpen]);

  const isActive = (path: string) =>
    path.startsWith("/what-we-do") && pathname.startsWith("/what-we-do")
      ? true
      : pathname === path;

  const linkClass = (path: string) => {
    if (isActive(path)) return "text-[#d27500] font-medium";
    if (needWhiteLogo) return "text-white";
    return "text-[#3c3c3c]";
  };

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav
        className={`flex items-center justify-between px-6 py-4 md:px-20 fixed top-0 z-50 w-full ${
          isScrolled ? "bg-black opacity-70 shadow-md" : ""
        }`}
      >
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logoSrc}
              alt="VirtueS Logo"
              width={150}
              height={50}
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              className={`flex items-center gap-1 -ml-2 ${linkClass(
              "/what-we-do"
              )} hover:text-[#d27500]`}
            >
              What we do
              <ChevronDown className="h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <Link
                href="/what-we-do/talent-solution"
                className="block px-4 py-2 text-sm hover:bg-[#f5f5f5] hover:text-[#d27500]"
              >
                Talent Solution
              </Link>
              <Link
                href="/what-we-do/tech-consult"
                className="block px-4 py-2 text-sm hover:bg-[#f5f5f5] hover:text-[#d27500]"
              >
                Tech Consult
              </Link>
              <Link
                href="/what-we-do/product-innovation"
                className="block px-4 py-2 text-sm hover:bg-[#f5f5f5] hover:text-[#d27500]"
              >
                Product Innovation
              </Link>

              </div>
            )}
          </div>
          <Link href="/who-we-work-with" className={`${linkClass("/who-we-work-with")} hover:text-[#d27500]`}>
            Who we work with
          </Link>
          <Link href="/about-us" className={`${linkClass("/about-us")} hover:text-[#d27500]`}>
            About Us
          </Link>
          <Link href="/career" className={`${linkClass("/career")} hover:text-[#d27500]`}>
            Career
          </Link>
          <Link href="/publications" className={`${linkClass("/publications")} hover:text-[#d27500]`}>
            Publications
          </Link>

      
  <Link href="/websites/website" className={`${linkClass("/websites/main/blog")} hover:text-[#d27500]`}>
    Blog
  </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu className={`w-6 h-6 ${needWhiteLogo ? "text-white" : "text-black"}`} />
          </button>
        </div>

        {/* Request Call Back Button */}
        <button
          className={`hidden md:block px-4 py-2 text-sm font-medium border rounded-md transition ${
            needWhiteLogo
              ? "text-white border-white hover:bg-white hover:text-black"
              : "text-[#3c3c3c] border-[#3c3c3c] hover:text-white hover:bg-[#3c3c3c]"
          }`}
          onClick={() => (window.location.href = "mailto:hello@virtueserve.com")}
        >
          Request a call back
        </button>
      </nav>

      {/* Sidebar Drawer */}
      {isSidebarOpen && (
  <div
    className="fixed inset-0 z-50 bg-black bg-opacity-50"
    onClick={() => setIsSidebarOpen(false)}
  >
    <div
      className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-5 z-50 overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="mb-4" onClick={() => setIsSidebarOpen(false)}>
        <X className="w-6 h-6" />
      </button>

      <div className="flex flex-col space-y-4">
        {/* What we do Dropdown */}
        <div>
          <button
            className="flex items-center w-full font-medium text-left"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            What we do
            <ChevronDown
              className={`ml-2 h-4 w-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isDropdownOpen && (
            <div className="ml-4 flex flex-col space-y-2 mt-2">
              <Link href="/what-we-do/talent-solution" onClick={handleLinkClick}>
                Talent Solution
              </Link>
              <Link href="/what-we-do/tech-consult" onClick={handleLinkClick}>
                Tech Consult
              </Link>
              <Link href="/what-we-do/product-innovation" onClick={handleLinkClick}>
                Product Innovation
              </Link>
            </div>
          )}
        </div>

        <Link href="/who-we-work-with" onClick={handleLinkClick}>
          Who we work with
        </Link>
        <Link href="/about-us" onClick={handleLinkClick}>
          About Us
        </Link>
        <Link href="/career" onClick={handleLinkClick}>
          Career
        </Link>
        <Link href="/publications" onClick={handleLinkClick}>
          Publications
        </Link>
        <Link href="/websites/website" onClick={handleLinkClick}>
          Blog
        </Link>

        <button
          className="mt-6 px-4 py-2 text-sm font-medium border border-[#3c3c3c] rounded-md hover:bg-[#3c3c3c] hover:text-white"
          onClick={() => {
            setIsSidebarOpen(false);
            window.location.href = "mailto:hello@virtueserve.com";
          }}
        >
          Request a call back
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
};