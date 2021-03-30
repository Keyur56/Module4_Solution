(function(window){
    var Speakword = "GoodBye";
    var greetBye = function(name){
        console.log(Speakword + " " + name);
    }

    window.greetBye = greetBye;
})(window);