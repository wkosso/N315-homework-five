
import { changePage, getBooks} from "../model/model.js";

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
  $("#bookDiv").html("");
  $.each(books, function (index, book) {
    if (!book.featured) {
      $("#bookDiv").append(`
        <div class="book">
          <div class="bookImg">
            <img class="${book.imgClass}" src="${book.img}" alt="${book.desc}"> 
          </div>
          <div class="bookText">
              <h4>${book.desc}</h4>
              
              <p>$${book.price}</p>
             <span id="p${book.id}">ADD TO CART</span>
          </div>
        </div>
      `);
    }
  });
}
export function loadFeaturedBooks() {
  let books = getBooks();
  $("#bookDiv").html("");
  $.each(books, function (index, book) {
    if (book.featured) {
      $("#bookDiv").append(`
        <div class="book">
        <div class="bookImg">
         <img class="${book.imgClass}" src="${book.img}" alt="${book.desc}"> 
        </div>
          <h4>${book.desc}</h4>
          <span id="p${book.id}">ADD TO CART</span>
          <p>$${book.price}</p>
        </div>
      `);
    }
  });
}

function initListeners() {}

$(document).ready(function () {
  initSite();
  initListeners();

}); 
