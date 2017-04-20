let Hamming = function () {};

Hamming.prototype.compute = function (strand1, strand2) {
	if (strand1.length !== strand2.length) {
		throw new Error('DNA strands must be of equal length.');
	}

	return Array
		.from(strand1)
		.filter((nucleid, index) => nucleid !== strand2[index])
		.length;
};

module.exports = Hamming;