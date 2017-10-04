var stringHash = require('string-hash');
var assert = require('assert');

describe('string-hash', function() {
    it('should return different value for different string', function() {
        assert.notEqual(stringHash('abc'), stringHash('hij'));
    });

    it('should work even if the string is very long', function() {
        var longstr = '';
        for(var i = 0; i < 10 * 1000; i++) {
            longstr += "Hello World.";
        };
        var hash = stringHash(longstr);
        assert.notEqual(hash, Infinity);
        assert.notEqual(hash, 0);
    });

    it('should return different value for different long string', function() {
        var longstr = '';
        for(var i = 0; i < 10 * 1000; i++) {
            longstr += "Hello World.";
        };
        var hash1 = stringHash(longstr);
        var hash2 = stringHash(longstr.substring(0, longstr.length - 1) + 'x');
        assert.notEqual(hash1, hash2);
    });
});
