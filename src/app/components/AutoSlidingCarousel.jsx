"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const AutoSlidingCarousel = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      img: "/images/projects/frontend_kks.jpeg",
      title: "E-commerce Website",
      description: "You can purchase grocery item.It's fast delivery.",
      link: "https://krishna-kirna-store-kks.onrender.com",
    },
    {
      img: "/images/projects/News_api.jpeg",
      title: "News-reading",
      description:
        "We can use to update everytime.we should save tree in world through technology.",
      link: "https://news-website-1-l8x5.onrender.com/",
    },
    {
      img: "/images/projects/admin_kks.jpeg",
      title: "Admin Portal-Ecommerce",
      description: "This is using to upload item,taking order etc...",
      link: "https://github.com/BharatKumawat63777/E-commerce-Website/tree/main/admin",
    },
    {
      img: "/images/projects/Notebook.jpeg",
      title: "Notebook-note",
      description: "It's using Note your daily routine and complete it.",
      link: "https://github.com/BharatKumawat63777/inotebook",
    },
    {
      img: "/images/projects/pug.jpeg",
      title: "Dance Website - pug",
      description:
        "A dance website showcases various dance styles, tutorials, events, and performances. It connects dancers, instructors, and enthusiasts through online classes, workshops, and community engagement.",
      link: "https://github.com/BharatKumawat63777/Dance-Website",
    },
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle previous slide
  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Handle next slide
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="dark:bg-gray-900 mt-[150px] text-gray-800 dark:text-white h-[550px] mb-16 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full relative">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Experience</h1>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden rounded-lg shadow-lg w-full relative">
          {/* Slide */}
          <div
            className="w-full flex-shrink-0 text-white dark:bg-gray-800 p-6 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: 1 }}
          >
            <a
              href={slides[index].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={slides[index].img}
                alt={slides[index].title}
                width={800} // Adjust the width based on your layout
                height={320} // Adjust the height based on your layout
                className="w-full h-80 object-cover rounded-md cursor-pointer"
              />
            </a>
            <h2 className="text-xl font-semibold mt-4">
              {slides[index].title}
            </h2>
            <p className="text-white dark:text-gray-400">
              {slides[index].description}
            </p>
          </div>
        </div>

        {/* Navigation Handles */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-70 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-70 transition"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default AutoSlidingCarousel;
