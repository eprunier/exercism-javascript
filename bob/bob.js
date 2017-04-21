const Bob = function () {};

Bob.prototype.hey = function (input) {
	if (!input.trim()) {
		return 'Fine. Be that way!';
	} else if (input.toUpperCase() === input && input.toLowerCase() !== input) {
		return 'Whoa, chill out!';
	} else if (input.endsWith('?')) {
		return 'Sure.';
	} else {
		return 'Whatever.';
	}
};

module.exports = Bob;