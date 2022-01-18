// первый способ получения элементов
document.getElementById('out').innerHTML = 'Hello!!!';
// второй способ получения элементов
document.querySelector('h2.header').innerHTML = 5;
// получить весь document
let doc = document;
console.log(doc.querySelector('h2.header').innerHTML);


// Lesson 2
// Основы ввода даных

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('#button');
let result = document.querySelector('.result');

button.onclick = function() {
	//console.log(inputIn.value); // То что находиться в input.value
	let inputValue = +inputIn.value; // + перевод в число
	console.log(inputValue + 10);
	inputIn.value = ''; // сбрасываем к пустой строке
	result.innerHTML = inputValue;
}

// Lesson 3
// if else ветвление

const button3 = document.querySelector('#button-3');
const input3  = document.querySelector('.input-in-3');


// стрелочная анонимная функция/замыкание
button3.onclick = () => {
	let num = +input3.value;
	if (num >= 16 && num < 60) {
		console.log('welocme');
	} else if (num > 60) {
		console.log('100 лет');
	} else {
		console.log('Ты не пройдешь!!!');
	}

	switch (num) {
		case 15:
			console.log('Еще год потерпи!!!');
			break;
		case 16:
			console.log('16!!!');
			break;
		default:
			console.log('default');
			break;
	}
}





