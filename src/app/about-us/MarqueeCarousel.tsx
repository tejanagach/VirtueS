"use client";

import React from "react";

export function MarqueeCarousel() {
  // Example "cards" with various widths (in Tailwind classes)
  // Adjust widths, background, or even replace with images as needed
  const cards = [
    { widthClass: "w-32", label: "Card A" },
    { widthClass: "w-44", label: "Card B" },
    { widthClass: "w-36", label: "Card C" },
    { widthClass: "w-32", label: "Card D" },
  ];

  // We duplicate the array so that the marquee has two sets in a row
  const marqueeItems = [...cards, ...cards];

  return (
    <>
      {/* 
        Define our keyframes in global scope. 
        - marquee: Scrolls entire row from right to left infinitely.
        - zoomInOut: Gently scales each card in and out.
      */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move left by 50% of container width so second half lines up. */
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
          /* Adjust 15s to control speed; linear keeps a constant scroll */
        }

        @keyframes zoomInOut {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-zoom {
          animation: zoomInOut 3s ease-in-out infinite;
          /* 3s is the pulse duration; tweak as desired */
        }
      `}</style>

      <section className="overflow-hidden pointer-events-none bg-white py-10">
        <div className="relative flex animate-marquee">
          {/* The marquee is 2 sets of the same cards, side-by-side */}
          {marqueeItems.map((card, idx) => (
            <div
              key={idx}
              className={`mx-4 h-32 ${card.widthClass} 
                          bg-gray-300 rounded-xl shadow 
                          flex items-center justify-center 
                          animate-zoom`}
            >
              <span className="text-sm font-semibold text-gray-700">
                {card.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
