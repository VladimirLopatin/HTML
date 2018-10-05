			/* Примитивы */
var str="Wep-developer",
			number = 1,
			numberSecond = 2.4,
			bool = true,
			undef,
			nuull = null;
			
			/* Объектные */
var obj = {
			prop: "yo",
				func: function () {
				}
			},
			regexp = /girl/g,
			func = function () {},
			arr = [1,2,3];

			obj.prop = "loftblog";
			arr[2] = 24;
			
			
/* Обертки */

var num = String('124');
num.prop = "Строка в числе";
var numObj = new String('124');
numObj.prop = "765449";

console.log( typeof num.toString() );
console.log( num );

console.log( typeof numObj.toString() );
console.log( numObj );