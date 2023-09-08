//using function as a constructor

function Player(name, marker) {
    //attribute
    this.name = name
    this.marker = marker

    //method
    this.sayName = function() {
        console.log(name)
    }
}

const firstPlayer = new Player('Hiep','XXX');

function Book(title,author,pages,read)  {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        let temp =''
        if(read) {
            temp = 'already read'
        } else {
            temp ='not read yet'
        }
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${temp}`)
    }
}

const theHobbit = new Book('The Hobbit','J.R.R Tolkien', 295, false);
console.log(theHobbit.info())

// ------------------------------------------------------------------

// All objects in JavaScript have a prototype

console.log(Object.getPrototypeOf(theHobbit)===Book.prototype) //true

//prototype of an object or constructor is just another empty object
//so any new properties defined on Book.prototype will be inherited by Book
//but not Book's own props

//define object props on a centralized object like protoype can save memory


//adding method to a prototype of a constructor
Book.prototype.getTitle = function() {
    return this.title;
}

console.log(theHobbit.getTitle()); //'The Hobbit'

//every defined object prototype inherit from Object.prototype

