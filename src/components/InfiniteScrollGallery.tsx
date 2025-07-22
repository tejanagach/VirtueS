import { useEffect, useState } from "react";

const images = [
  "/cocacola.png",
  "/delMonte.png",
  "/duda.png",
  "/ey.png",
  "/ferroglobe.png",
  "/globeMetals.png",
  "/hasbro.png",
  "/mindtree.png",
  "/tcs.png",
];

export const InfiniteScrollGallery = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems([...images, ...images]);
  }, []);

  return (
    <div className="wrapper relative w-[90%] max-w-[1536px] mx-auto mt-20 h-[100px] overflow-hidden">
      {items.map((src, index) => (
        <div
          key={src + index}
          className={`item ${
            "item" + (index + 1)
          } w-[200px] h-[100px] rounded-md`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      ))}
    </div>
  );
};
