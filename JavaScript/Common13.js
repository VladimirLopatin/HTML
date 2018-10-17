//var one = 1;// глобальная переменная

//global = 34322;// глобальная переменная

//function func() {
	//var two = 2;// локальная переменная
//};

// всегда переменные обозначаются через var !!!

var inner = function() {
	var arr1 = [1,2,3];
	for (var i = 0; i < arr1.length; i++) {
//		console.log( i );
		inner();
//		console.log( 'первый цикл' );
	}	
};

var inner = function() {
	var arr2 = [4,6,8];
	for (var i = 0; i < arr2.length; i++) {
//		console.log( i );
//		console.log( 'второй цикл' );
	}	
};

//	outer();

// Цепочка областей видимости

var k = 4;

var outerScope = function() {
	console.log ( k );
	var k = 8;
	console.log ( k );

	var innerScope = function() {
	console.log ( k );
	var k = 12;
	};
	innerScope();
	console.log ( k );

};

outerScope();