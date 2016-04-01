Function.prototype.instance = function (args) {
	var x = Object.create(this.prototype);
	var result = this.apply(x, args);
	if (typeof result == "object") return result;
	else return x;
}