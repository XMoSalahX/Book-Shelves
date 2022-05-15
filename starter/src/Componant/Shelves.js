import Books from "./Books";
import PropTypes from "prop-types";

// Shelves Componant
function Shelves({ name, data, reloadNow }) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {data.map((book) => (
              <Books
                key={book.id}
                dest={true}
                reloadNow={reloadNow}
                bo={book}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

// Add prop types to Shelf componant
Shelves.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  reloadNow: PropTypes.func.isRequired,
};

export default Shelves;
