var expect = require('chai').expect,
    Bus = require('../src/events.js');


describe('events', () => {
    var bus,
        triggers;

    beforeEach(() => {
        bus = Object.create(Bus);
        triggers = [];
    });

    it('calls handlers in order', () => {
        bus.on('test', () => { triggers.push(1) });
        bus.on('test', () => { triggers.push(2) });

        bus.fire('test');

        expect(triggers).to.deep.equal([1,2]);
    });
    it('applies arguments correctly', function() {
        bus.on('test', e => { triggers = e })
        bus.fire('test', 1);
        expect(triggers).to.equal(1);
    });
    it('lets detach a handler', () => {
        triggers = [];
        function cb() { triggers.push(2) };
        bus.on('test', () => { triggers.push(1) });
        bus.on('test', cb);
        bus.on('test', () => { triggers.push(3) });
        bus.off('test', cb);

        bus.fire('test');

        expect(triggers).to.deep.equal([1,3]);
    });
    it('lets detach all handlers for event', () => {
        bus.on('test', () => { triggers.push(1) });
        bus.off('test');

        bus.fire('test');

        expect(triggers).to.be.empty;
    });
    it('lets detach all events completely', function() {
        bus.on('test', () => { triggers.push(1) });
        bus.off();

        bus.fire('test');

        expect(triggers).to.be.empty;
    });
});
