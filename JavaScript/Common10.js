var arr = [1,2,155,45,46,'str',{}]; // рекомендуемый способ создания массива

//var arr2 = new Array(1,2,'str',{}); // нерекомендуемый способ создания массива

//console.log ( arr );
//console.log ( arr2 );

//console.log( arr [2]);

//arr[6] = 'six';

//console.log ( arr );

//console.log ( arr.length );

//delete arr[1];

//console.log ( arr );


arr.splice(1,1);
arr.length = 100;
arr.length = 2;

arr[arr.length] = 33;

console.log (arr);


var matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9]

	];
	//console.log (matrix);

	//console.log (matrix[0][1]);

var newArr = arr.concat(matrix);// метод concat
console.log(newArr);

//arr.join(''); // метод join - превращает массив в строку
//console.log (arr.join(', '));

arr.push('new2'); // нужен, чтобы быстро вставить какой-либо элемент в конец массива
//console.log ( arr );

arr.pop ();// удаляет последний элемент массива
//console.log ( arr );

arr.unshift ('up_new'); //добавляет первый элемент массива
//console.log ( arr );

arr.shift ('up_new');// удаляет первый элемент массива
//console.log ( arr );

var reverseArr = arr.reverse ();// реверс массива, т.е. переворачивает его
//console.log ( reverseArr );

var sliced = arr.slice (1,2); // вырезает кусок массива
//console.log ( sliced );

console.log ( arr );
console.log (arr.sort ());