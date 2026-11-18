/* ======================================================
    Lab 8 - Header.jsx starter
====================================================== */

export default function Header({ title, searchTerm }) {
    return (
        <header>
            <h1>{title}</h1>
            <p>Search for movies and save your favorites to a watchlist.</p>
            <p>Current search: {searchTerm}</p>
        </header>
    );
}