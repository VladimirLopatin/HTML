function funcDec (a, b) {		// стандартная, классическая
	return a + b;
}
//console.log ( funcDec (3,4) );


var funcExp = function(a, b) {		// литерал
	return a + b;
}
//console.log ( funcExp (2,3) );



function func1 () {
	function funcExample() {
		return 'one';
	}

	var variable = funcExample();

	function funcExample() {
		return 'two';
		}
		return variable;
	
};

//console.log ( func1() );


function func2 () {
	var funcExample = function() {
		return 'one';
	}

	var variable = funcExample();

		return variable;

	var funcExample = function() {
		return 'two';
	}
};

//console.log ( func2() );

// Функции обратного вызова

var func = function (callback) {
	var name = 'Nick';
	return callback(name);
};

//console.log ( func(function(n) {

//	return 'Hello ' + n;
//} ));

// Возвращение целой функции

var func1 = function() {
	return function() {
		console.log ( 'Hello!');
	}
} 

func1()();

// Анонимная самовызывающаяся функция

var prop = 1;

var module = (function(pro) {
	//console.log ( pro );
	
	var prop2 = 2;
	//console.log ('Привет от анонимной самовызывающей функции');
})(prop);


// Объект, "косящий" под массив

var funcArgs = function() {
	var i,
		sum = 0;

	for (i=0; i < arguments.length; i++) {
		sum += arguments[i];
		}	
	return sum;
};
console.log ( funcArgs(1,2,3) ) ;