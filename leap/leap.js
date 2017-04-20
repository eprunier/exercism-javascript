//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
	this.year = input;
};

Year.prototype.isDivisibleBy = function (divider) {
	return this.year % divider === 0;
};

Year.prototype.isLeap = function() {
	return this.isDivisibleBy(4) && !this.isDivisibleBy(100) || this.isDivisibleBy(400);
};

module.exports = Year;
