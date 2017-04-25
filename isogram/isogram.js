const Isogram = function (input) {
	this.value = input.toLowerCase();
};

const notRemovable = /[-\s]/;

Isogram.prototype.isIsogram = function () {
	const chars = Array
		.from(this.value)
		.reduce((acc, char) => {
			if (acc.indexOf(char) === -1 || notRemovable.test(char)) {
				return acc + char;
			} else {
				return acc
			}
		});

	return chars === this.value;
};

module.exports = Isogram;