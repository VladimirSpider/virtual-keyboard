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
	createTag('p', 'support', keyboardBlock, 'Клавиатура создана в операционной системе Windows');
	createTag('p', 'support', keyboardBlock, 'Для переключения языка комбинация: левыe ctrl + alt');
	
});
