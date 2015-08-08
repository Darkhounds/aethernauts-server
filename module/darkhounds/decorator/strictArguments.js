decorator           = require('../abstract/decorator');
var _constructor    = decorator.decorate(function(){ /*Decorator StrictArguments*/ });
Object.defineProperty(_constructor, 'toString', {value: function(){ return 'Decorator StrictArguments' }});
Object.defineProperties(_constructor, {
    ERROR_MISSING_ARGUMENT: {enumerable:true, value:"Missing argument"},
    ERROR_WRONG_ARGUMENT:   {enumerable:true, value:"Wrong argument type"}
});

module.exports      = _constructor;