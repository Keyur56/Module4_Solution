(function(window){
    var Speakword = "Hello";
    var greetHello = function(name){
        console.log(Speakword + " " + name);
    }

    window.greetHello = greetHello;
})(window);
