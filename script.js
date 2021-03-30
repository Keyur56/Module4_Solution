(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for(var i=0; i<names.length;i++){
        var FirtsLetter=names[i].charAt(0).toLowerCase();
        if(FirtsLetter === "j")
            greetBye(names[i]);
        else
            greetHello(names[i]);   
    }        
    })();