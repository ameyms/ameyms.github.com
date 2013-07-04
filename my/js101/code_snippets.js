/*Javascript 101 Snippets */
//#!/usr/bin/nodejs/node

foo = '3';
console.log(window.foo);
typeof foo
foo instanceof Object
foo instanceof String

//-------------------------------------------------------

var yudhishthir = true;
typeof yudhishthir
yudhishthir instanceof Boolean

//--------------------------------------------------------

var bar = function(){console.log('foo');};
typeof bar
bar instanceof Object
bar instanceof Function

//---------------------------------------------------------
var baz = [];
typeof baz;
baz instanceof Object;
baz instanceof Function;
baz instanceof Array;

//----------------------------------------------------------

var boo = {};
typeof baz;
baz instanceof Object;
baz instanceof Function;
baz instanceof Array;


//-------------------------------------------------------------
/*undefineds and nulls*/
var ameysBrain = null;
var ameysIq;

console.log(ameysBrain);
console.log(ameysIq);

console.log(typeof ameysBrain);
console.log(typeof ameysIq);



//-------------------------------------------------------------

/** traversing arrays */
var myarr = ['foo', true, 1000];
for(var i=0; i < myarr.length; i++)
{
	console.log(myarr[i]);
}
console.log('Value of i %c outside %cthe loop is is %d', "color:maroon; background:gold", "color:#222; background:none;",i); //i does not go out of scope



//------------------------------------------------------------------
/** Objects as JSON Maps and Member access */

var mymap = {a:'foo',b:true,c:1000}
console.log(mymap.a);
console.log(mymap.b);
console.log(mymap.c);
for(var key in mymap)
{
	console.log('Value for '+key+' is '+mymap[key]);
}


//---------------------------------------------------------------------
/** Truthy and Falsy values  */
console.log(0?true:false);
console.log(-1?true:false);
console.log(1?true:false);
console.log([]?true:false);
console.log({}?true:false);
console.log(null?true:false);
console.log(undefined?true:false);
console.log('true'?true:false);
console.log('false'?true:false);





//---------------------------------------------------------------------

/** Duck Types **/

var a = 1;
var b = '1';
a == b;
a === b;

//------

var ramesh = {a:5, b:'stars'};
var suresh = {a:5, b:'stars'};

console.log(ramesh == suresh);
console.log(ramesh === suresh);

//Try this:
JSON.stringify(ramesh) === JSON.stringify(suresh);


//------------------------------------------------------------------------
/**Functions **/
/*names */
var myFunc = function(){

	console.log('awww!');
}

function myFunc1(){

	console.log('yaay!');
}

myFunc.name
myFunc1.name



/*arguments array */
var myFunc2 = function() {

	console.log("%o", arguments);
	console.log('%s', (typeof arguments));
	
}
//------------------------------------------------------------------------
/**Closures*/

var getLogCounterFrom = function(from)
{
	return function()
	{
		console.log('I have counted %d calls', ++from);
	}
}

var logCounter = getlogCounterFrom(5);

//------------------------------------------------------------------------

/*Classes in Javascript*/
/* this keyword */
var Kryptonian = function (naav) {

    this.name = naav;
}


Kryptonian.prototype.useSunlight = function () { console.log('Time to soak up some sun!');};

Kryptonian.prototype.setCape = function (color) {

    this.cape = color;
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


var superman = new Kryptonian();
console.log(superman.useSunlight());
console.log(superman.canFly());
console.log(superman.setCape('red'));
console.log(superman.canFly());



//------------------------------------------------------------------------
/*call and apply*/
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

capeformatter.call(superman);

var zod = new Kryptonian();
capeformatter.call(zod);


var Human = function () {


}

Human.prototype.setFavSwear = function(word)
{
    this.swear = function () {
		
        console.log('%c%s','color:whiteSmoke; background:black; font-weight:bold', word)
    }
}

var h = new Human();
h.setFavSwear('Oh crap!');
Human.prototype.setFavSwear.call(superman, 'Oh my Zod!');




//Good example in actual Javascript API
var fullname = 'Clark Kent';
Array.prototype.slice.call(fullname,1,5);




/** Inheritance */
var Jedi = function () {

	Human.call(this);

}
var __JediConstructor = Jedi;
Jedi.prototype = Human.prototype;
Jedi.prototype.constructor = __JediConstructor;




//------------------------------------------------------------------------





//------------------------------------------------------------------------
/** Modularity & Namespacing */

symc = {};


/*Without write protection*/
(function(){

	var foo = function () {
	
		//dummy code
	} 
	
	symc.di = {
	
		sna: function () {
		
			symc.vom.foo();
			symc.sort.getVersions();
			foo();
		
		},
		VERSION: '4.0'
	
	};
	
	
})();



/*WITH write protection*/
(function($s){

	var foo = function () {
	
		//dummy code
	} 
	
	$s.vom = {
	
		viz: function () {
		
			$s.sort.getVersions();
		
		},
		VERSION: '11.0'
	
	};
	
	
})(symc);





