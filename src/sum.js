var sum = function (a) {
	a = a || 0;
	var x = function(b) {
		if (b === undefined) return a;
		return sum(a + b);
	};
	x.valueOf = ()=>a;
	return x;
}

module.exports = sum;