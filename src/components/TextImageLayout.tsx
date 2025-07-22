import React from "react";

interface TextImageLayoutProps {
  img: string;
  title: string;
  imgPosition: "left" | "right";
  content: string;
  secondaryContent?: string;
  points?: string[];
  shadow?: boolean;
}

export const TextImageLayout: React.FC<TextImageLayoutProps> = ({
  img,
  title,
  imgPosition,
  content,
  secondaryContent,
  points,
  shadow = false,
}) => {
  const isImgLeft = imgPosition === "left";

  return (
    <section
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 ${
        isImgLeft ? "bg-white" : "bg-[#F5F5F5]"
      }`}
      id={`${title.toLowerCase().replace(/\s+/g, "-")}-section`}
    >
      <div className="container px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mx-auto">
          <div
            className={`space-y-4 ${isImgLeft ? "lg:order-2" : "lg:order-1"}`}
          >
            <h2 className="text-3xl mb-8 font-medium tracking-tighter sm:text-3xl text-[#D27500]">
              {title}
            </h2>
            <hr className="text-[#C0C0C0] mb-8 bg-[#C0C0C0] w-52 h-[1px]" />
            <p className="text-gray-700 md:text-base xl:text-lg">{content}</p>
            {points && (
              <ul className="space-y-2 text-gray-700 list-disc">
                {points.map((point, index) => (
                  <li key={index} className="">
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {secondaryContent && (
              <p className="text-gray-700 md:text-base xl:text-lg">
                {secondaryContent}
              </p>
            )}
          </div>

          <div
            className={`flex items-center justify-center ${
              isImgLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative w-full max-w-[549px] h-auto">
              <img
                src={img}
                alt={title}
                className="w-full h-auto max-h-[339px] object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
