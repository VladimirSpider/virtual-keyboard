const state = {
	language: 'en',
}
const buttonsEng = [
	[['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['Backspace', ['backspace']]],
	[['Tab', ['tab']], ['q', 'Q'], ['w', 'W'], ['e', 'E'], ['r', 'R'], ['t', 'T'], ['y', 'Y'], ['u', 'U'], ['i', 'I'], ['o', 'O'], ['p', 'P'], ['[', '{'], [']', '}'], ['\\', '|'], ['Del', ['del']]],
	[['CapsLock', ['capslock']], ['a', 'A'], ['s', 'S'], ['d', 'D'], ['f', 'F'], ['g', 'G'], ['h', 'H'], ['j', 'J'], ['k', 'K'], ['l', 'L'], [';', ':'], ["'", '"'], ['Enter', ['enter']]],
	[['Shift', ['shift']], ['z', 'Z'], ['x', 'X'], ['c', 'C'], ['v', 'V'], ['b', 'B'], ['n', 'N'], ['m', 'M'], [',', '<'], ['.', '>'], ['/', '?'], ['▲', ['up']], ['Shift', ['shift']]],
	[['Ctrl', ['ctrl-left']], ['Win', ['win']], ['Alt', ['alt']], ['', ['space']], ['Alt', ['alt']], ['◄', ['left']], ['▼', ['down']], ['►', ['right']], ['Ctrl', ['ctrl-right']]]
];

const buttonsRu = [
	[['ё', 'Ё'], ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['Backspace', ['backspace']]],
	[['Tab', ['tab']], ['й', 'Й'], ['ц', 'Ц'], ['у', 'У'], ['к', 'К'], ['е', 'Е'], ['н', 'Н'], ['г', 'Г'], ['ш', 'Ш'], ['щ', 'Щ'], ['з', 'З'], ['х', 'Х'], ['ъ', 'Ъ'], ['\\', '/'], ['Del', ['del']]],
	[['CapsLock', ['capslock']], ['ф', 'Ф'], ['ы', 'Ы'], ['в', 'В'], ['а', 'А'], ['п', 'П'], ['р', 'Р'], ['о', 'О'], ['л', 'Л'], ['д', 'Д'], ['ж', 'Ж'], ["э", 'Э'], ['Enter', ['enter']]],
	[['Shift', ['shift']], ['я', 'Я'], ['ч', 'Ч'], ['с', 'С'], ['м', 'М'], ['и', 'И'], ['т', 'Т'], ['ь', 'Ь'], ['б', 'Б'], ['ю', 'Ю'], ['.', ','], ['▲', ['up']], ['Shift', ['shift']]],
	[['Ctrl', ['ctrl-left']], ['Win', ['win']], ['Alt', ['alt']], ['', ['space']], ['Alt', ['alt']], ['◄', ['left']], ['▼', ['down']], ['►', ['right']], ['Ctrl', ['ctrl-right']]]
];

// const buttonsCodes = [
// 	['192', '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '189', '187', '8'],
// 	['9', '81', '87', '69', '82', '84', '89', '85', '73', '79', '80', '219', '221', '220', '46'],
// 	['20', '65', '83', '68', '70', '71', '72', '74', '75', '76', '186', '222', '13'],
// 	['16', '90', '88', '67', '86', '66', '78', '77', '188', '190', '191', '38', '16'],
// 	['17', '91', '18', '32', '18', '37', '40', '39', '17']
// ];

const buttonsCodes = [
	['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
	['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
	['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
	['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
	['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
];

document.addEventListener('DOMContentLoaded', function() {
	const body = document.querySelector('body');

	const createTag = (tag, className, node, text) => {
		let element = document.createElement(tag);
		element.classList.add(className);
		
		if (text) {
			element.innerHTML = text;
		}
		
		node.append(element);
	}
	
	createTag('div', 'wrapper', body);
	const wrapper = document.querySelector('.wrapper');
	
	createTag('p', 'title', wrapper, 'Виртуальная клавиатура!');
	createTag('textarea', 'paper', wrapper);
	createTag('div', 'keyboard-block', wrapper);
	const keyboardBlock = document.querySelector('.keyboard-block');
	
	
	createTag('div', 'keyboardEng', keyboardBlock);
	createTag('div', 'keyboardRu', keyboardBlock);
	createTag('p', 'support', wrapper, 'Клавиатура создана в операционной системе Windows');
	createTag('p', 'support', wrapper, 'Для переключения языка комбинация: левыe ctrl + alt');
	
	const keyboardEng = document.querySelector('.keyboardEng');
	const keyboardRu = document.querySelector('.keyboardRu');
	
	keyboardRu.classList.add('hide-keyboard');
	
	const getKeyBoard = (keyBoardType, node) => {
		keyBoardType.forEach((line, index) => {
			createTag('div', 'line', node);
			const buttonsLine = node.querySelectorAll('.line')[index];
			line.forEach((button, innerIndex) => {
				if (Array.isArray(button[button.length - 1])) {
					let div = document.createElement('div');
					div.classList.add('button-block', button[button.length - 1], buttonsCodes[index][innerIndex]);
					let span = document.createElement('span');
					span.classList.add('technical');
					span.innerHTML = button[0];
					div.append(span);
					buttonsLine.append(div);
				} else {
					let div = document.createElement('div');
					div.classList.add('button-block', buttonsCodes[index][innerIndex]);
					button.forEach((value, index) => {
						let span = document.createElement('span');
						if (index === 1) span.classList.add('hide-value');
						span.innerHTML = button[index];
						div.append(span);
					});
					buttonsLine.append(div);
				}
			});
		});
	}

	getKeyBoard(buttonsEng, keyboardEng);
	getKeyBoard(buttonsRu, keyboardRu);
	
	function runOnKeys(func, ...codes) {
		let pressed = new Set();
		
		document.addEventListener('keydown', function(event) {
			console.log('hi');
			let buttons= document.querySelectorAll(`.${event.code}`);
			buttons.forEach((button) => {
				button.classList.add('active');
			});
			pressed.add(event.code);
			
			if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
				let allSpan = document.querySelectorAll('span');
				allSpan.forEach((span) => {
					if (!span.classList.contains('technical')) {
						span.classList.contains('hide-value') ? span.classList.remove('hide-value') : span.classList.add('hide-value');
					}
				});
			}
			
			for (let code of codes) {
				if (!pressed.has(code)) {
					return;
				}
			}
			
			pressed.clear();
			
			func();
		});
		
		document.addEventListener('keyup', function(event) {
			let buttons= document.querySelectorAll(`.${event.code}`);
			buttons.forEach((button) => {
				button.classList.remove('active');
			});
			pressed.delete(event.code);
			if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
				let allSpan = document.querySelectorAll('span');
				allSpan.forEach((span) => {
					if (!span.classList.contains('technical')) {
						span.classList.contains('hide-value') ? span.classList.remove('hide-value') : span.classList.add('hide-value');
					}
				});
			}
		});
		
	}
	
	runOnKeys(
		() => {
			state.language === 'en' ? state.language = 'ru' : state.language = 'en'
			if (state.language === 'en') {
				keyboardEng.classList.remove('hide-keyboard');
				keyboardRu.classList.add('hide-keyboard');
			} else {
				keyboardRu.classList.remove('hide-keyboard');
				keyboardEng.classList.add('hide-keyboard');
			}
		},
		'ControlLeft',
		'AltLeft'
	);
	
	function setLocalStorage() {
		localStorage.setItem('language', state.language);
	}
	
	window.addEventListener('beforeunload', setLocalStorage);
	
	function getLocalStorage() {
		if(localStorage.getItem('language')) {
			state.language = localStorage.getItem('language');
			if (state.language === 'en') {
				keyboardEng.classList.remove('hide-keyboard');
				keyboardRu.classList.add('hide-keyboard');
			} else {
				keyboardRu.classList.remove('hide-keyboard');
				keyboardEng.classList.add('hide-keyboard');
			}
		}
	}
	
	window.addEventListener('load', getLocalStorage);
});
