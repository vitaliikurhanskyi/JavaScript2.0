// первый способ получения элементов
document.getElementById('out').innerHTML = 'Hello!!!';
// второй способ получения элементов
document.querySelector('h2.header').innerHTML = 5;
// получить весь document
let doc = document;
//console.log(doc.querySelector('h2.header').innerHTML);


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

// Lesson 4
// Работаем с формами



document.querySelector('#button-4').onclick = buttonFunc;

//Можно использовать функцию более одного раза.
function buttonFunc() {
	console.log(document.querySelector('.input-in-4').value);
	document.querySelector('#button-4').style.backgroundColor = document.querySelector('.input-in-4').value;
}

document.querySelector('#button-date').onclick = buttonDate;

function buttonDate() {
	console.log(document.querySelector('.input-in-date').value);
}

document.querySelector('.input-in-range').oninput = buttonRange;

function buttonRange() {
	document.querySelector('.range_result').innerHTML = document.querySelector('.input-in-range').value;
}


// document.querySelector('#label-checkbox').onclick = function() {
// 	console.log(!document.querySelector('#checkbox-1').checked);
// };
document.querySelector('#checkbox-button').onclick = buttonCheckbox;

function buttonCheckbox() {
	let myCheckBox = document.querySelector('#checkbox-1');
	//console.log(myCheckBox.checked);
	if(myCheckBox.checked) {
		console.log('On');
	} else {
		console.log('off');
	}
}

document.querySelector('#textarea-button').onclick = () => {
	let textArea = document.querySelector('#textarea');
	console.log(textArea.value);
	textArea.value = "Отправлено";
}

document.querySelector('#form1-button').onclick = function(event) {
	event.preventDefault();
	//console.log(event);
	//console.log('Форма');
	let form1Data = document.querySelector('#form1');
	console.log(form1Data);
	//console.log(form1Data[1]);
	console.log(form1Data.elements.form1_input.value);
}

// Lesson 5
// Циклы в JavaScript
// for
// while


let text = document.querySelectorAll('.text-for');
//console.log(text[1].style.color);

for (let i = 0; i < text.length; i++) {
	text[i].style.color = 'green';
	text[i].onclick = getColor;
}

//console.log(text[1].style.color);

function getColor() {
	console.log('wer!!!');
}

let getByClass = document.getElementsByClassName('text-for');
//console.log(getByClass);

//RadioButtons

let radioButton = document.querySelector('.radioButton').onclick = function() {
	let radioChecked = document.getElementsByClassName('radio');

	for (let i = 0; i < radioChecked.length; i++) {
		if(radioChecked[i].checked) {
			console.log(radioChecked[i].value);
		}
	}
}

// +=

// for (let i = 0; i < 10; i++) {
// 	document.getElementById('outPlusEqual').innerHTML += i + ' ';
// }

// лутше так, что бы не дергало страницу

let outPlus = '';
for (var i = 0; i < 10; i++) {
	if (i == 6 || i == 3) continue;
	outPlus += i + ' ';
}

document.getElementById('outPlusEqual').innerHTML = outPlus;






