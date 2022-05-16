import { Link } from "react-router-dom";
import { useState } from "react";
import { search } from "../../BooksAPI";
import Books from "../Books";

const SearchPage = function () {
  const [data, setData] = useState([]);

  async function handeler(e) {
    if (e.target.value !== undefined && e.target.value !== "") {
      const res = await search(e.target.value);
      // console.log(res);
      if (res !== undefined) {
        setData(res);
      }
    }
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => {
              handeler(e);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {data.error === "empty query" ? (
            <div>Your Book not found</div>
          ) : (
            // data.map((book) => console.log(book))
            data.map((book) =>
              book.title ? <Books key={book.id} bo={book} /> : false
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
