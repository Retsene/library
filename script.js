let myLibrary = [
  {
    title: "Harry Potter and the Philosopher's Stone", 
    author: "J.K. Rowling",
    pages: 223,
    cover: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    isRead: true,
  }
];

const contentContainer = document.querySelector('.content');
const form = document.querySelector('.form');

function renderLibrary() {
  contentContainer.innerHTML = '';
}

renderLibrary();

