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

button.onclick = function () {
	//console.log(inputIn.value); // То что находиться в input.value
	let inputValue = +inputIn.value; // + перевод в число
	console.log(inputValue + 10);
	inputIn.value = ''; // сбрасываем к пустой строке
	result.innerHTML = inputValue;
}

// Lesson 3
// if else ветвление

const button3 = document.querySelector('#button-3');
const input3 = document.querySelector('.input-in-3');


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
	if (myCheckBox.checked) {
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

document.querySelector('#form1-button').onclick = function (event) {
	event.preventDefault();
	//console.log(event);
	//console.log('Форма');
	let form1Data = document.querySelector('#form1');
	//console.log(form1Data);
	//console.log(form1Data[1]);
	console.log(form1Data.elements.form1_textarea.value);
}

// Lesson 5
// Циклы в JavaScript
// for
// while


let text = document.querySelectorAll('.text-for');
//console.log(text[1].style.color);

for (let i = 0; i < text.length; i++) {
	if (i % 2) {
		text[i].style.color = 'green';
	} else {
		text[i].style.color = 'orange';
	}

	text[i].onclick = getColor;
}

//console.log(text[1].style.color);

function getColor() {
	console.log(this.style.color);
}

let getByClass = document.getElementsByClassName('text-for');
//console.log(getByClass);

//RadioButtons

let radioButton = document.querySelector('.radioButton').onclick = function () {
	let radioChecked = document.getElementsByClassName('radio');

	for (let i = 0; i < radioChecked.length; i++) {
		if (radioChecked[i].checked) {
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

// Lesson 5
// Вложенные циклы

let out = document.querySelector('.out');

// for (let i = 0; i < 5; i++) {
// 	for (let k = 0; k < 10; k++) {
// 		out.innerHTML += '*';
// 	}
// 	out.innerHTML += '<br>';
// }

// for (let i = 1; i < 10; i++) {
// 	for (let k = 1; k < 10; k++) {
// 		out.innerHTML += `${i} * ${k} = ${i * k} <br>`;
// 	}
// 	out.innerHTML += '<hr>';
// }

// Lesson 7
// Функции.

let btnCallFunc = document.querySelector('#callfunc');

function one() {
	console.log('work');
}

btnCallFunc.onclick = one;

let a = function (x) {
	console.log(x);
}
//a('2');

// Lesson 8
// While, Do While

let whileout = document.querySelector('.whileout');
let sum = 0;


// while (sum < 3) {
// 	//whileout.innerHTML += "****<br>";
// 	let stroke = 0;
// 	while (stroke < 4) {
// 		whileout.innerHTML += '*';
// 		stroke++;
// 	}
// 	whileout.innerHTML += '<br>';
// 	sum++;
// }

let flagout = document.querySelector('.flagout');
let while1Counter = 0;
let outStr = '';
let flag = 3;

while (while1Counter < 4) {
	let while2Counter = 0;
	while (while2Counter < 4) {
		if (while2Counter < flag) {
			outStr += '&nbsp';
			//outStr += '0';
			//console.log(flag);
		} else {
			outStr += '*';
		}
		while2Counter++;
	}
	flag--;
	outStr += '<br>';
	while1Counter++;
}

flagout.innerHTML = outStr;

//task

document.querySelector('#btntask').onclick = function () {
	let num = 0;
	let outStr = '';
	while (num < 50) {
		num++;
		if (num === 0) continue;
		if (num < 50) {
			outStr += `${num}_`;
		} else {
			outStr += `${num}`;
		}
	}
	document.querySelector('.taskout').innerHTML = outStr;
}

document.querySelector('#btntask2').onclick = function () {
	let num = 0;
	let outStr = '';
	while (num < 46) {
		num += 2;
		if (num < 2) continue;
		outStr += `${num}_`;
	}
	document.querySelector('.taskout').innerHTML = outStr;
}

document.querySelector('#btntask3').onclick = function () {
	let num = 25;
	let outStr = '';
	while (num !== 0) {
		num--;
		if (num < 7) continue;
		outStr += `${num}_`;
	}
	document.querySelector('.taskout').innerHTML = outStr;
}

// Lesson 9
// Работа с DOM, создание элементов, работа с CSS.

const p = document.querySelector('.one');

p.style.color = "green";

p.classList.add('test');

const btnToggle = document.querySelector('#btn-toggle');

btnToggle.onclick = function () {
	this.classList.toggle('classtoggle');
}

// атрибуты data

const atrribute = document.querySelector('.attribute');

document.querySelector('.outattr').innerHTML = atrribute.getAttribute('data');

document.querySelector('.outattr').setAttribute('data-test', 'test');

//console.log(typeof atrribute.getAttribute('data'));

//Gas Station

let gas = document.querySelectorAll('.gas');

for (let i = 0; i < gas.length; i++) {
	gas[i].onclick = function () {
		if (+document.querySelector('.gallons').value === 0) {
			document.querySelector('.price-out').innerHTML = "Выберите количество литров!!!";
			document.querySelector('.price-out').classList.add('red');
			return;
		}
		for (let x = 0; x < gas.length; x++) {
			gas[x].classList.remove('btn-gas-select');
		}
		this.classList.add('btn-gas-select');
		let gallons = document.querySelector('.gallons').value;
		let amount = this.getAttribute('data-price');
		let priceOut = gallons * amount;
		document.querySelector('.price-out').innerHTML = parseInt(priceOut * 100) / 100;
		document.querySelector('.price-out').classList.remove('red');
		document.querySelector('.price-out').classList.add('price-out');
	}
}

let createNewElement = document.createElement('div');

createNewElement.innerHTML = "Hello!!!2";

createNewElement.classList.add('red');

document.querySelector('.paste-new-element').appendChild(createNewElement);

createNewElement.onclick = function () {
	console.log(this.innerHTML);
}

//console.log(createNewElement);

// Lesson 10
// Массивы

let testMassive = ['Vasy', 21, 'SEO'];
document.querySelector('.massive-out').innerHTML = testMassive;

let createNewMassive = document.createElement('div');
createNewMassive.classList.add('new-massive');

for (let i = 1; i < testMassive.length; i++) {
	createNewMassive.innerHTML += `<span>${testMassive[0]}</span><br>`;
	createNewMassive.innerHTML += testMassive[i] + '<br>';
}

document.querySelector('.massive-out').appendChild(createNewMassive);

//console.log(createNewMassive);

//Методы pop, push,splice

const m1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const m2 = ['a', 'b', 'c', 'd', 'e', 'f'];

//console.log(m1.length);
//console.log(m1.push(10));

// const test = ['Vasy'];

// for (let i = 0; i < m2.length; i++) {
// 	test.push(m2[i]);
// }
// console.log(test);

//console.log(m2.pop());

//delete m2[3];

// console.log(m2);
// console.log(m2[3]);

// if (!m2[3]) {
// 	console.log('if');
// } else {
// 	console.log('else');
// }

//console.log(m2.splice(2, 3));
//console.log(m2);

// console.log(m2.splice(2, 3, 'add', 'add2'));
// console.log(m2);

//shift
//unshift

let d1 = ['test'];

function f1() {
	if (document.querySelector("#i-1").value === '') {
		d1.push('empty');
		document.querySelector("#m1-out").innerHTML = d1;
		return;
	}
	d1.push(document.querySelector("#i-1").value);
	document.querySelector("#m1-out").innerHTML = d1;

}


document.querySelector("#b-1").onclick = f1;

// Двумерные массивы

let massive2d = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let massiveOut = document.querySelector('.massive2d-out');
for (let i = 0; i < massive2d.length; i++) {
	for (let k = massive2d.length - 1; k >= 0; k--) {
		if (massive2d[i][k] > 4) {
			massiveOut.innerHTML += massive2d[i][k] + ' ';
		}
	}
	massiveOut.innerHTML += "<br>";
}

let massive2 = [1, 0, 0, 0, 0];
let massive2k = 0;
let massive2Out = document.querySelector('.massive2d-out-2');

let moveBtn = document.querySelector("#moveOne");
massive2Out.innerHTML = massive2;

//console.log(massive2.length);


moveBtn.onclick = function () {
	//console.log(massive2k);
	//console.log(massive2.length);
	if (massive2k <= massive2.length - 2) {
		massive2[massive2k] = 0;
		massive2[massive2k + 1] = 1;
		massive2k++;
		massive2Out.innerHTML = massive2;
	} else {
		massive2[massive2k] = 0;
		massive2[massive2k - 1] = 1;
		massive2k--;
		massive2Out.innerHTML = massive2;
	}
}

//Массивы (Обьект)

const obj = {
	"a": 5,
	"b": 'Hello',
	"r": 'Hi'
}

// console.log(obj);
// console.log(obj.a);
// let objkey = 'r';
// console.log(obj[objkey]);

let outObj = document.querySelector(".out-object");

let outIn = '';

for (let key in obj) {
	outIn += obj[key];
}

outObj.innerHTML = outIn;

//Получаем прогноз погоды по API
//https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a868550f20df98f37e4926673203701d

//https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=a868550f20df98f37e4926673203701d

// fetch('https://api.openweathermap.org/data/2.5/weather?q=kaniv&appid=a868550f20df98f37e4926673203701d')
// 	.then(function (resp) { return resp.json() }) // Convert data to json
// 	.then(function (data) {
// 		let weatherData = data;
// 		//console.log(weatherData);
// 		document.querySelector('.city').textContent = data.name;
// 		document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + "&deg;";
// 		document.querySelector('.disclaimer').textContent = data.weather[0].description;
// 		document.querySelector('.disclaimer').style.color = 'aqua';
// 		document.querySelector('.features').innerHTML = '<li><img src="https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png"></li>';
// 		//console.log(data.weather[0]['icon']);
// 		//https://openweathermap.org/img/wn/04d@2x.png
// 	})
// 	.catch(function () {
// 		// catch eny errors
// 	});



//	Set в JavaScript

let mySet = new Set();

mySet.add('Hello Word!');

mySet.add(1001);

mySet.add('test');

//mySet.clear();

mySet.delete('test');

//console.log(mySet);

//console.log(mySet.size); // количество елементов

//console.log(mySet.has(1001)); // проверка на наличие елемента

for (let item of mySet) {
	//console.log(item);
}

let arr = [1, 2, 1, 4, 5, 6, 2, 'hello'];

let newSet = new Set(arr);

//console.log(newSet);

let setArray = Array.from(newSet);

//console.log(setArray);

//console.log(setArray[1]);

//task

// let addset = new Set();

// document.querySelector('#addtoset').onclick = function () {
// 	let inputValue = document.querySelector('#inputtonewset').value;
// 	addset.add(inputValue);
// 	console.log(addset);
// }

let addset = new Set();

addset.add(1);
addset.add(2);
addset.add(3);
addset.add("World");
addset.add('Hello');

//console.log(addset);

let validInp = '[0-9]';

// document.querySelector('#addtoset').onclick = function () {
// 	let inputValue = document.querySelector('#inputtonewset').value;
// 	let reqExp = new RegExp(validInp);
// 	if (reqExp.test(inputValue)) {
// 		addset.delete(+inputValue);
// 	} else {
// 		addset.delete(inputValue);
// 	}
// 	//(reqExp.test(inputValue)) ? addset.delete(+inputValue) : addset.delete(inputValue);
// 	console.log(addset);
// }

// Цикл for of и сравнение с for, for in

let arr2 = [3, 7, 9];

for (let key in arr2) {
	//console.log(arr2[key]);
}

for (let item of arr2) {
	item += 'ewtawe';
	//console.log(item);
}

let pars = document.querySelector('#cycle').children;
let pars2 = document.getElementsByClassName('par');

//console.log(pars2);

//console.log(pars.length);

for (let key3 of pars2) {
	//console.log(key3.innerHTML);
	key3.style.color = "orange";
}

for (let i = pars.length - 1; i >= 0; i--) {
	//console.log(pars[i].innerHTML);
}

// Изучаем map, filter

let mass5 = [4, 5, 12, 'test2', 200, 1, 0, -2, 'test', 'asf'];

let newmass5 = mass5.map(function (item, index) {
	return item + 1;
});

//console.log(newmass5);

let massOnlyNum = mass5.filter(function (item) {
	if (typeof item === "number" && (item % 2) === 0) return true;
});

//console.log(massOnlyNum);

//Изучаем split, join, forEach

let abc = 'hello, hi, worls';

//console.log(abc.split(','));

let abcd = [1, 2, 3];

//console.log(abcd.join('-'));

let newabcd = [];

abcd.forEach(function (elem, index) {
	newabcd += elem + 1 + '----';
});

//console.log(newabcd);

// События мыши

document.querySelector('.block-1').onclick = function (event) {
	//console.log(event.altKey);
	console.log(event);
	console.log('click-1');
}

// document.querySelector('.block-2').onclick = function (event) {
// 	console.log('click-2');
// }

document.querySelector('.block-2').ondblclick = function () {
	console.log('dblclick');
}

document.querySelector('.block-2').oncontextmenu = function () {
	console.log('right button');
	return false;
}

//let w = 60;

// document.querySelector('.block-3').onmousemove = function (e) {
// 	//console.log(e.offsetX + '--' + e.offsetY);
// 	this.style.width = w + 'px';
// 	w++;
// }

document.querySelector('.block-3').onmouseenter = function () {
	this.style.backgroundColor = 'orange';
}

document.querySelector('.block-3').onmouseleave = function () {
	this.style.backgroundColor = '#fff';
}

document.querySelector('.block-3').onmousedown = function () {
	this.style.backgroundColor = 'green';
}

document.querySelector('.block-3').onmouseup = function () {
	this.style.backgroundColor = 'orange';
}

// События клавиатуры

// document.querySelector('.input-keys').oninput = function (event) {
// 	console.log(event);
// }

// document.querySelector('.input-keys').onkeypress = function (event) {
// 	console.log(event);
// 	console.log('charCode: ' + event.charCode);
// 	console.log('code: ' + event.code);
// 	if (event.key === 'w') console.log('123123');
// }

let test = true;
// document.querySelector('.input-keys').onkeydown = function (event) {
// 	console.log(event);
// 	console.log('charCode: ' + event.charCode);
// 	console.log('code: ' + event.code);
// 	if (event.key === 'w') console.log('123123');
// 	if (event.code == 'CapsLock') {
// 		console.log(test);
// 		test = !test;
// 		if (test === false) document.querySelector('.ch-1').checked = true;
// 		if (test === true) document.querySelector('.ch-1').checked = false;

// 	}
// }

document.querySelector('.input-keys').onkeyup = function (event) {
	console.log(event);
	console.log('charCode: ' + event.charCode);
	console.log('code: ' + event.code);
	if (event.key === 'w') console.log('123123');
	if (event.code == 'CapsLock') {
		console.log(test);
		test = !test;
		if (test === false) document.querySelector('.ch-1').checked = true;
		if (test === true) document.querySelector('.ch-1').checked = false;
	}
}

// КРАТКИЙ ОБЗОР TOUCH СОБЫТИЙ

document.querySelector('.block-touch').addEventListener("touchstart", myTouch);

function myTouch(event) {
	console.log(event);
	console.log('touch');
	document.querySelector(".block-out").innerHTML += "work";
	document.querySelector(".block-out2").innerHTML += event.touches.length;
	console.log(event.touches.length);
}

document.querySelector('.block-touch').addEventListener("touchend", myTouchEnd);

function myTouchEnd() {
	console.log('touch end');
}

document.querySelector('.block-touch2').addEventListener("touchmove", myTouchSlide);

function myTouchSlide(event) {
	console.log(event);
	console.log('slide');
}

// Try Catch. Работаем с ошибками.

let bag = 5;

bag = bag * 2;

try {
	document.querySelector('.bagtest').innerHTML = bag;
} catch (err) {
	//console.log(err);
	document.querySelector('.error').innerText = err;
} finally {
	//console.log('программа работает');
}

//console.log('fff bag');

// Local Storage. Сохраним все!

localStorage.setItem('data', 5);

//console.log(localStorage.getItem('data'));

//const at = [3, 4, 5];

const at = {
	hello: 4,
	k: 3,
	test: 'test'
};

localStorage.setItem('at', JSON.stringify(at));

let ltest = JSON.parse(localStorage.getItem('at'));

//console.log(ltest);

//console.log(ltest['k']);

//console.log(typeof ltest);

// AJAX - учимся посылать GET, POST запросы

let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		myFunctionXml(this.responseText);
	}
}

xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhttp.send();

function myFunctionXml(data) {
	//console.log(data);
	let data2 = JSON.parse(data);
	//console.log(data2.title);
}

//console.log('testst');

let xhttpPost = new XMLHttpRequest();

xhttpPost.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		myFunctionXmlPost(this.responseText);
	}
}

