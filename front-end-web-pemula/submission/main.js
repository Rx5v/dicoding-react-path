// Do your work here...

const books = [];
const STORAGE_KEY = "ALL_BOOKS";
const RENDER_BOOK = "render-book";
const OPEN_MODAL = "open-modal";
const CLOSE_MODAL = "close-modal";

const ALERT_SUCCESS = "alert-success";

function isStorageExist() {
  if (typeof Strorage === undefined) {
    Swal.fire({
      title: "Warning!",
      text: "Browser yang digunakan tidak mendukung local storage",
      icon: "warning",
    });
  }
  return true;
}

// create id
function generateId() {
  return Number(new Date());
}

// Book structure
function bookModel(id, title, author, year, isCompleted) {
  return {
    id,
    title,
    author,
    year,
    isCompleted,
  };
}

// add book
function addBook() {
  const id = generateId();
  const title = document.getElementById("bookFormTitle").value;
  const author = document.getElementById("bookFormAuthor").value;
  const year = document.getElementById("bookFormYear").value;
  const isCompleted = document.getElementById("bookFormIsComplete").checked;

  // change into object
  const book = bookModel(id, title, author, parseInt(year), isCompleted);
  books.push(book);

  // set books in local storage
  if (isStorageExist()) {
    const data = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, data);
  }
  renderBook(books);
  resetForm();
  alertSuccess("Sukses", "Berhasil Menambah buku!");
}

// Reset form
function resetForm() {
  document.getElementById("bookFormTitle").value = "";
  document.getElementById("bookFormAuthor").value = "";
  document.getElementById("bookFormYear").value = "";
  if (document.getElementById("bookFormIsComplete").checked !== false) {
    document.getElementById("bookFormIsComplete").checked = false;
  }
}

// Load book from local storage and set into books variable
function loadBookformStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  let allBooks = JSON.parse(data);
  if (data !== null) {
    for (const book of allBooks) {
      books.push(book);
    }
  }
  renderBook(books);
}

// get book by id
function findBookById(id) {
  return books.filter((book) => {
    return parseInt(book.id) === parseInt(id);
  });
}

// get index of book
function getIndexBook(id) {
  for (const index in books) {
    if (books[index].id == id) {
      return index;
    }
  }
  return -1;
}

// Delete book
function deleteBook(id) {
  const target = getIndexBook(id);
  Swal.fire({
    title: "Apakah anda yakin?",
    text: "Anda akan menghapus buku ini",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, hapus!",
  }).then((result) => {
    if (result.isConfirmed) {
      if (target === -1) return alertFailed("Error", "Data tidak ditemukan!");
      books.splice(target, 1);
      renderBook(books);
      if (isStorageExist()) {
        const data = JSON.stringify(books);
        localStorage.setItem(STORAGE_KEY, data);
      }

      alertSuccess("Sukses", "Buku telah dihapus!");
    }
  });
}

// change isCompleted status
function changeStatus(id) {
  const target = findBookById(id);

  if (target.length < 1) return alertFailed("Error", "Data tidak ditemukan!");

  Swal.fire({
    title: "Apakah anda yakin?",
    text: "Anda akan memindahkan buku ini",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, pindahkan!",
  }).then((result) => {
    if (result.isConfirmed) {
      // set isCompleted to opposite value from current isCompleted => isCompleted = true; !isCompleted = false
      target[0].isCompleted = !target[0].isCompleted;

      // load and set latest data to localstorage
      renderBook(books);
      if (isStorageExist()) {
        const data = JSON.stringify(books);
        localStorage.setItem(STORAGE_KEY, data);
      }

      alertSuccess("Sukses", "Buku berhasil dipindahkan");
    }
  });
}

