strictArguments     = require("../decorator/strictArguments");

var _constructor    = strictArguments.extend(function()                     {
    /*Decorator Observable*/
    throw new Error(_constructor.ERROR_CANNOT_INSTANTIATE_DECORATOR_CLASS);
});
Object.defineProperty(_constructor, 'toString', {value: function(){ return 'Decorator Observable'; }});
Object.defineProperty(_constructor, 'ERROR_CANNOT_INSTANTIATE_DECORATOR_CLASS',
        {enumerable: true, value: 'Cannot instantiate decorator class'});
Object.defineProperty(_constructor, 'addEventListener', {enumerable: true, value: function(type, callback){
    if (!type) throw new Error(_constructor.ERROR_MISSING_ARGUMENT);
    if (typeof type !== 'string' ) throw new Error(_constructor.ERROR_WRONG_ARGUMENT);
    if (!callback) throw new Error(_constructor.ERROR_MISSING_ARGUMENT);
    if (typeof callback !== 'function') throw new Error(_constructor.ERROR_WRONG_ARGUMENT);
}});

module.exports      = _constructor;
