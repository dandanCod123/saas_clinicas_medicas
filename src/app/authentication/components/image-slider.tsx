"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/clinic-image.jpg",
    alt: "Recepção da clínica médica",
  },
  {
    src: "/clinic-image-2.jpg",
    alt: "Consultório médico",
  },
  {
    src: "/clinic-image-3.jpg",
    alt: "Equipe médica",
  },
  {
    src: "/clinic-image-4.jpg",
    alt: "Equipe médica",
  },
  {
    src: "/clinic-image-5.jpg",
    alt: "Equipe médica",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 500); // duração do fade out antes de trocar
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-300 ${
            index === currentIndex
              ? isAnimating
                ? "opacity-0"
                : "opacity-100"
              : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Indicadores (bolinhas) */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
