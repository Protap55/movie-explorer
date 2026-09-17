import { useRef, useState } from "react";
import useMoviesData from "../../hooks/useMoviesData";
import MovieCard from "../../Component/MovieCard/MovieCard";
import Modal from "../../Component/Modal/Modal";

const Movies = () => {
  const moviesData = useMoviesData();
  const [searchShow, setSearchShow] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  const dialogRef = useRef(null);

  const handleSearch = (e) => {
    setSearchShow(e.target.value);
  };

  const handleDetails = (show) => {
    setSelectedShow(show);
    dialogRef.current?.showModal();
  };

  const filteredMovies = moviesData.filter((item) =>
    item.show.name.toLowerCase().includes(searchShow.toLowerCase()),
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-center text-3xl font-bold sm:text-4xl">
        Explore <span className="text-secondary">Shows</span>
      </h1>

      <label className="input mx-auto flex w-full max-w-md items-center">
        <input
          type="search"
          value={searchShow}
          onChange={handleSearch}
          placeholder="🔍 Search for a show..."
          aria-label="Search shows"
        />
      </label>

      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 py-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMovies.map((item) => (
            <MovieCard
              key={item.show.id}
              show={item.show}
              onDetails={handleDetails}
            />
          ))}
        </div>
      ) : (
        <p className="py-10 text-center text-base-content/70">
          No shows found.
        </p>
      )}

      <Modal show={selectedShow} dialogRef={dialogRef} />
    </section>
  );
};

export default Movies;
