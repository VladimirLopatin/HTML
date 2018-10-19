var foo = 'String';

//console.log ( navigator.userAgent );
//console.log ( navigator.platform );

//console.log ( screen.width + 'x' + screen.height);

//console.log ( location.toString );

//console.log ( frames );

//console.log ( history );

//window.alert ('BOM');
//window.confirm ('BOM');// это когда запрашивается подтверждение подтвердить или отменить (true/false)
//window.prompt ();// может принять строковое значение

var bar = window.prompt ();

if (bar === 'Hello!') {
	alert ('Hello too from BOM!')
} else {
	alert ('By!')
}