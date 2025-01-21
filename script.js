const books = [
    { title: 'Applied Thermodynamics', author: 'R.K. Rajput', shelf: 1, row: 1, column: 1 },
    { title: 'Engineering Mechanics', author: 'R.S. Khurmi', shelf: 2, row: 2, column: 2 },
    { title: 'Basic Electrical Engineering', author: 'V.K. Mehta', shelf: 3, row: 3, column: 3 },
    { title: 'Basic Electronics Engineering', author: 'B.L. Theraja', shelf: 4, row: 4, column: 4 },
    { title: 'Engineering Drawing', author: 'N.D. Bhatt', shelf: 5, row: 5, column: 5 },
    { title: 'Mathematics for Engineers', author: 'B.S. Grewal', shelf: 6, row: 1, column: 6 },
    { title: 'Mechanical Engineering', author: 'M.S. Mahajan', shelf: 7, row: 2, column: 7 },
    { title: 'Programming in C', author: 'E. Balagurusamy', shelf: 8, row: 3, column: 1 },
    { title: 'Engineering Physics', author: 'D.S. Mathur', shelf: 9, row: 4, column: 2 },
    { title: 'Engineering Chemistry', author: 'Jain & Jain', shelf: 10, row: 5, column: 3 },
    { title: 'Solid Mechanics', author: 'R.S. Khurmi', shelf: 11, row: 1, column: 4 },
    { title: 'Introduction to Computing', author: 'P.K. Sinha', shelf: 12, row: 2, column: 5 },
    { title: 'Digital Logic Design', author: 'M. Morris Mano', shelf: 13, row: 3, column: 6 },
    { title: 'Fluid Mechanics', author: 'R.K. Bansal', shelf: 14, row: 4, column: 7 },
    { title: 'Strength of Materials', author: 'R.S. Khurmi', shelf: 15, row: 5, column: 1 },
    { title: 'Engineering Mathematics I', author: 'B.S. Grewal', shelf: 16, row: 1, column: 2 },
    { title: 'Engineering Mechanics (Statics)', author: 'A.P. Boresi', shelf: 17, row: 2, column: 3 },
    { title: 'Basic Civil Engineering', author: 'S.S. Bhavikatti', shelf: 18, row: 3, column: 4 },
    { title: 'Electrical Engineering Fundamentals', author: 'A.E. Fitzgerald', shelf: 19, row: 4, column: 5 },
    { title: 'Mechanical Engineering Materials', author: 'G.K. Lal', shelf: 20, row: 5, column: 6 },
    { title: 'Introduction to Engineering', author: 'P. Mehta', shelf: 21, row: 1, column: 7 },
    { title: 'Engineering Graphics', author: 'K.V. Narayana', shelf: 22, row: 2, column: 1 },
    { title: 'Environmental Science and Engineering', author: 'P. Mehta', shelf: 23, row: 3, column: 2 },
    { title: 'Object-Oriented Programming', author: 'E. Balagurusamy', shelf: 24, row: 4, column: 3 },
    { title: 'Numerical Methods for Engineers', author: 'S. C. Chapra', shelf: 25, row: 5, column: 4 },
    { title: 'Engineering Drawing', author: 'N.D. Bhatt', shelf: 1, row: 1, column: 5 },
    { title: 'Engineering Physics', author: 'H.C. Verma', shelf: 2, row: 2, column: 6 },
    { title: 'Electromagnetic Fields', author: 'William Hayt', shelf: 3, row: 3, column: 7 },
    { title: 'Programming in C++', author: 'Bjarne Stroustrup', shelf: 4, row: 4, column: 1 },
    { title: 'Mechanics of Solids', author: 'R.S. Khurmi', shelf: 5, row: 5, column: 2 },
    { title: 'Engineering Thermodynamics', author: 'Y.V.C. Rao', shelf: 6, row: 1, column: 3 },
    { title: 'Basic Electrical Engineering', author: 'J.B. Gupta', shelf: 7, row: 2, column: 4 },
    { title: 'Engineering Mathematics II', author: 'B.S. Grewal', shelf: 8, row: 3, column: 5 },
    { title: 'Theory of Machines', author: 'R.S. Khurmi', shelf: 9, row: 4, column: 6 },
    { title: 'Control Systems Engineering', author: 'I.J. Nagrath', shelf: 10, row: 5, column: 7 },
    { title: 'Applied Chemistry', author: 'A.K. Srivastava', shelf: 11, row: 1, column: 1 },
    { title: 'Strength of Materials', author: 'R.K. Bansal', shelf: 12, row: 2, column: 2 },
    { title: 'Fluid Mechanics', author: 'M.A. K. Sharma', shelf: 13, row: 3, column: 3 },
    { title: 'Introduction to Engineering Materials', author: 'T.P. Rao', shelf: 14, row: 4, column: 4 },
    { title: 'Electrical Machines', author: 'B.L. Theraja', shelf: 15, row: 5, column: 5 },
    { title: 'Engineering Mathematics III', author: 'B.S. Grewal', shelf: 16, row: 1, column: 6 },
    { title: 'Introduction to Signals and Systems', author: 'A.V. Oppenheim', shelf: 17, row: 2, column: 7 },
    { title: 'Digital Circuits and Systems', author: 'M. Morris Mano', shelf: 18, row: 3, column: 1 },
    { title: 'Control Systems', author: 'Norman Nise', shelf: 19, row: 4, column: 2 },
    { title: 'Engineering Mechanics (Dynamics)', author: 'I.H. Shames', shelf: 20, row: 5, column: 3 },
    { title: 'Electric Circuit Analysis', author: 'W.H. Hayt', shelf: 21, row: 1, column: 4 },
    { title: 'Electronics Engineering', author: 'U.A. Bakshi', shelf: 22, row: 2, column: 5 },
    { title: 'Fluid Mechanics and Hydraulic Machines', author: 'R.K. Bansal', shelf: 23, row: 3, column: 6 },
    { title: 'Introduction to Digital Logic Design', author: 'M. Morris Mano', shelf: 24, row: 4, column: 7 },
    { title: 'Environmental Engineering', author: 'S.K. Gupta', shelf: 25, row: 5, column: 1 }
];

// Display books on the home page
function displayBooks() {
    const bookListDiv = document.getElementById('bookList');
    bookListDiv.innerHTML = '';
    
    // Sort books alphabetically by title
    const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
    
    sortedBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        
        const bookTitle = document.createElement('h3');
        bookTitle.innerText = book.title;
        
        const bookDetails = document.createElement('p');
        bookDetails.innerHTML = `Author: ${book.author}<br>Shelf: ${book.shelf}<br>Row: ${book.row}<br>Column: ${book.column}`;
        
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookDetails);
        
        bookListDiv.appendChild(bookItem);
    });
}

// Search books by title
function searchBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    
    const bookListDiv = document.getElementById('bookList');
    bookListDiv.innerHTML = '';
    
    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        
        const bookTitle = document.createElement('h3');
        bookTitle.innerText = book.title;
        
        const bookDetails = document.createElement('p');
        bookDetails.innerHTML = `Author: ${book.author}<br>Shelf: ${book.shelf}<br>Row: ${book.row}<br>Column: ${book.column}`;
        
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookDetails);
        
        bookListDiv.appendChild(bookItem);
    });
}

// Initialize book display on page load
window.onload = displayBooks;