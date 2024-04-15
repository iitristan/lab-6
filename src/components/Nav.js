import React, { useState } from "react";

function Nav() {
  return (
    <nav>
      <h1 style={{ textAlign: "center" }}>Music App</h1>

      <Search />
      <NumberResults query="query" />
    </nav>
  );
}

function Search() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

function NumberResults({ query }) {
  return (
    <p>
      Found <strong>X</strong> results for "{query}"
    </p>
  );
}

export default Nav;
