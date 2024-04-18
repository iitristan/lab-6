import React from "react";

function Nav({ setSearchQuery, totalResults, query }) {
  return (
    <nav>
      <h1 style={{ textAlign: "center" }}>Music App</h1>
      <Search setSearchQuery={setSearchQuery} />
      <NumberResults query={query} totalResults={totalResults} />
    </nav>
  );
}

function Search({ setSearchQuery }) {
  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

function NumberResults({ query, totalResults }) {
  return (
    <p>
      Found <strong>{totalResults}</strong> results for "{query}"
    </p>
  );
}

export default Nav;