// template for book
function createBook(index, book) {
  const { id, title, author, year, isCompleted } = book;
  return `<div data-bookid="${id}" class="card-content" data-testid="bookItem">
        <h3 data-testid="bookItemTitle">${title}</h3>
        <p data-testid="bookItemAuthor">Penulis: ${author}</p>
        <p data-testid="bookItemYear">Tahun: ${year}</p>
        <div>
            <button class="${ isCompleted ? "base-button" : "success-button" }" onClick="changeStatus(${id})" data-testid="bookItemIsCompleteButton">
            ${ isCompleted ? "Belum Selesai" : "selesai" } <i class="fa-solid ${isCompleted ? 'fa-arrow-rotate-left' : 'fa-circle-check'}"></i></button>
            <button class="delete-button" data-testid="bookItemDeleteButton" onClick="deleteBook(${id})">Hapus <i class="fa-solid fa-trash-can"></i></button>
            <button class="edit-button" data-testid="bookItemEditButton" onClick="edit(${index})">Edit <i class="fa-solid fa-square-pen"></i></button>
        </div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  // get form
  const form = document.getElementById("bookForm");

  // form on submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // add book
    addBook();
  });

  if (isStorageExist) {
    loadBookformStorage();
  }
});


//Search data by title
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchBook");

  form.addEventListener("submit", function (e) {
    const title = document.getElementById("searchBookTitle").value;

    e.preventDefault();

    // get data from localstorage
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

    // filter data by name
    const filteredData = data.filter((book) => {
      const bookTitle = book.title.toLowerCase();
      const searchKeyword = title.toLowerCase();

      return bookTitle.includes(searchKeyword);
    });

    renderBook(filteredData);
  });
});

// edit book
function edit(index) {

  const data = books[index];
  const { id, title, author, year, isCompleted } = data;

  // set data value to form
  document.getElementById("bookFormUpdateId").value = id;
  document.getElementById("bookFormUpdateTitle").value = title;
  document.getElementById("bookFormUpdateAuthor").value = author;
  document.getElementById("bookFormUpdateYear").value = parseInt(year);
  document.getElementById("bookFormUpdateIsComplete").checked = isCompleted;

  // open modal
  document.dispatchEvent(new Event(OPEN_MODAL));
}

// do update
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookFormUpdate");

  // form on submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("bookFormUpdateId").value;
    const title = document.getElementById("bookFormUpdateTitle").value;
    const author = document.getElementById("bookFormUpdateAuthor").value;
    const year = document.getElementById("bookFormUpdateYear").value;
    const isCompleted = document.getElementById("bookFormUpdateIsComplete").checked;

    const target = findBookById(id);

    // set data according form value
    target[0].id = id;
    target[0].title = title;
    target[0].author = author;
    target[0].year = parseInt(year);
    target[0].isCompleted = isCompleted;

    // load and set latest data to localstorage
    renderBook(books);
    if (isStorageExist()) {
      const data = JSON.stringify(books);
      localStorage.setItem(STORAGE_KEY, data);
    }

    alertSuccess("Sukses", "Berhasil memperbarui buku!");
    document.dispatchEvent(new Event(CLOSE_MODAL));
  });
});

// ======= Modal Function =====
document.addEventListener(OPEN_MODAL, function () {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
});

document.addEventListener(CLOSE_MODAL, function () {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
});

function closeModal() {
  document.dispatchEvent(new Event(CLOSE_MODAL));
}

// ===== alert function ====
function alertSuccess(title, text) {
  return Swal.fire({
    title: title,
    text: text,
    icon: "success",
  });
}

function alertFailed(title, text) {
  return Swal.fire({
    title: title,
    text: text,
    icon: "error",
  });
}

// show data and create template
function renderBook(data) {
  // get book shelf
  const incomplete = document.getElementById("incompleteBookList");
  const completed = document.getElementById("completeBookList");

  incomplete.innerHTML = "";
  completed.innerHTML = "";

  let listCompleted = "";
  let listInCompleted = "";

  for (const [index, book] of data.entries()) {

    const bookElement = createBook(index, book);

    // check book statuses & sort by status
    if (book.isCompleted) {
      listCompleted += bookElement;
    } else {
      listInCompleted += bookElement;
    }
  }

  // set completed books
  if (listCompleted === "") {
    completed.innerHTML = "<p>Tidak Ada Buku...</p>";
  } else {
    completed.innerHTML = listCompleted;
  }

  // set incompleted books
  if (listInCompleted === "") {
    incomplete.innerHTML = "<p>Tidak Ada Buku...</p>";
  } else {
    incomplete.innerHTML = listInCompleted;
  }
}
