"use strict";

// When the form has is submitted, capture the values for each of the inputs
// and append them do the DOM along with a button to remove each title and
// rating from the DOM.

$("form").on("submit", function (evt) {
  evt.preventDefault();

  const $form = $(evt.target);
  const title = $form.find("#title").val();
  const rating = $form.find("#rating").val();

  if (title.trim().length < 2) {
    alert("title needs to be at least 2 characters long.");
    clearForm();
    return;
  }

  addMovie(title, rating);
});

// DECOMPOSE FUNCTIONS GOING FORWARD

function addMovie(movie, rating) {
  $("#my-movies").append(
    `<li>${movie} (${rating}) <button>remove</button></li>`
  );
  clearForm();
}

function clearForm() {
  const $form = $("form");
  $form[0].reset();
}

function deleteMovie(evt) {
  $(evt.target).parent().remove();
}

//todo:
$("#sortButton").on("click", sortMovies);

function sortMovies() {
  const $listItem = $("#my-movies").children();
  console.log($listItem);
}

// looks for button inside the ul
$("#my-movies").on("click", "button", deleteMovie);
