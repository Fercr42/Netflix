export const MovieHeaderInfoComponent = ({ selectedMovie }) => {
  return (
    <div className="relative">
      <img
        src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
        alt={selectedMovie.title}
        className="w-full h-64 md:h-80 rounded-t-lg"
      />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/90 to-transparent flex flex-row justify-between items-center">
        <div className="flex flex-row gap-10 ml-4 absolute bottom-4 left-4">
          <button className="bg-white border-2 w-24 border-black text-black px-4 py-2 rounded-md flex items-center gap-2 hover:scale-105 transition-all duration-300 cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>

          <div className="flex flex-row gap-2 bg-white border-2 border-black text-black px-4 py-2 rounded-md w-24 justify-center items-center hover:scale-105 transition-all duration-300 cursor-pointer">
            <button className="hover:scale-105 transition-all duration-300 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 2 7.59 8.59C7.22 8.95 7 9.45 7 10v9c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-.01z" />
              </svg>
            </button>

            <button className="hover:scale-105 transition-all duration-300 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22L1.14 11.27c-.09.23-.14.47-.14.73v.01c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 22l6.59-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
