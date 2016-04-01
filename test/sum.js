var expect = require('chai').expect,
    sum = require('../src/sum.js');


describe('addition', () => {
    it('returns it’s value', () => {
        expect(+sum(1)).to.equal(1);
    });

    it('sums passed values', () => {
        expect(+sum(1)(2)(3)).to.equal(6);
        expect(+sum(1)(sum(2))).to.equal(3);
    });

    it('doesn’t break when empty', () => {
        expect(+sum()).to.equal(0);
    });
});
