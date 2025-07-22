import { useState, useEffect, useRef } from "react";
import styles from "./styles/Carousel.module.css";

const images = [
  "/peopleWithLaptops.png",
  "/discussion.png",
  "/groupDiscussion.png",
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Automatically go to the next image every 3 seconds
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const startAutoPlay = () => {
    stopAutoPlay();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className={`${styles.carouselContainer} absolute`}>
      {images.map((src, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            className={`${styles.slide} ${isActive ? styles.active : ""}`}
          >
            <img src={src} alt={`Slide ${index}`} />
          </div>
        );
      })}
    </div>
  );
}
