const chars = 'abcdefghijklmnopqrstuvwxyz';

const Pangram = function (input) {
	this.text = input.toLowerCase();
};

Pangram.prototype.isPangram = function () {
	if (this.text) {
		const missingChars = Array.from(chars).filter(char => this.text.indexOf(char) == -1);
		return missingChars.length === 0;
	} else {
		return false;
	}
};

module.exports = Pangram;