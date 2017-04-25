const BeerSong = function () {};

BeerSong.prototype.verse = function (nVerse) {
	const before = `${nVerse > 0 ? nVerse : 'No more'} bottle${nVerse === 1 ? '' : 's'} of beer on the wall, ${nVerse > 0 ? nVerse : 'no more'} bottle${nVerse === 1 ? '' : 's'} of beer.`;

	let action = '';
	if (nVerse === 1) {
		action = 'Take it down and pass it around';
	} else if (nVerse === 0) {
		action = 'Go to the store and buy some more';
	} else {
		action = 'Take one down and pass it around';
	}
	
	let after = '';
	if (nVerse === 1) {
		after = 'no more bottles of beer on the wall.';
	} else {
		after = `${nVerse > 0 ? nVerse - 1 : 99} bottle${nVerse - 1 === 1 ? '' : 's'} of beer on the wall.`;
	}

	return `${before}\n${action}, ${after}\n`;
};

BeerSong.prototype.sing = function (start, end = 0) {
	let song = '';

	for (let i = start; i >= end; i--) {
		song += song ? '\n' : '';
		song += this.verse(i);
	}

	return song;
};

module.exports = BeerSong;