
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
    if (book.featured) {
      $("#bookDiv").append(`
        <div class="product">
          <h4>${book.desc}</h4>
          <span id="p${book.id}">Buy Now!</span>
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
