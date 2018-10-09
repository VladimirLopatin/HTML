var number = 234.556,
	n = NaN,
	inf = Infinity;

//console.log( number.toFixed(2) ) ;
//console.log( number.toExponential() ) ;
console.log( number.toPrecision(4) ) ;
console.log( typeof number.toString(2) ) ;

console.log( Math.sqrt(81) );
console.log( Math.pow(5,2) );
console.log( Math.floor(number) );
console.log( Math.ceil(number) );
console.log( Math.round(number) );
console.log( Math.PI );

console.log( 0/0 );
console.log( NaN === NaN );

console.log( isNaN (n) );
console.log( isNaN (number) );

console.log( 1/0 );
console.log( -1/0 );

console.log( inf > 876632 );
console.log( inf < 876632 );
console.log( inf + 876632 );