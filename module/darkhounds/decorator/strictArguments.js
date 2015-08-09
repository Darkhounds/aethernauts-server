decorator           = require('../abstract/decorator');
var _constructor    = decorator.extend(function(){
    /*Decorator StrictArguments*/
    throw new Error(_constructor.ERROR_CANNOT_INSTANTIATE_DECORATOR_CLASS);
});
Object.defineProperty(_constructor, 'toString', {value: function(){ return 'Decorator StrictArguments' }});
Object.defineProperty(_constructor, 'ERROR_CANNOT_INSTANTIATE_DECORATOR_CLASS',
        {enumerable: true, value: 'Cannot instantiate decorator class'});

Object.defineProperties(_constructor, {
    ERROR_MISSING_ARGUMENT: {enumerable:true, value:"Missing argument"},
    ERROR_WRONG_ARGUMENT:   {enumerable:true, value:"Wrong argument type"}
});

module.exports      = _constructor;