xhttpPost.open("POST", "http://getpost.itgid.info/index2.php");

xhttpPost.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // отсылает данные, как обычная форма

xhttpPost.send("auth=12313adfaef");

function myFunctionXmlPost(data) {
	//console.log('POST');
	//console.log(data);
}

// Fetch на практике

// fetch("http://getpost.itgid.info/index2.php")
// 	.then(data => {
// 		// console.log(data);
// 		// console.log(data.text());
// 		return data.text();
// 	})
// 	.then(data => {
// 		console.log(data);
// 		document.querySelector(".fetch-out").innerText = data;
// 	})




// fetch("http://getpost.itgid.info/index2.php", {
// 	method: 'POST', // *GET, POST, PUT, DELETE, etc.
// 	mode: 'cors', // no-cors, *cors, same-origin
// 	cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// 	credentials: 'same-origin', // include, *same-origin, omit
// 	headers: {
// 		// 'Content-Type': 'application/json'
// 		'Content-Type': 'application/x-www-form-urlencoded',
// 	},
// 	redirect: 'follow', // manual, *follow, error
// 	referrerPolicy: 'no-referrer', // no-referrer, *client
// 	body: "auth=12313adfaef"// body data type must match "Content-Type" header
// })
// 	.then(data => {
// 		return data.text();
// 	})
// 	.then(response => {
// 		console.log(response + '2');
// 	});

