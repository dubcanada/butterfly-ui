/**
 *   Make the header element stick to the top when scrolled
 */
Butterfly.validate = function(form) {
    if(!window.$) return;
    
    var delegator = function() {
        var me = $(this);
        var html = me.html();
        var text = me.text();
        
        if(html !== text) {
            Butterfly.validate.delegate('');
        }
    };
    
    //  Make 100% sure we're passing a jQuery object
    form = $(form);
    
    //  Bind input events
    form.find('input, textarea').bind('keyup paste', delegator);
};

//  Simple delegator
Butterfly.validate.delegate = function(fn, text) {
    if(Butterfly.validate.methods[fn] && $.isFunction(Butterfly.validate.methods[fn])) {
        return Butterfly.validate.methods[fn].call(text);
    }
};

//  And the methods to call
Butterfly.validate.methods = {
    empty: function() {
        return this.length == 0;
    },
    
    email: function() {
        return this.indexOf('@') > 0;
    }
};