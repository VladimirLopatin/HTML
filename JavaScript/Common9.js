//var obj = new Object();
var obj = {
	string : 'str',
	func : function() {
		console.log (this.string);
	}
};	

var prop = 'string';
//console.log ( obj[prop] );

//console.log ( typeof obj.string );

//console.log ( obj.fff || 'name' );

obj.ddd = 'Bad b';
obj.string = 'Banana';

console.log ( obj );

var a = {prop: 1}, b = {prop: 2}, c = {prop: 3};

a = b = c = {prop: 'AllTheSame'};
console.log ( a,b,c );

var y = obj;
console.log ( y.string );

//delete obj.func;
console.log ( obj );

obj.func();

var MYAPP = {
	
};