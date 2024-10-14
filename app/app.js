
import { changePage, getBooks, addToCart} from "../model/model.js";

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
  let categories = ['Booksets', 'Black History Books', 'Horror Books', 'Childrens Books']
  $("#bookDiv").html("");


  $.each(books, function (index, book) {
    if (index % 3 == 0 && index !== 0) {
      let category = Math.floor(index/3) % categories.length;
      $('bookDiv').append(`<h3>${categories[category]}</h3>`)
    }
    if (!book.featured) {
      $("#bookDiv").append(`
        <div class="book">
          <div class="bookImg">
            <img class="${book.imgClass}" src="${book.img}" alt="${book.desc}"> 
          </div>
          <div class="bookText">
              <h4>${book.desc}</h4>
              
              <p>$${book.price}</p>
             <span class='cartButton' id="p${book.id}">ADD TO CART</span>
          </div>
        </div>
      `);
    }
  });

  $(".add-to-cart").on("click", function () {
    let bookId = $(this).data("id"); 
    console.log(bookId);
    addToCart(bookId); 
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
          <span class='cartButton' data-id="p${book.id}">ADD TO CART</span>
        </div>
      `);
    }
  });

  $(".add-to-cart").on("click", function () {
    let bookId = $(this).data("id"); 
    addToCart(bookId);
  });

}


export function updateCart() {
  $("#cartDiv").html("");

  $.each(cartItems, function (index, book) {
    $("#cartDiv").append(
      `
      
      `
    )
  })
}



function initListeners() {}

$(document).ready(function () {
  initSite();
  initListeners();

}); 
