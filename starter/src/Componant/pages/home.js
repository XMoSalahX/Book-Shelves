import Shelves from "../Shelves";
import Search from "../Search";
import { useEffect, useState } from "react";
import { getAll } from "../../BooksAPI";

// Home Componant
const Home = function () {
  const [currentlyReading, setCurentllyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);
  // use Effect to handel asyc functions
  useEffect(() => {
    if (currentlyReading.length === 0) {
      getBookObject();
    }

    // Set books in session storage
    window.sessionStorage.setItem(
      "books",
      JSON.stringify([...currentlyReading, ...wantToRead, ...read])
    );
  });

  // Function to get book object
  async function getBookObject() {
    const data = await getAll();

    // get all books on Currently Reading from Shelf
    let filterCurrentlyReading = await data.filter(
      (book) => book.shelf === "currentlyReading"
    );

    setCurentllyReading(filterCurrentlyReading);

    // get all books on Want To Read from Shelf
    let filtterWantToRead = await data.filter(
      (book) => book.shelf === "wantToRead"
    );

    setWantToRead(filtterWantToRead);

    // get all books Read from Shelf
    let filtterRead = await data.filter((book) => book.shelf === "read");

    setRead(filtterRead);
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {/*import Shelves */}
        {currentlyReading.length !== 0 ? (
          <Shelves
            name="Currently Reading"
            data={currentlyReading}
            reloadNow={() => {
              setCurentllyReading([]);
            }}
          />
        ) : (
          <></>
        )}
        {wantToRead.length !== 0 ? (
          <Shelves
            name="Want to Read"
            data={wantToRead}
            reloadNow={() => {
              setCurentllyReading([]);
            }}
          />
        ) : null}
        {read.length !== 0 ? (
          <Shelves
            dest={true}
            name="Read"
            data={read}
            reloadNow={() => {
              setCurentllyReading([]);
            }}
          />
        ) : null}
      </div>
      {/* Import Search*/}
      <Search />
    </div>
  );
};

export default Home;