fetch("http://getpost.itgid.info/index2.php", {
	method: 'POST', // *GET, POST, PUT, DELETE, etc.
	mode: 'cors', // no-cors, *cors, same-origin
	cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	credentials: 'same-origin', // include, *same-origin, omit
	headers: {
		// 'Content-Type': 'application/json'
		'Content-Type': 'application/x-www-form-urlencoded',
	},
	redirect: 'follow', // manual, *follow, error
	referrerPolicy: 'no-referrer', // no-referrer, *client
	body: "auth=12313adfaef"// body data type must match "Content-Type" header
})
	.then(data => {
		return data.text();
	})
	.then(response => {
		//console.log(response);
	});

// Promise, PromiseAll

let prom = new Promise((resolve, reject) => {
	fetch("http://getpost.itgid.info/index2.php")
		.then(data => {
			resolve(data.text());
		})
});

let prom2 = new Promise((resolve, reject) => {
	fetch("http://getpost.itgid.info/index2.php")
		.then(data => {
			resolve(data.text());
		})
});

prom.then(data => {
	//console.log(data);
});

prom2.then(data => {
	//console.log(data);
});

Promise.all([prom, prom2]).then(data => {
	//console.log(data);
	//console.log(data[0]);
	//console.log(data[1]);
})


// ООП Классы. Часть 1

