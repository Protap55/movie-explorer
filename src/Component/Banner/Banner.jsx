import React from "react";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import { Link } from "react-router";

const slides = [
  {
    id: "slide1",
    image: banner1,
    title: "Discover Your Next Favorite Movie",
    description:
      "Explore amazing movies, search for your favorites, and discover detailed information about every film.",
  },
  {
    id: "slide2",
    image: banner2,
    title: "Your Next Movie Adventure Starts Here",
    description:
      "From thrilling adventures to unforgettable stories, find movies that match your mood.",
  },
  {
    id: "slide3",
    image: banner3,
    title: "Explore the World of Cinema",
    description:
      "Browse movies, discover new stories, and find your next favorite film.",
  },
  {
    id: "slide4",
    image:
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    title: "Find Movies You'll Love",
    description:
      "Search your favorite titles and explore everything you need to know about each movie.",
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full rounded-2xl">
      {slides.map((slide, index) => {
        const previousSlide = index === 0 ? slides.length - 1 : index - 1;

        const nextSlide = index === slides.length - 1 ? 0 : index + 1;

        return (
          <div
            key={slide.id}
            id={slide.id}
            className="carousel-item relative w-full"
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="h-[450px] w-full object-cover sm:h-[500px] md:h-[600px]"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-6 text-white sm:px-12 lg:px-16">
                <div className="max-w-2xl space-y-5">
                  <p className="font-semibold uppercase tracking-[0.3em] text-secondary">
                    Welcome to Movie Explorer
                  </p>

                  <h1 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="max-w-xl text-sm leading-7 text-gray-200 sm:text-lg">
                    {slide.description}
                  </p>

                  {/*  Button */}
                  <Link
                    to="/movies"
                    className="btn btn-secondary mt-3 rounded-full px-8 text-base font-bold"
                  >
                    Explore Movies
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 justify-between sm:left-6 sm:right-6">
              <a
                href={`#${slides[previousSlide].id}`}
                aria-label="Previous slide"
                className="btn btn-circle btn-sm border-white/30 bg-black/40 text-white hover:bg-black/70 sm:btn-md"
              >
                ❮
              </a>

              <a
                href={`#${slides[nextSlide].id}`}
                aria-label="Next slide"
                className="btn btn-circle btn-sm border-white/30 bg-black/40 text-white hover:bg-black/70 sm:btn-md"
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
