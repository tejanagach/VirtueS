import { useRef, useState, useEffect } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play(); // Ensures playback after unmuting
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current
            .play()
            .catch((err) => console.log("Play error:", err));
        } else {
          videoRef.current?.pause();
        }
      },
      {
        threshold: 0.5, // Play when 50% of the video section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 h-[800px] relative" ref={sectionRef}>
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://4i2u705gdx.ufs.sh/f/cXw2QFrZrmFvVEWwi2zNGbMBdIq3vpHoDVJYhe8tA1ucaTR2"
          type="video/mp4"
        />
        <track
          src="captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
      {isMuted && (
        <button
          onClick={handleUnmute}
          className="bg-transparent border-[white] border text-white px-4 py-2 rounded shadow-md hover:bg-white hover:text-gray-500 transition duration-300"
          style={{
            position: "absolute",
            zIndex: 10,
            top: "5%",
            right: "0%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Unmute
        </button>
      )}
    </section>
  );
}
