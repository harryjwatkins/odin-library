(function (){

    "use strict"

    const newBookBtn = document.querySelector("#newbook");
    const myModal = document.getElementById("myModal");
    const myForm = document.getElementById("myForm");
    const closeBtn = document.querySelector(".btnclose");
    const addBtn = document.querySelector(".btn");
    const formInputs = document.querySelectorAll("input");
    const library = document.getElementById("library");
    let readBtn = document.querySelectorAll("button.delbtn")
    
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
            clearForm();
            myModal.style.display = "block";
            myForm.style.display = "block";
        }
        else {
            clearForm();
            myModal.style.display = "none";
            myForm.style.display = "none";    
        }       
    }

    function createBookFromForm (evt) {
        const inputArray = Array.from(formInputs);
        let resultArr = inputArray.reduce((acc,input) => ({...acc,[input.name]: input.value}),{})
        resultArr.read = inputArray[(inputArray.length-2)].checked;
        const newBook = new Book (resultArr.title, resultArr.author, resultArr.pages, resultArr.read);
        addBookToLibrary(newBook);
        createCard(newBook);
        clearForm();
        evt.preventDefault();
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
        deleteButton.setAttribute("class","delbtn")
        deleteButton.textContent = "Delete"
        buttonsDiv.className = "buttons";

        let arr = [titleDiv, authorDiv, pagesDiv, readDiv, buttonsDiv];
        for (let each of arr) {
            boxDiv.appendChild(each);

        }

        titleDiv.textContent = book.title;
        authorDiv.textContent = `by ${book.author}`;
        pagesDiv.textContent = `${book.pages} pages`;
        (book.haveRead === true) ? readButton.textContent = "Not Read?" : readButton.textContent = "Read?";
        (book.haveRead === true) ? readDiv.textContent = "Read" : readDiv.textContent = "Not Read";
        
        buttonsDiv.appendChild(readButton);
        buttonsDiv.appendChild(deleteButton);
        library.appendChild(boxDiv);

        // Delete Book
        deleteButton.addEventListener("click",function(){
            library.removeChild(boxDiv);

            for (let i=0; i<myLibrary.length; i++) {
                if (myLibrary[i][0] === book.title && myLibrary[i][1] === book.author 
                    && myLibrary[i][2] === book.pages && myLibrary[i][3] === book.haveRead){
                        myLibrary.splice(i,1);
                    }
            }
        });

        // Change read status
        readButton.addEventListener("click", function() {
            if (book.haveRead === true) {
                book.haveRead = false;
                readButton.textContent = "Read?";
                readDiv.textContent = "Not Read"
            } else if (book.haveRead === false) {
                book.haveRead = true;
                readButton.textContent = "Not Read?";
                readDiv.textContent = "Read"
            }
        });
 
    }

    newBookBtn.addEventListener("click",toggleModal);
    closeBtn.addEventListener("click",toggleModal);
    myForm.addEventListener("submit", createBookFromForm);

})()