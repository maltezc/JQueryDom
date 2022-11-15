"use strict";

// When the form has is submitted, capture the values for each of the inputs
// and append them do the DOM along with a button to remove each title and
// rating from the DOM.

$('form').on('submit', function (evt) {
  evt.preventDefault();

  const $form = $(evt.target);
  const title = $form.find('#title').val();

  if (title.trim().length < 2) {
    alert("title needs to be at least 2 characters long.");
    $form[0].reset();
    return;
  }

  const rating = $form.find('#rating').val();
  $('#my-movies').append(`<li>${title} (${rating}) <button>remove</button></li>`);
  console.log(title, rating);
});

// DECOMPOSE FUNCTIONS GOING FORWARD
// function addMovie(movie, rating){}

// function deleteMovie(){}
// function displayMovie(){}


$('#my-movies').on('click', "button", function (evt) {
  $(evt.target).parent().remove();
});