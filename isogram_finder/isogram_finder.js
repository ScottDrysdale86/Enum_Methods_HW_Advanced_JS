const IsogramFinder = function (word) {
	// this.word = word.split("");
	this.word = word;
};

IsogramFinder.prototype.isIsogram = function () {
	// const uniqueWord = [...new Set(this.word)];
	// return this.word.length === uniqueWord.length;
	return this.word
		.split("")
		.every((letter, ind) => this.word.indexOf(letter) == ind);
};

module.exports = IsogramFinder;
