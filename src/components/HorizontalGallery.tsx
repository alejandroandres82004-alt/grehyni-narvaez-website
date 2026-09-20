"use client";

import { useRef } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
}

export default function HorizontalGallery({ images, title }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group/gallery">
      {/* Navigation arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-500 hover:bg-white"
      >
        <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-500 hover:bg-white"
      >
        <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scrollable gallery */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto gallery-scroll snap-x snap-mandatory px-6 lg:px-10"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="shrink-0 snap-start relative cursor-view gallery-item overflow-hidden"
            style={{
              width: idx === 0 ? "70vw" : "45vw",
              maxWidth: idx === 0 ? "900px" : "580px",
            }}
          >
            <div className={`relative ${idx === 0 ? "aspect-[16/10]" : "aspect-[4/3]"} overflow-hidden`}>
              <Image
                src={img}
                alt={`${title} - ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 80vw, 50vw"
              />
            </div>
          </div>
        ))}
        {/* Spacer at end */}
        <div className="shrink-0 w-10" />
      </div>
    </div>
  );
}
