model               = require("darkhounds/src/abstract/model.js");

var _constructor    =function(driver)                                                                     {
    model.decorate(this);
    this._driverChanged = function(){};
    this.setDriver(driver)
    
//    /*Abstract Model*/
//    if (!driver) throw new Error(_constructor.ERROR_MISSING_ARGUMENT);
//    if (typeof driver !== 'object') throw new Error(_constructor.ERROR_WRONG_ARGUMENT);
//    //
//    var _driver = driver;
//    //
//    observable.decorate(this);
//    this.getDriver = function() { return _driver; };
//    //
//    return this;
};
Object.defineProperty(_constructor, 'toString', {value: function(){ return 'Model User'; }});
module.exports      = _constructor;
