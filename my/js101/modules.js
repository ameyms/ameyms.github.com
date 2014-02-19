
var symc = symc || {} ;

(function(w, undefined){


var Kryptonian = function (naav) {

    this.name = naav;
}


var capeformatter = function () {

	if(this.cape)
    {
        console.log('I have a cape and the color is %c%s', 'background:'+this.cape+'; color:white', this.cape);
    }
	else
	{
		console.log('I dont have a cape!')
	}

}




Kryptonian.prototype.useSunlight = function () { console.log('Time to soak up some sun!');};

Kryptonian.prototype.setCape = function (color) {

    this.cape = color;
};

Kryptonian.prototype.printCape = function () {

   capeformatter.call(this);
};

Kryptonian.prototype.canFly = function () {
    if(this.cape)
    {
        return true;
    }
    else
    {
        return false;
    }
};




symc.Kryptonian = Kryptonian;



})(window, undefined);





var foo = {a: 1, b: true};

var getMutator = function (x) {
	
    return function () {
        x.a++;
        console.log('%o%', x);
    };
}