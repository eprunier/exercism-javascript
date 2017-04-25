const Gigasecond = function (date) {
	this.value = date;
};

const msToAdd = Math.pow(10, 9) * 1000;

Gigasecond.prototype.date = function () {
	const time = this.value.getTime();
	return new Date(time + msToAdd);
};

module.exports = Gigasecond;
