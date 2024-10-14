
import { changePage, getBooks} from "../model/model.js";

var cartItems = [];


function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  changePage(pageID);
}

function initSite() {
  $(window).on("hashchange", route);
  route(); 
}

export function loadBooks() {
  let books = getBooks();
  // let categories = ['Booksets', 'Black History Books', 'Horror Books', 'Childrens Books']
  $("#bookDiv").html("");


  $.each(books, function (index, book) {
    // if (index % 3 == 0 && index !== 0) {
    //   // let category = Math.floor(index/3) % categories.length;
    //   // $('bookDiv').append(`<h3>${categories[category]}</h3>`)
    // }
    if (!book.featured) {
      $("#bookDiv").append(`
        <div class="book">
          <div class="bookImg">
            <img class="${book.imgClass}" src="${book.img}" alt="${book.desc}"> 
          </div>
          <div class="bookText">
              <h4>${book.desc}</h4>
              
              <p>$${book.price}</p>
             <span class='cartButton' data-id="${book.id}">ADD TO CART</span>
          </div>
        </div>
      `);
    }
  });

  $(document).on("click", ".cartButton", function () {
    let bookId = $(this).attr("data-id");
    
    if (bookId) {
      // console.log("Clicked on book with ID: " + bookId);
      addToCart(bookId);
    } else {
      console.error("No bookId found for this span.");
    }
  });
}



export function loadFeaturedBooks() {
  let books = getBooks();
  $("#bookDiv").html("");
  $.each(books, function (index, book) {
    if (book.featured) {
      $("#bookDiv").append(`
        <div class="featuredBook">
        <div class="bookImg">
         <img class="${book.imgClass}" src="${book.img}" alt="${book.desc}"> 
        </div>
          <h4>${book.desc}</h4>
          <p>$${book.price}</p>
          <span class='cartButton' data-id="${book.id}">ADD TO CART</span>
        </div>
      `);
    }
  });

  $(".add-to-cart").on("click", function () {
    let bookId = $(this).data("id"); 
    addToCart(bookId);
  });

}


export function addToCart(bookId) {
  let books = getBooks();
  let selectedBook = books.find(book => book.id === Number(bookId));

if (selectedBook) {
  cartItems.push(selectedBook);
  // console.log(cartItems)
  updateCart();
} else {
  console.error("Book not found with ID: " + bookId);
};

}


export function updateCart() {
  $("#cartDiv").html("");

  $.each(cartItems, function (index, book) {
    $("#cartDiv").append(
      `
       <div class="book">
          <div class="bookImg">
            <img class="${book.imgClass}" src="${book.img}" alt="${book.desc}"> 
          </div>
          <div class="bookText">
              <h4>${book.desc}</h4>
              
              <p>$${book.price}</p>
              <p>In Stock</p>
              <div class="buttons">
              <span class='updateButton' id="${book.id}">change</span>
              <span class='removeButton' id="${book.id}">remove</span>
              
              </div>
             
          </div>
        </div>
      `
    )
  })
}



function initListeners() {}

$(document).ready(function () {
  initSite();
  loadBooks();
  initListeners();
  updateCart()

}); 
