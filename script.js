(function (){

    "use strict"

    const newBookBtn = document.querySelector("#newbook");
    const myModal = document.getElementById("myModal");
    const myForm = document.getElementById("myForm");
    const closeBtn = document.querySelector(".btnclose");
    const addBtn = document.querySelector(".btn");
    const formInputs = document.querySelectorAll("input");
    const library = document.getElementById("library");

    let myLibrary = [
        
    ];

    class Book{
        constructor(
            title = "Unknown",
            author = "Unknown",
            pages = 0,
            haveRead = false
        ) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.haveRead = haveRead;
        }
    }

    function addBookToLibrary(newBook) {
        const book = [newBook.title, newBook.author, newBook.pages, newBook.haveRead];
        myLibrary.push(book);
    }

    function clearForm() {
        for (const formInput of formInputs) {
            formInput.value = "";
        }
    }

    function toggleModal() {
        if (myModal.style.display === "none" || myModal.style.display === "") {
            myModal.style.display = "block";
            myForm.style.display = "block";
        }
        else {
            clearForm();
            myModal.style.display = "none";
            myForm.style.display = "none";    
        }       
    }

    function createBookFromForm (e) {
        e.preventDefault();
        const inputArray = Array.from(formInputs);
        let resultArr = inputArray.reduce((acc,input) => ({...acc,[input.name]: input.value}),{})
        resultArr.read = inputArray[(inputArray.length-2)].checked;
        addBookToLibrary(new Book (resultArr.title, resultArr.author, resultArr.pages, resultArr.read));
    }

    function createCard (book) {
        const boxDiv = document.createElement("div");
        boxDiv.className = "box";

        const titleDiv = document.createElement("div");
        const authorDiv = document.createElement("div");
        const pagesDiv = document.createElement("div");
        const readDiv = document.createElement("div");

        const buttonsDiv = document.createElement("div");
        const readButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        readButton.setAttribute("type","submit");
        deleteButton.setAttribute("type","submit");
        readButton.textContent = "Read?";
        deleteButton.textContent = "Delete"
        buttonsDiv.className = "buttons";

        let arr = [titleDiv, authorDiv, pagesDiv, readDiv, buttonsDiv];
        for (let each of arr) {
            boxDiv.appendChild(each);
        }

        titleDiv.textContent = book.title;
        authorDiv.textContent = `by ${book.author}`;
        pagesDiv.textContent = `${book.pages} pages`;
        (book.haveRead === true) ? readDiv.textContent = "Read" : readDiv.textContent = "Not Read";
        
        buttonsDiv.appendChild(readButton);
        buttonsDiv.appendChild(deleteButton);
        library.appendChild(boxDiv);

        
    }

    newBookBtn.addEventListener("click",toggleModal);
    closeBtn.addEventListener("click",toggleModal);
    addBtn.addEventListener("click", createBookFromForm);
    createCard(new Book ("Harry", "J.K", 500, true));
    
})()