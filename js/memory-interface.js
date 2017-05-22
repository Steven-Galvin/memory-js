$(document).ready(function() {
  $(".card").append("<img class='card-back' src='img/back-of-card.jpg'>")
  $(".card").click(function() {
    $(this).find(".card-back").toggle();
    $(this).find(".card-front").toggle();
  });
});
