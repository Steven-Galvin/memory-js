var shuffle = require("knuth-shuffle").knuthShuffle


function Memory() {
  this.cards = []
  this.pair = []
  this.deck = shuffle(["JS", "QS", "KS", "JH", "QH", "KH", "JS", "QS", "KS", "JH", "QH", "KH"])
}

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


exports.memoryModule = Memory;
