import { useState } from "react";
import useMoviesData from "../../hooks/useMoviesData";
import MovieCard from "../../Component/MovieCard/MovieCard";
import Loader from "../../Component/Loader/Loader";
import Modal from "../../Component/Modal/Modal";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [modalData, setModalData] = useState(null);

  const { moviesData, isLoading } = useMoviesData({ search });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Explore <span className="text-secondary">Shows</span>
        </h1>

        <p className="mt-2 text-base-content/60">
          Search and explore your favorite TV shows.
        </p>
      </div>

      {/* Search */}
      <label className="input mx-auto flex w-full max-w-md items-center">
        <input
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="🔍 Search for a show..."
          aria-label="Search shows"
        />
      </label>

      {/* Movies */}
      {isLoading ? (
        <div className="flex min-h-60 items-center justify-center">
          <Loader />
        </div>
      ) : moviesData.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 py-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {moviesData.map((movieData) => (
            <MovieCard
              key={movieData.id}
              movieData={movieData}
              setModalData={setModalData}
            />
          ))}
        </div>
      ) : (
        /* No Result */
        <div className="flex min-h-60 flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 text-6xl">🎬</div>

          <h2 className="text-2xl font-bold">No Shows Found</h2>

          <p className="mt-2 max-w-md text-base-content/60">
            We couldn't find any shows matching your search.
          </p>

          {search && (
            <button
              onClick={() => setSearch("")}
              className="btn btn-primary mt-5"
            >
              Show All Shows
            </button>
          )}
        </div>
      )}

      {/* Details Modal */}
      {modalData && <Modal modalData={modalData} setModalData={setModalData} />}
    </section>
  );
};

export default Movies;