function myAlert(massage, color) {
	let elem = `<p style="color:${color};">${massage}</p>`;
	document.querySelector('.error-test').innerHTML += elem;
}

//myAlert('Error', 'red');
//myAlert('Error', 'green');

class Alert {
	constructor(message, color, elem) {
		this.message = message;
		this.color = color;
		this.elem = elem;
	}

	showAlert() {
		let out = `<div style="color:${this.color};">${this.message}</div>`;
		document.querySelector(this.elem).innerHTML = out;
	}

	showAlert2(color, message, elem) {
		let out = `<div style="color:${color};">${message}</div>`;
		document.querySelector(elem).innerHTML = out;
	}

	test() {
		console.log('test Alert 1');
	}
}

class Alert2 extends Alert {
	constructor(message, color, elem, backgroundColor) {
		super(message, color, elem);
		this.backgroundColor = backgroundColor;
	}

	showNewAlert() {
		let out = `<div style="color:${this.color}; background-color: ${this.backgroundColor}; display: inline-block;">${this.message}</div>`;
		document.querySelector(this.elem).innerHTML = out;
	}

	alertTest() {
		console.log(this.color);
	}

	test() {
		console.log('test Alert 2');
	}
}

let classAlert = new Alert('Class Error', 'green', '.class-out-1');

