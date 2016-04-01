// on(name, cb)
// off(name, cb) off(name) off()
// fire(name, args)

var Events = {

	hasEvent: function (name) {
		return this.eventsMap.hasOwnProperty(name);
	},

	on: function (name, cb) {
		this.eventsMap = this.eventsMap || {};
		var cbs = this.eventsMap[name] || [];
		cbs.push(cb);
		this.eventsMap[name] = cbs;
	},

	off: function (name, cb) {
		this.eventsMap = this.eventsMap || {};
		if (name === undefined) this.eventsMap = {};
		else {
			if (!this.hasEvent(name)) return;
			if (cb === undefined) {
				this.eventsMap[name] = [];
			} else {
				var index = this.eventsMap[name].indexOf(cb);
				this.eventsMap[name].splice(index, 1);
			}
		}
	},

	fire: function (name, value) {
		this.eventsMap = this.eventsMap || {};
		if (!this.hasEvent(name)) return;
		var cbs = this.eventsMap[name];
		cbs.forEach((cb)=>{cb(value)});
	}

}

module.exports = Events;