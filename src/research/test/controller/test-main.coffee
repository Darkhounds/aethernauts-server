expect = require('chai').expect

describe 'Research Module', ->
    foo         = require("../../script/foo.js")
    it 'Should have foo declared', -> expect(foo).exist;
    #
    javabeens   = require("../../script/javabeens.coffee")
    it 'Should have javabeens declared', -> expect(javabeens).exist;
    #
    # This is only being used as a false positive to test fail messages during unit tests
    # it 'Should fail', -> expect(false).to.equal(true);
#