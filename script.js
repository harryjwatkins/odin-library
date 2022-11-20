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
    const myForm = document.getElementById("myForm");

    newBookBtn.addEventListener("click",function(){
        if (myForm.style.display === "none") {
            myForm.style.display = "block";
        }
        else {
            myForm.style.display = "none";
        }
            
    });

    
    

})()