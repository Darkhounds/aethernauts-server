should                      = (require 'chai').should()
#
describe 'The Decorator StrictArguments', ->
    StrictArguments         = require "../decorator/strictArguments"
    it 'Should be defined',                             -> should.exist StrictArguments
    it 'Should implement the "decorate" method',        -> StrictArguments.should.itself.respondTo 'decorate'
    it 'Should have missing argument error declared',   -> StrictArguments.ERROR_MISSING_ARGUMENT.should.be.a 'string'
    it 'Should have wrong argument type declared',      -> StrictArguments.ERROR_WRONG_ARGUMENT.should.be.a 'string'
    
