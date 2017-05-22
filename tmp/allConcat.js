var Memory = require('./../js/memory.js').memoryModule;

var memory = new Memory

$(document).ready(function() {
  $(".card").each(function() {
    var card = memory.deck.pop()
    $(this).append("<img class='card-back' src='img/back-of-card.jpg'>")
    $(this).append("<img class='card-front' id='" + card + "' src='img/" + card + ".png'>")
  });
  $(".card").click(function() {
    $(this).find(".card-back").toggle();
    $(this).find(".card-front").toggle();
    var card = $(this).find(".card-front").attr("id");
    console.log(card)
  });
});
