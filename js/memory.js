var shuffle = require("knuth-shuffle").knuthShuffle


function Memory() {
  this.unmatchedCards = ["JS", "QS", "KS", "JH", "QH", "KH"]
  this.pair = []
  this.deck = shuffle(["JS", "QS", "KS", "JH", "QH", "KH", "JS", "QS", "KS", "JH", "QH", "KH"])
}

Memory.prototype.matchedCards = function () {

};

Memory.prototype.buildPair = function(card) {
  if (this.pair.length === 2) {
    this.pair = []
    this.pair.push(card)
  } else {
    this.pair.push(card)
  };
};

Memory.prototype.isMatch = function (pair) {
  if (pair[0] === pair[1]) {
    return true;
  } else {
    return false;
  };
};


exports.memoryModule = Memory;
