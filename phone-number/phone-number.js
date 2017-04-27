const cleaner = /[^\d]/g;
const selector = /(\d{3})(\d{3})(\d{4})/;

const PhoneNumber = function (input) {
	const cleanedNumber = input.replace(cleaner, '');
	const numberLength = cleanedNumber.length;
	
	if (numberLength === 10) { 
		this.value = cleanedNumber;
	} else if (numberLength === 11 && cleanedNumber.startsWith('1')) {
		this.value = cleanedNumber.substr(1);
	} else {
		this.value = '0000000000';
	}
};

PhoneNumber.prototype.number = function () {
	return this.value;
};

PhoneNumber.prototype.areaCode = function () {
	return this.value.substr(0, 3);
};

PhoneNumber.prototype.toString = function () {
	return this.value.replace(selector, '($1) $2-$3');
};

module.exports = PhoneNumber;