(function () {

	var div = document.getElementById('test'),
		style = div.style;

		//style.color = 'red';
		//style.backgroundColor = 'black';
		//style.border = '1px solid blue';
		//style.padding = '3px';

	//div.className = " css-class  css-class-new ";
	//div.className = ""; //удаление классов
	//div.className = div.className.replace(" css-class ", "");//удаление одного из классов

	div.classList.add('css-class');//один из способов добавления css-свойств
	div.classList.add('css-class-new');

	//div.classList.remove('css-class');//удаление одного из классов
	div.classList.toggle('css-class');//переключатель

})();