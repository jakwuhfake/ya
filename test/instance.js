require('../src/instance.js');
var assert = require('chai').assert;

describe('istance', () => {
    it('creates a constructor’s instance', () => {
        function Foo() {}

        assert.instanceOf(Foo.instance(), Foo);
    });

    it('applies passed arguments correctly', () => {
        function Foo(a, b, c, d) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
        }
        var obj = Foo.instance([1,2,3]);

        assert.equal(obj.b, 2);
        assert.isUndefined(obj.d);
    });
    it('passes constructor call check', () => {
        function Foo(a, b, c, d) {
            if (!(this instanceof Foo)) {
                return new Foo(a, b, c, d);
            }

            // ...
        };

        assert.instanceOf(Foo.instance(), Foo);
    });
});
