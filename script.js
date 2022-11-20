(function (){

    "use strict"

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

    const newBookBtn = document.querySelector("#newbook");
    const myModal = document.getElementById("myModal");
    const myForm = document.getElementById("myForm");
    const closeBtn = document.querySelector(".btnclose");

    newBookBtn.addEventListener("click",function(){
        if (myModal.style.display === "none") {
            myModal.style.display = "block";
            myForm.style.display = "block";
        }
        else {
            closeModal();
        }
    });

    closeBtn.addEventListener("click",closeModal)

    function closeModal() {
        myModal.style.display = "none";
        myForm.style.display = "none";    
    }

})()