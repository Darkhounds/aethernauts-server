should                      = (require 'chai').should()
#
describe 'An Observable', ->
    DecoratorObservable     = require "../decorator/observable"
    it 'Should be defined',                             -> should.exist DecoratorObservable
    it 'Should implement the "decorate" method',        -> DecoratorObservable.should.itself.respondTo 'decorate'
    it 'Should have missing argument error declared',   -> DecoratorObservable.ERROR_MISSING_ARGUMENT.should.be.a 'string'
    it 'Should have wrong argument type declared',      -> DecoratorObservable.ERROR_WRONG_ARGUMENT.should.be.a 'string'
    
    describe "As an instance", ->
        dObservable             = new DecoratorObservable
        it 'Should implement the addEventListener method', -> dObservable.should.respondTo "addEventListener"
        it 'Should throw an error when addEventListener is missing an event type', ->
            dObservable.addEventListener.bind(undefined).should.throw Error, DecoratorObservable.ERROR_MISSING_ARGUMENT
        it 'Should throw an error when addEventListener has the wrong type as event type', ->
            dObservable.addEventListener.bind(undefined, true).should.throw Error, DecoratorObservable.ERROR_WRONG_ARGUMENT
        it 'Should throw an error when addEventListener is missing a callback', ->
            dObservable.addEventListener.bind(undefined, "SomeEvent").should.throw Error, DecoratorObservable.ERROR_MISSING_ARGUMENT
        it 'Should throw an error when addEventListener has the wrong type as callback', ->
            dObservable.addEventListener.bind(undefined, "SomeEvent", true).should.throw Error, DecoratorObservable.ERROR_WRONG_ARGUMENT
    