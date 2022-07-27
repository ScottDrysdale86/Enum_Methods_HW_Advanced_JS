const UpperCaser = function (words) {
	this.words = words;
};

UpperCaser.prototype.toUpperCase = function () {
	return this.words.map((words) => words.toUpperCase());
};

module.exports = UpperCaser;
