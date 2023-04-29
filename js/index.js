const buttonsEng = [
	[['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['Backspace', ['backspace']]],
	[['Tab', ['tab']], ['q', 'Q'], ['w', 'W'], ['e', 'E'], ['r', 'R'], ['t', 'T'], ['y', 'Y'], ['u', 'U'], ['i', 'I'], ['o', 'O'], ['p', 'P'], ['[', '{'], [']', '}'], ['\\', '|'], ['Del', ['del']]],
	[['CapsLock', ['capslock']], ['a', 'A'], ['s', 'S'], ['d', 'D'], ['f', 'F'], ['g', 'G'], ['h', 'H'], ['j', 'J'], ['k', 'K'], ['l', 'L'], [';', ':'], ["'", '"'], ['Enter', ['enter']]],
	[['Shift', ['shift']], ['z', 'Z'], ['x', 'X'], ['c', 'C'], ['v', 'V'], ['b', 'B'], ['n', 'N'], ['m', 'M'], [',', '<'], ['.', '>'], ['/', '?'], ['▲', ['up']], ['Shift', ['shift']]],
	[['Ctrl', ['ctrl-left']], ['Win', ['win']], ['Alt', ['alt']], ['', ['space']], ['Alt', ['alt']], ['◄', ['left']], ['▼', ['down']], ['►', ['right']], ['Ctrl', ['ctrl-right']]]
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
	
	
	createTag('div', 'keyboard', keyboardBlock);
	createTag('p', 'support', wrapper, 'Клавиатура создана в операционной системе Windows');
	createTag('p', 'support', wrapper, 'Для переключения языка комбинация: левыe ctrl + alt');
	
	const keyboard = document.querySelector('.keyboard');
	
	buttonsEng.forEach((line, index) => {
		createTag('div', 'line', keyboard);
		const buttonsLine = document.querySelectorAll('.line')[index];
		line.forEach((button) => {
			if (Array.isArray(button[button.length - 1])) {
				let div = document.createElement('div');
				div.classList.add('button-block', button[button.length - 1]);
				let span = document.createElement('span');
				span.innerHTML = button[0];
				div.append(span);
				buttonsLine.append(div);
			} else {
				let div = document.createElement('div');
				div.classList.add('button-block');
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
	
});
