/**
 * Created by ljw on 2016/1/20.
 */
function baseClass(){
    this.showMsg = function() {
        console.log("baseClass");
    }
}

function extendClass(){
    this.showMsg =function () {
        console.log("extendClass");
    }
}

extendClass.prototype = new baseClass();
var instance = new extendClass();
var baseInstance = new baseClass();

instance.showMsg();
baseInstance.showMsg.call(instance);