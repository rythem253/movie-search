/* ======================================================
    Lab 8 - MovieGrid.jsx starter
====================================================== */

import MovieCard from "./MovieCard.jsx";

/* ======================================================
    Lab 8 - MovieGrid.jsx starter
====================================================== */
export default function MovieGrid({ movies, addToWatchlist }) {
    return (
        <div className="grid">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    addToWatchlist={addToWatchlist}
                />
            ))}
        </div>
    );
}