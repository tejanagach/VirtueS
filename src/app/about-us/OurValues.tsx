import { Lightbulb, Star, Target } from "lucide-react";
import React from "react";

export function OurValues() {
  // Card data to keep things DRY
  const cards = [
    {
      title: "Our Vision",
      text: `To be the global leader in technology-driven business transformation, 
      empowering organizations with AI, and innovative 
      talent to achieve efficiency, scalability, and long-term success.`,
      icon: Lightbulb,
    },
    {
      title: "Our Values",
      text: `We value innovation, integrity, collaboration, and sustainability—challenging norms, building trust, and succeeding together responsibly.`,
      icon: Star,
    },
    {
      title: "Our Mission",
      text: `To empower businesses with cutting-edge technology, expertise, 
      and collaboration, enabling them to unlock new opportunities, 
      overcome challenges, and achieve their goals.`,
      icon: Target,
    },
  ];

  return (
    // Ensure parent doesn't clip the card's shadow
    <section className="py-16 px-4 bg-white overflow-visible">
      <div className="max-w-6xl mx-auto overflow-visible">
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-visible">
          {cards.map((card, index) => (
            <div
              key={index}
              // Increased top padding to 12,
              // ensuring enough room for the shadow
              className="
                relative 
                bg-white 
                rounded-tr-[80px] 
                box-shadow-primary
                p-6 
                pt-12 
                z-10 
                overflow-visible
              "
            >
              {/* Circle Icon */}
              <div className="absolute -top-6 left-6 w-14 h-14 shadow rounded-full bg-white shadow-md flex items-center justify-center">
                <span className="heading-orange text-xl">
                  <card.icon />
                </span>
              </div>

              {/* Title */}
              <h3 className=" font-normal text-3xl heading-orange mb-2">
                {card.title}
              </h3>

              {/* Body Text */}
              <p className="text-gray-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
