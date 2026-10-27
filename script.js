```javascript
let books = [
    { id: "101", title: "Java Programming", author: "James Gosling" },
    { id: "102", title: "Python Basics", author: "Guido van Rossum" },
    { id: "103", title: "Web Development", author: "Jon Duckett" }
];

function getInputValues() {
    return {
        id: document.getElementById("bookId").value.trim(),
        title: document.getElementById("bookTitle").value.trim(),
        author: document.getElementById("bookAuthor").value.trim()
    };
}

function showMessage(message) {
    document.getElementById("message").textContent = message;
}

function clearFields() {
    document.getElementById("bookId").value = "";
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
}

function viewBooks() {
    const table = document.getElementById("bookTable");
    table.innerHTML = "";

    if (books.length === 0) {
        table.innerHTML =
            '<tr><td colspan="3">No books available</td></tr>';
        return;
    }

    books.forEach(function(book) {
        const row = document.createElement("tr");

        [book.id, book.title, book.author].forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    showMessage("Book list displayed.");
}

function addBook() {
    const book = getInputValues();

    if (!book.id || !book.title || !book.author) {
        showMessage("Please enter all book details.");
        return;
    }

    const exists = books.some(function(item) {
        return item.id === book.id;
    });

    if (exists) {
        showMessage("Book ID already exists.");
        return;
    }

    books.push(book);
    viewBooks();
    showMessage("Book added successfully.");
    clearFields();
}

function searchBook() {
    const id = document.getElementById("bookId").value.trim();

    if (!id) {
        showMessage("Please enter a Book ID to search.");
        return;
    }

    const book = books.find(function(item) {
        return item.id === id;
    });

    if (book) {
        document.getElementById("bookTitle").value = book.title;
        document.getElementById("bookAuthor").value = book.author;
        showMessage("Book found successfully.");
    } else {
        showMessage("Book not found.");
    }
}

function updateBook() {
    const book = getInputValues();

    if (!book.id || !book.title || !book.author) {
        showMessage("Enter the Book ID, title, and author.");
        return;
    }

    const index = books.findIndex(function(item) {
        return item.id === book.id;
    });

    if (index === -1) {
        showMessage("Book not found. Enter a valid Book ID.");
        return;
    }

    books[index] = book;
    viewBooks();
    showMessage("Book updated successfully.");
    clearFields();
}

function deleteBook() {
    const id = document.getElementById("bookId").value.trim();

    if (!id) {
        showMessage("Please enter a Book ID to delete.");
        return;
    }

    const index = books.findIndex(function(item) {
        return item.id === id;
    });

    if (index === -1) {
        showMessage("Book not found.");
        return;
    }

    books.splice(index, 1);
    viewBooks();
    showMessage("Book deleted successfully.");
    clearFields();
}

viewBooks();
```