let classAlert2 = new Alert2('Class Error extents', 'orange', '.class-out-2', 'green');

classAlert.showAlert();
classAlert.showAlert2('red', 'error', '.class-out-2');


//classAlert2.showNewAlert();
//classAlert2.test();

//classAlert2.alertTest();

//console.log(classAlert);
//console.log(classAlert2);

//Замыкания

function testClosures() {
	let a = 0;
	return function () {
		a = a + 1;
		return a;
	}
}

let counter = testClosures();
let counter2 = testClosures();
//console.log(counter());
//console.log(counter());
//console.log(counter());
//console.log(counter2());
//console.log(counter2());
//console.log(counter2());


function tes() {
	let a = 0;
	return {
		f1: function () {
			return 'f1';
		},
		f2: function () {
			return 'f23';
		},
	}
}

let ter = tes();

//console.log(ter.f2());

// Рекурсия

let rek = 1;

function rekFunc() {
	//console.log(rek);
	rek++;
	if (rek == 10) {
		return;
	}
	rekFunc();
}

rekFunc();

let offset = 0.1;
let animElem = document.querySelector('.rekanimation');
function move() {
	animElem.style.left = offset + 'px';
	offset = offset + 0.1;
	if (offset == 100) return;
	setTimeout(move, "100");
}

document.querySelector('.move').onclick = move;


let attt = [[[[[[1]]]]], [[6]], [[[["str"]]]]];

function rekurs(arr) {
	for (let item of arr) {
		if (Array.isArray(item)) rekurs(item);
		if (typeof (item) === "number") console.log(item);
		if (typeof (item) === "string") console.log(item);
	}
}
//rekurs(attt);

















