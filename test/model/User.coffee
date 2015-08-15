should      = (require 'chai').should()
#
describe 'The Abstract Model', ->
    ModelUser   = require "../../src/model/User"    
    it 'Should be defined',                             -> should.exist ModelUser
    
    describe 'As an instance', ->
        driver  = {}
        users   = new ModelUser driver
        it 'Should implement the "getDriver" method',       -> users.should.respondTo 'getDriver'
        it 'Should "getDriver" should return',              -> users.getDriver().should.be.equal driver
