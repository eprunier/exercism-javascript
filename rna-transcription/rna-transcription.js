const DnaTranscriber = function () {};

const convTable = {
	"G": "C",
	"C": "G",
	"T": "A",
	"A": "U"
};

DnaTranscriber.prototype.toRna = function (dna) {
	return Array
		.from(dna)
		.map(nucleotide => {
			const rnaNucleotide = convTable[nucleotide];
			if (rnaNucleotide) {
				return rnaNucleotide;
			} else {
				throw new Error('Invalid input');
			}
		}).join('');
};

module.exports = DnaTranscriber;