 Model               = require("darkhounds").abstract.Model;

var constructor    =function(driver)                                                                     {
    Model(this);
    
    this.setDriver(driver);
    
    return this;
};

module.exports      = constructor;
