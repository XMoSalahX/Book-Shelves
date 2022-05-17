import { update } from "../BooksAPI";
import PropTypes from "prop-types";

// Componant to build books
function Books({ dest, reloadNow, bo }) {
  console.log(bo);
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              bo?.imageLinks?.thumbnail || bo?.imageLinks?.smallThumbnail || ""
            })`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={bo.shelf || "none"}
            onChange={async (e) => {
              await update(bo, e.target.value).then(() => {
                if (dest) {
                  reloadNow();
                }
              });
            }}
          >
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{bo.title}</div>
      {bo.authors !== undefined
        ? bo.authors.map((author, index) => (
            <div key={index} className="book-authors">
              {author}
            </div>
          ))
        : null}
    </div>
  );
}

// Add prop types to Book componant
Books.propTypes = {
  dest: PropTypes.bool,
  reloadNow: PropTypes.func,
  bo: PropTypes.object.isRequired,
};

export default Books;
