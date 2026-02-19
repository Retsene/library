// Library and Book class
class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    this.books.push(newBook);
    this.render();
  }

  removeBook(id) {
    this.books = this.books.filter(book => book.id !== id);
    this.render();
  }

  render() {
    const counter = document.getElementById('counter');
    counter.innerHTML = '';
    const container = document.getElementById('library-container');
    container.innerHTML = '';

    let readCounter = 0;
    let unreadCounter = 0;

    for (const book of this.books) {
      book.read ? readCounter++ : unreadCounter++;

      counter.innerHTML = `
        <p><strong>Read:</strong> ${readCounter}</p>
        <p><strong>Unread:</strong> ${unreadCounter}</p>
      `


      const card = document.createElement('div');
      card.classList.add('book-card');

      card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <button class="toggle-btn"><strong>Status:</strong> ${book.read ? 'Read' : 'Not Read'}</button>
        <button class="delete-btn" data-id="${book.id}">Delete</button>
      `;

      const deleteBtn = card.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {
        this.removeBook(book.id);
      })

      const toggleBtn = card.querySelector('.toggle-btn');
      toggleBtn.addEventListener('click', () => {
        book.toggleRead();
        this.render();
      })

      container.appendChild(card);
    }
  }
}

class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = Number(pages);
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

// Placeholder books
const myLibrary = new Library();
myLibrary.addBook('Book 1', 'John Doe', 420, false);
myLibrary.addBook('Book 2', 'Woo Hoo', 727, true);

// Popup
const dialog = document.getElementById('popup-dialog');
const newBtn = document.getElementById('add-btn');
const closeDialogBtn = document.getElementById('close-popup');

newBtn.addEventListener('click', () => {
  dialog.showModal();
});

dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const clickedOutside = (
    event.clientY < rect.top ||
    event.clientY > rect.bottom ||
    event.clientX < rect.left ||
    event.clientX > rect.right
  );

  if (clickedOutside) {
    dialog.close();
  }
});

closeDialogBtn.addEventListener('click', () => {
  dialog.close();
});

// Form
const form = document.getElementById('form-popup');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  myLibrary.addBook(title, author, pages, read);
  form.reset();
  dialog.close();
})


