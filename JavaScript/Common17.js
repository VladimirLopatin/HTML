(function () {

var doc = document,// кэширование переменных
	elem = doc.createElement("p"), // создать узел элемента
//	content = doc.createTextNode("<strong>Динамично созданный элемент</strong>"), // создать текстовый узел
	wrappedP = doc.getElementById("wrapped");


elem.innerHTML = "<strong>Динамично созданный элемент</strong>";

//wrappedP.parentNode.removeChild(elem); // удаление элементов со страницы
wrappedP.parentNode.removeChild(wrappedP);

//elem.appendChild(content);
//elem.setAttribute('id', 'Dynamic');
elem.id = 'Dynamic';

//wrappedP.parentNode.appendChild(elem);
//wrappedP.parentNode.insertBefore(elem, wrappedP); // метод insertBefore вставляет перед указанным элементом
//wrappedP.parentNode.replaceChild(elem, wrappedP);


})();