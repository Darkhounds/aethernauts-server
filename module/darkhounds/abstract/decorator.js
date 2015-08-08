//var extend          = require('util')._extend;
var debug = false;

function toShortString(obj){
    return typeof obj + " "+ (obj?obj.toString().replace(/(?:\r\n|\r|\n|\ \ |function \((.*)\))/g, '').substr(0, 40):'');
}

function inject(target)                         {
    if(arguments.length < 2) return;
    //
    if (debug) console.log("-----> TARGET: " + toShortString(target) + ", " + Object.getOwnPropertyNames(target).length + ", " + Object.getOwnPropertyNames(target));
    for (var i = 1; i < arguments.length; i++)  {
        var source = arguments[i];
        if (debug) console.log("----> SOURCE: " + typeof source +" "+ source.toString() + ", " + Object.getOwnPropertyNames(source).length + ", " + Object.getOwnPropertyNames(source));
        
        if (typeof source === 'function' || typeof source === 'object')
        for (var property in source) {
            if (debug) console.log("---> " + property + " in " + source + " = " + Object.getOwnPropertyDescriptor(source, property));
            Object.defineProperty(target, property, Object.getOwnPropertyDescriptor(source, property))
        }
    }
    //
    if (debug) console.log("-----> AFTER: " + Object.getOwnPropertyNames(target).length + ", " + Object.getOwnPropertyNames(target)+ "\n");
    return target;
};

var _constructor    = function() {
    Object.defineProperty(this, 'decorate', {enumerable: true, value:function(target){
        if (debug) console.log("->" + typeof target);
        return _constructor.decorate(target, this)
    }});
    return this
};
Object.defineProperty(_constructor, 'toString', {value: function(){ return 'Abstract Decorator' }});
Object.defineProperty(_constructor, 'decorate', {enumerable: true, value:function(target, context){
    if (debug) console.log("--> " + toShortString(target) + ", " + toShortString(context) + ", " + toShortString(this));
    return inject(target, context || (typeof target === "function"?this:new this()));
}});


module.exports  = _constructor;