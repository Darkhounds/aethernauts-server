should      = (require 'chai').should()
#
describe 'The Abstract Model', ->
    ModelUser   = require "../src/model/user"    
    it 'Should be defined',                             -> should.exist ModelUser
    
    driver  = {}
    mUser   = new ModelUser driver
    it 'Should implement the "getDriver" method',       -> mUser.should.respondTo 'getDriver'
    it 'Should "getDriver" should return',              -> mUser.getDriver().should.be.equal driver
#    it 'Should have missing argument error declared',   -> AbstractModel.ERROR_MISSING_ARGUMENT.should.be.a 'string'
#    it 'Should have wrong argument type declared',      -> AbstractModel.ERROR_WRONG_ARGUMENT.should.be.a 'string'
#    it 'Should throw Error on first argument missing',
#        -> AbstractModel.bind(undefined).should.throw Error, AbstractModel.ERROR_MISSING_ARGUMENT
#    it 'Should throw Error on first argument not an object',
#        -> AbstractModel.bind(undefined, "test").should.throw Error, AbstractModel.ERROR_WRONG_ARGUMENT
#    
#    describe "As an instance", ->
#        driver  = {}
#        aModel  = new AbstractModel driver
#        it 'Should implement the setDriver method',                 -> aModel.should.respondTo "getDriver"
#        it 'Should return the same driver injected on creation',    -> aModel.getDriver().should.equal driver
#
