var Components = {
    'components': {},
    'extend': function (key,componentReady) {
        this.components[key] = componentReady;
    },
    'ready': function(){
        _.forEach(this.components,function(component,key){
            component(key);
        });
    }
};