/**
 * File to test unittests
 */

"use strict";

const assert = require('assert');
const Test = require('../../src/test/test');

describe("Check return value", function() {
    it("Return type is string", function() {
        let test = new Test();
        let res = typeof test.test();

        assert.equal(res, "string");
    });

    it("Return value is 'This is my test'", function() {
        let test = new Test();
        let res = test.test();

        assert.equal(res, "This is my test");
    });
});
