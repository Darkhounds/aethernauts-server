should      = (require 'chai').should()
#
describe 'The Abstract Decorator', ->
    AbstractDecorator   = require "../abstract/decorator"
    it 'Should be defined',                                 -> should.exist AbstractDecorator
    it 'Should implement the "decorate" method',            -> AbstractDecorator.should.itself.respondTo 'decorate'
    
    describe 'A Decorator object', ->
        decorator = AbstractDecorator.decorate {
            toString:   -> return "decorator"
            foo:        -> return 'bar'
        }
        
        it 'Should implement the "decorate" method',        -> decorator.should.respondTo 'decorate'
        it 'Should implement the "foo" method',             -> decorator.should.respondTo 'foo'
        
        describe 'A Decorated object', ->
            decorated = decorator.decorate {
                toString:   -> return "decorated"
                hail:       -> return 'Hello World!'
                foo:        -> return 'pub'
            }
            
            it 'Should implement the "decorate" method',    -> decorated.should.respondTo 'decorate'
            it 'Should implement the "foo" method',         -> decorated.should.respondTo 'foo'
            it 'Should respond with "bar" to "foo"',        -> decorated.foo().should.be.equal('bar')
            it 'Should implement the "hail" method',        -> decorated.should.respondTo 'hail'
