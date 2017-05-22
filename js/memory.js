function Memory() {
  this.cards = []
}

Memory.prototype.deck = function() {
  return ["JS", "QS", "KS", "JH", "QH", "KH"]
};

Memory.prototype.card = function() {
  var card = this.deck.random
  if (usedCards.include(card)) {
    this.card()
  } else {
    this.cards.push(card)
  }
};

Memory.prototype.usedCards = function () {
  return this.cards
};

Memory.prototype.isMatch = function (card1, card2) {
  if (card1 === card2) {
    return true;
  } else {
    return false;
  }
};
