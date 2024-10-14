// import Swal from "sweetalert2";
import { loadBooks, loadFeaturedBooks } from "../app/app.js";
export var userSignedIn = false;

var cartCount = 0;

var cartItems = [];

var books = [
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 15.99,
    featured: true,
    img: 'assets/img/books/to-kill-a-mockingbird.jpg',
    imgClass: 'rectangleImg'
    
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 25.99,
    featured: true,
    img: 'assets/img/books/becoming.jpg',
    imgClass: 'rectangleImg'
  },
  {
    id: 3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 19.99,
    featured: true,
    img: 'assets/img/books/firestarter.jpg',
    imgClass: 'rectangleImg'
  },
  {
    id: 4,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 99.99,
    featured: false,
    img: 'assets/img/books/twilight-box-set.jpg',
    imgClass: 'squareImg'
  },
  {
    id: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 100,
    featured: false,
    img: 'assets/img/books/hp-box-set.jpg',
    imgClass: 'squareImg'
  },
  {
    id: 6,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 100,
    featured: false,
    img: 'assets/img/books/got-box-set.jpg',
    imgClass: 'squareImg'
  },
  {
    id: 7,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 27.99,
    featured: false,
    img: 'assets/img/books/finding me.jpg',
    imgClass: 'rectangleImg'
  },
  {
    id: 8,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 19.99,
    featured: false,
    img: 'assets/img/books/mlk-biography.jpg',
    imgClass: 'rectangleImg'
  },
  {
    id: 9,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 17.99,
    featured: false,
    img: 'assets/img/books/elenor-roosevelt-biography.jpg',
    imgClass: 'rectangleImg'
  },
  {
    id: 10,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 19.99,
    featured: false,
    img: 'assets/img/books/misery.jpg',
    imgClass: 'rectangleImg'
  },
  {
    id: 11,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 15.99,
    featured: false,
    img: 'assets/img/books/frankenstein.jpg',
    imgClass: 'rectangleImg'
  },
  {
    id: 12,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 19.99,
    featured: false,
    img: 'assets/img/books/phantoms.jpg',
    imgClass: 'rectangleImg'
  },
  {
    id: 13,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 19.99,
    featured: false,
    img: 'assets/img/books/winnie the pooh.jpg',
    imgClass: 'rectangleImg'
  },
  {
    id: 14,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 15.99,
    featured: false,
    img: 'assets/img/books/cat and the hat.jpg',
    imgClass: 'rectangleImg'
  },
  {
    id: 15,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 7.99,
    featured: false,
    img: 'assets/img/books/fun facts about space.jpg',
    imgClass: 'squareImg'
  },
];

export function getBooks() {
  return books;
}

export function signIn() {
  userSignedIn = true;
  return userSignedIn;
}

export function signOut() {
  userSignedIn = false;
  return userSignedIn;
}

export function addToCart() {
  $(".signInOut .count").html(++cartCount);
  let books = getBooks();
  let selectedBook = books.find(book => book.id === bookId);

if (selectedBook) {
  cartItems.push(selectedBook);
  updateCart();
}

}




//The blog listener function 
export function blogListener(){
  $(".blog-btn").on("click", (e) => {
    
    if(userSignedIn == false){
      e.preventDefault(); 
      
      Swal.fire({
        title: "Please sign in to read the blog.",
        showDenyButton: true,
        confirmButtonText: "Sign In",
        denyButtonText: `Cancel`
      }).then((result) => {
      
        if (result.isConfirmed) {
          
          changePage("account");
        } else if (result.isDenied) {
          
          Swal.fire("You need to sign in to access the blog.", "", "info");
        }
      });
      
    } 
    
    
    else {
     
      changePage("blog");
    }
  });
}
  




//funtion to retrieve the sign up info
function validateSignupForm() {

  $("#signup").on("click", (e) => {
    e.preventDefault(); // Prevent form submission or page reload

    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var email = $('#email').val();
    var password = $('#password').val();

    // Check if any fields are empty
    if (firstname === "" || lastname === "" || email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No empty fields are required",
      });
    } 
    // Validate email format
    else if (!validateEmailFormat(email)) {
      Swal.fire("Email is invalid");
    } 
    
 else {

        // Store user data in localStorage
  localStorage.setItem('userFirstname', firstname);
  localStorage.setItem('userLastname', lastname);
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);

      Swal.fire({
        title: "Confirmation",
        text: "Thank you for signing up",
        icon: "success"  
      });
    }
  });

  console.log(firstname, lastname, email, password);

}


//function to validate the email
function validateEmailFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


//Function to validate login
function validateLoginForm() {
  $("#login").on("click", (e) => {
    e.preventDefault(); // Prevent form submission or page reload

    var email = $('#logemail').val();
    var password = $('#logpassword').val();

    // Check if email or password fields are empty
    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email and password cannot be empty.",
      });
      return; 
    }

    // Retrieve stored user data from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Check if stored data exists
    if (!storedEmail || !storedPassword) {
      Swal.fire({
        icon: "error",
        title: "No account found",
        text: "Please sign up before logging in.",
      });
      return; 
    }

    // Compare entered email and password with stored values
    if (email === storedEmail && password === storedPassword) {
      signIn(); // Update the sign-in status
      Swal.fire({
        title: "Welcome!",
        text: "You have successfully logged in.",
        icon: "success",
      });
      changePage("blog"); // Redirect to the blog
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Incorrect email or password.",
      });
    }
  });
}





export function changePage(pageName) {
 
  if (pageName == "") {
    // $("#app").html(`<h1>home</h1>`);
    $.get("pages/home.html", (data) => {
      $("#app").html(data);
    }).fail((error) => {
      console.log("error", error);
      Swal.fire({
        title: "Error: Page Not Found",
        text: "Please find a new page",
        icon: "error",
        timer: 2500,
      });
    });
  } else {
    // $("#app").html(`<h1>${pageName}</h1>`);
    $.get(`pages/${pageName}.html`, (data) => {
      $("#app").html(data);

      if (pageName == "books") {
        loadBooks();
      } else if (pageName == "home") {
        loadFeaturedBooks();
      }

//if statement for the blog

if (pageName === "blog") {

   
    blogListener();

}

    //if statement for  acount
    if(pageName === "account") {
        
     validateSignupForm();
     validateLoginForm();
  
  }

    }).fail((error) => {
      pageName = "";
    });
  }
}
