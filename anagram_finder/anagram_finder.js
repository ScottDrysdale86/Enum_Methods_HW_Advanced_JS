const AnagramFinder = function (word) {
	this.word = word;
	this.sortedWord = word.toLowerCase().split("").sort().join("");
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
	let result = [];
	otherWords.forEach((word) => {
		if (
			this.word !== word &&
			word.toLowerCase().split("").sort().join("") === this.sortedWord
		) {
			result.push(word);
		}
	});
	return result;
};

module.exports = AnagramFinder;
