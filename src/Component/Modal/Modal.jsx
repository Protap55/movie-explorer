const Modal = ({ show, dialogRef }) => {
  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box relative max-h-[90vh] w-11/12 max-w-2xl overflow-y-auto p-5 sm:p-8">
        <form method="dialog">
          <button
            type="submit"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
            aria-label="Close modal"
          >
            ✕
          </button>
        </form>

        {show && (
          <>
            <h2 className="pr-8 text-xl font-bold sm:text-2xl">{show.name}</h2>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-[180px_1fr]">
              <div className="flex justify-center sm:block">
                {show.image?.medium ? (
                  <img
                    src={show.image.medium}
                    alt={`${show.name} poster`}
                    className="max-h-72 w-auto rounded-lg object-cover sm:w-full"
                  />
                ) : (
                  <div className="flex h-56 w-full items-center justify-center rounded-lg bg-base-200 text-sm text-base-content/60">
                    No poster available
                  </div>
                )}
              </div>

              <div className="space-y-3 text-sm sm:text-base">
                <p>
                  <strong>Rating:</strong> {show.rating?.average ?? "N/A"}
                </p>

                <p>
                  <strong>Premiered:</strong> {show.premiered || "N/A"}
                </p>

                <p>
                  <strong>Language:</strong> {show.language || "N/A"}
                </p>

                <p>
                  <strong>Genres:</strong>{" "}
                  {show.genres?.length ? show.genres.join(", ") : "N/A"}
                </p>

                <p>
                  <strong>Status:</strong> {show.status || "N/A"}
                </p>

                {show.url && (
                  <a
                    href={show.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mt-2 w-full sm:w-auto"
                  >
                    Visit TVMaze
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      <form method="dialog" className="modal-backdrop">
        <button type="submit" aria-label="Close modal">
          Close
        </button>
      </form>
    </dialog>
  );
};

export default Modal;
