(function (){

    "use strict"

    const newBookBtn = document.querySelector("#newbook");
    const myModal = document.getElementById("myModal");
    const myForm = document.getElementById("myForm");
    const closeBtn = document.querySelector(".btnclose");

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

    function toggleModal() {
        if (myModal.style.display === "none" || myModal.style.display === "") {
            myModal.style.display = "block";
            myForm.style.display = "block";
        }
        else {
            myModal.style.display = "none";
            myForm.style.display = "none";    
        }       
    }

    newBookBtn.addEventListener("click",toggleModal)
    closeBtn.addEventListener("click",toggleModal)



})()