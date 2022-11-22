(function (){

    "use strict"

    const newBookBtn = document.querySelector("#newbook");
    const myModal = document.getElementById("myModal");
    const myForm = document.getElementById("myForm");
    const closeBtn = document.querySelector(".btnclose");
    const addBtn = document.querySelector(".btn");
    const formInputs = document.querySelectorAll("input");

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

    newBookBtn.addEventListener("click",toggleModal);
    closeBtn.addEventListener("click",toggleModal);
    addBtn.addEventListener("click", createBookFromForm);
    
})()