const IsogramFinder = function (word) {
	this.word = word.split("");
};

IsogramFinder.prototype.isIsogram = function () {
	const uniqueWord = [...new Set(this.word)];
	return this.word.length === uniqueWord.length;
};

module.exports = IsogramFinder;
