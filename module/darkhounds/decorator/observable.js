strictArguments     = require("../decorator/strictArguments");

var _constructor            = strictArguments.decorate(function()           {
    /*Decorator Observable*/
    this.addEventListener   = function(type, callback)                      {
        if (!type) throw new Error(_constructor.ERROR_MISSING_ARGUMENT);
        if (typeof type !== 'string' ) throw new Error(_constructor.ERROR_WRONG_ARGUMENT);
        if (!callback) throw new Error(_constructor.ERROR_MISSING_ARGUMENT);
        if (typeof callback !== 'function') throw new Error(_constructor.ERROR_WRONG_ARGUMENT);
    }
});
Object.defineProperty(_constructor, 'toString', {value: function(){ return 'Decorator Observable'; }});

module.exports          = _constructor;
