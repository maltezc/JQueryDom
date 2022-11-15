"use strict";

// When the form has is submitted, capture the values for each of the inputs
// and append them do the DOM along with a button to remove each title and
// rating from the DOM.

$('form').on('submit', function (evt) {
  evt.preventDefault();

  const $form = $(evt.target);
  const title = $form.find('#title').val();
  const rating = $form.find('#rating').val();

  if (title.trim().length < 2) {
    alert("title needs to be at least 2 characters long.");
    $form[0].reset();
    return;
  }

  addMovie(title, rating);
});

// DECOMPOSE FUNCTIONS GOING FORWARD

function addMovie(movie, rating) {
  $('#my-movies').append(`<li>${movie} (${rating}) <button>remove</button></li>`);
}

function deleteMovie(evt) {
  $(evt.target).parent().remove();
}

$('#my-movies').on('click', "button", deleteMovie);


