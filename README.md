# Book Shelves

An application that helps to search for books and arrange them in shelves to determine what is being read now, that we want to read, and that we have already read.

## To get started developing right away:

- Go to starter file `cd starter/`
- install all project dependencies with `npm install`
- Build all project with `npm run build`
- start the development server with `npm start`

## What You're Getting

```bash
┌── starter
│    ├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
│    ├── public
│    │   ├── favicon.ico # React Icon
│    │   └── index.html
│    └── src
│        ├── Componant
│        │   ├── page
│        │   │   ├── home.js # home componant page have 3 shelves
│        │   │   └── SearchPage.js # Search page Companant to find any book exist in our database
│        │   ├── Books.js # Book componant to handel any book in our app
│        │   ├── Search.js # Search Componant to handel Search route
│        │   └── Shelves.js # Shelves Componant to handel every shelf in our app
│        ├── App.css # Styles for your app. Feel free to customize this as you desire.
│        ├── App.js # This is the root of your app. Contains static HTML right now.
│        ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
│        ├── icons # Helpful images for your app. Use at your discretion.
│        │   ├── add.svg
│        │   ├── arrow-back.svg
│        │   └── arrow-drop-down.svg
│        ├── index.css # Global styles. You probably won't need to change anything here.
│        └── index.js # react index file.
└── README.md - This file.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
