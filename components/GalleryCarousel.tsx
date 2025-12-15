"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function GalleryCarousel() {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const galleryImages = [
        {
        title: "Main Mansion",
        src: "/balinese-photos/mainmansion.jpg",
        alt: "Main Mansion",
        description: "Experience timeless elegance"
        },
        {
        title: "Main Pool",
        src: "/balinese-photos/mainpool.jpg",
        alt: "Main Pool",
        description: "Your private oasis awaits"
        },
        {
        title: "Chairs & Beach Umbrellas",
        src: "/balinese-photos/chairsandbeachumbrellas.jpg",
        alt: "Chairs and Beach Umbrellas",
        description: "Relax in paradise"
        },
        {
        title: "Balinese Gazebos",
        src: "/balinese-photos/balinesegazebos.jpg",
        alt: "Balinese Gazebos",
        description: "Authentic Balinese architecture"
        },
        {
        title: "Grand Dining Gazebo",
        src: "/balinese-photos/granddininggazebo.jpg",
        alt: "Grand Dining Gazebo",
        description: "Dine under the stars"
        },
        {
        title: "Stairs to the Beach",
        src: "/balinese-photos/stairs.jpg",
        alt: "Stairs to the Beach",
        description: "Your path to tranquility"
        },
        {
        title: "Open Area",
        src: "/balinese-photos/openarea.jpg",
        alt: "Open Area",
        description: "Breathtaking open spaces"
        },
        {
        title: "Kayaks",
        src: "/balinese-photos/kayaks.jpg",
        alt: "Kayaks",
        description: "Adventure on the water"
        },
    ];

    const slideVariants = {
        enter: (direction : number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
        }),
        center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
        },
        exit: (direction : number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset : number, velocity : number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection : number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + newDirection;
        if (nextIndex < 0) nextIndex = galleryImages.length - 1;
        if (nextIndex >= galleryImages.length) nextIndex = 0;
        return nextIndex;
        });
    };

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
        paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (

        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 bg-amber-100/50">
        {/* Carousel */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full"
            >
              {/* Image Container */}
              <div className="relative w-full h-full group cursor-grab active:cursor-grabbing">
                <img
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-2 text-amber-200/80 font-light">
                      {currentIndex + 1} / {galleryImages.length}
                    </p>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-quintessential mb-3 tracking-wide">
                      {galleryImages[currentIndex].title}
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-white/90 font-light tracking-wide">
                      {galleryImages[currentIndex].description}
                    </p>
                  </motion.div>
                </div>

                {/* Side Fade Effects */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black/30 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black/30 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 flex justify-center gap-2 md:gap-3 overflow-x-auto pb-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-sm overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-amber-600 scale-105 opacity-100"
                  : "opacity-50 hover:opacity-80 hover:scale-105"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 border-2 border-amber-400" />
              )}
            </button>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="relative h-1 rounded-full overflow-hidden"
              style={{ width: index === currentIndex ? '40px' : '20px' }}
            >
              <div
                className={`h-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-amber-600"
                    : "bg-amber-900/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    )

}
