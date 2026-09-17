import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";
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
    image: banner4,
    title: "Find Movies You'll Love",
    description:
      "Search your favorite titles and explore everything you need to know about each movie.",
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full overflow-hidden rounded-xl sm:rounded-2xl">
      {slides.map((slide, index) => {
        const previousSlide = index === 0 ? slides.length - 1 : index - 1;

        const nextSlide = index === slides.length - 1 ? 0 : index + 1;

        return (
          <div
            key={slide.id}
            id={slide.id}
            className="carousel-item relative w-full"
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="h-[400px] w-full object-cover object-center sm:h-[500px] md:h-[550px] lg:h-[600px]"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-10 sm:px-14 md:px-16 lg:px-20">
                <div className="max-w-2xl space-y-3 sm:space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary sm:text-sm sm:tracking-[0.3em]">
                    Welcome to Movie Explorer
                  </p>

                  <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="max-w-xl text-sm leading-6 text-gray-200 sm:text-base sm:leading-7 lg:text-lg">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <Link
                    to="/movies"
                    className="btn btn-secondary btn-sm mt-2 rounded-full px-5 text-sm font-bold sm:btn-md sm:mt-3 sm:px-8 sm:text-base"
                  >
                    Explore Movies
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute left-2 right-2 top-1/2 flex -translate-y-1/2 justify-between sm:left-4 sm:right-4 md:left-6 md:right-6">
              <a
                href={`#${slides[previousSlide].id}`}
                aria-label="Previous slide"
                className="btn btn-circle btn-xs border-white/30 bg-black/40 text-white hover:bg-black/70 sm:btn-sm md:btn-md"
              >
                ❮
              </a>

              <a
                href={`#${slides[nextSlide].id}`}
                aria-label="Next slide"
                className="btn btn-circle btn-xs border-white/30 bg-black/40 text-white hover:bg-black/70 sm:btn-sm md:btn-md"
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
