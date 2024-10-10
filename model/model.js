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
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 25.99,
    featured: true,
  },
  {
    id: 3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 19.99,
    featured: true,
  },
  {
    id: 4,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 99.99,
    featured: false,
  },
  {
    id: 5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 100,
    featured: false,
  },
  {
    id: 6,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 100,
    featured: false,
  },
  {
    id: 7,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 27.99,
    featured: false,
  },
  {
    id: 8,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 19.99,
    featured: false,
  },
  {
    id: 9,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 17.99,
    featured: false,
  },
  {
    id: 10,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 19.99,
    featured: false,
  },
  {
    id: 11,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 15.99,
    featured: false,
  },
  {
    id: 12,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 19.99,
    featured: false,
  },
  {
    id: 13,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 19.99,
    featured: false,
  },
  {
    id: 14,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 15.99,
    featured: false,
  },
  {
    id: 15,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: 7.99,
    featured: false,
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
}

export function changePage(pageName) {
  console.log("pageName:", pageName); //THIS NEEDS COMMENTED OUT
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
    }).fail((error) => {
      pageName = "";
    });
  }
}
