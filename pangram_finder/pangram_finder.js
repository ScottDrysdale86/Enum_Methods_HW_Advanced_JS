const PangramFinder = function (phrase) {
	this.alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
	this.phrase = phrase
		.toLowerCase()
		.replace(/[^a-z]/g, "")
		.split("");
	this.symbols = " !_;:?".split("");
};

PangramFinder.prototype.isPangram = function () {
	const sortedPhrase = this.phrase.sort();
	const uniqPhrase = [...new Set(sortedPhrase)];
	const sortedAz = this.alphabet.sort();

	let isEqual =
		uniqPhrase.length === sortedAz.length &&
		uniqPhrase.every((letter, ind) => letter === sortedAz[ind]);

	return isEqual;
};

module.exports = PangramFinder;
