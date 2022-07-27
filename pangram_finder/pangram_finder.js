const PangramFinder = function (phrase) {
	// this.alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
	// this.phrase = phrase
	// 	.toLowerCase()
	// 	.replace(/[^a-z]/g, "")
	// 	.split("");
	// this.symbols = " !_;:?".split("");

	this.alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
	this.phrase = phrase;
};

PangramFinder.prototype.isPangram = function () {
	// const sortedPhrase = this.phrase.sort();
	// const uniqPhrase = [...new Set(sortedPhrase)];
	// const sortedAz = this.alphabet.sort();

	// let isEqual =
	// 	uniqPhrase.length === sortedAz.length &&
	// 	uniqPhrase.every((letter, ind) => letter === sortedAz[ind]);

	// return isEqual;

	let phraseLower = this.phrase.toLowerCase();

	return this.alphabet.every((letter) => {
		if (!phraseLower.includes(letter)) {
			return false;
		}
		return true;
	});
};

module.exports = PangramFinder;
