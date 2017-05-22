var Memory = require('./../js/memory.js').memoryModule;

var memory = new Memory

$(document).ready(function() {
  $(".card").each(function() {
    var card = memory.deck.pop()
    $(this).append("<img class='card-back' src='img/back-of-card.jpg'>")
    $(this).append("<img class='card-front' id='" + card + "' src='img/" + card + ".png'>")
  });
  $(".card").click(function() {
    $('.card').each(function() {
      var card = $(this).find(".card-front").attr("id");
      if (memory.unmatchedCards.includes(card)) {
        $(this).find(".card-back").show();
        $(this).find(".card-front").hide();
      }
      if (!memory.unmatchedCards.includes(card)) {
        $(this).find(".card-back").hide();
        $(this).find(".card-front").show();
      }
    });

    $(this).find(".card-back").hide();
    $(this).find(".card-front").show();

    var card = $(this).find(".card-front").attr("id");
    memory.buildPair(card)
    if (memory.isMatch(memory.pair) === true) {
      var index = memory.unmatchedCards.indexOf(card);
      if (index > -1) {
        memory.unmatchedCards.splice(index, 1);
      };
    };

  });
});
