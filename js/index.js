const state = {
  language: 'en',
};
const buttonsEng = [
  [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['Backspace', ['backspace']]],
  [['Tab', ['tab']], ['q', 'Q'], ['w', 'W'], ['e', 'E'], ['r', 'R'], ['t', 'T'], ['y', 'Y'], ['u', 'U'], ['i', 'I'], ['o', 'O'], ['p', 'P'], ['[', '{'], [']', '}'], ['\\', '|'], ['Del', ['del']]],
  [['CapsLock', ['capslock']], ['a', 'A'], ['s', 'S'], ['d', 'D'], ['f', 'F'], ['g', 'G'], ['h', 'H'], ['j', 'J'], ['k', 'K'], ['l', 'L'], [';', ':'], ["'", '"'], ['Enter', ['enter']]],
  [['Shift', ['shift']], ['z', 'Z'], ['x', 'X'], ['c', 'C'], ['v', 'V'], ['b', 'B'], ['n', 'N'], ['m', 'M'], [',', '<'], ['.', '>'], ['/', '?'], ['▲', ['up']], ['Shift', ['shift']]],
  [['Ctrl', ['ctrl-left']], ['Win', ['win']], ['Alt', ['alt']], ['', ['space']], ['Alt', ['alt']], ['◄', ['left']], ['▼', ['down']], ['►', ['right']], ['Ctrl', ['ctrl-right']]],
];

const buttonsRu = [
  [['ё', 'Ё'], ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], ['Backspace', ['backspace']]],
  [['Tab', ['tab']], ['й', 'Й'], ['ц', 'Ц'], ['у', 'У'], ['к', 'К'], ['е', 'Е'], ['н', 'Н'], ['г', 'Г'], ['ш', 'Ш'], ['щ', 'Щ'], ['з', 'З'], ['х', 'Х'], ['ъ', 'Ъ'], ['\\', '/'], ['Del', ['del']]],
  [['CapsLock', ['capslock']], ['ф', 'Ф'], ['ы', 'Ы'], ['в', 'В'], ['а', 'А'], ['п', 'П'], ['р', 'Р'], ['о', 'О'], ['л', 'Л'], ['д', 'Д'], ['ж', 'Ж'], ['э', 'Э'], ['Enter', ['enter']]],
  [['Shift', ['shift']], ['я', 'Я'], ['ч', 'Ч'], ['с', 'С'], ['м', 'М'], ['и', 'И'], ['т', 'Т'], ['ь', 'Ь'], ['б', 'Б'], ['ю', 'Ю'], ['.', ','], ['▲', ['up']], ['Shift', ['shift']]],
  [['Ctrl', ['ctrl-left']], ['Win', ['win']], ['Alt', ['alt']], ['', ['space']], ['Alt', ['alt']], ['◄', ['left']], ['▼', ['down']], ['►', ['right']], ['Ctrl', ['ctrl-right']]],
];

const buttonsCodes = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');

  const createTag = (tag, className, node, text) => {
    const element = document.createElement(tag);
    element.classList.add(className);

    if (text) {
      element.innerHTML = text;
    }

    node.append(element);
  };

  createTag('div', 'wrapper', body);
  const wrapper = document.querySelector('.wrapper');

  createTag('p', 'title', wrapper, 'Виртуальная клавиатура!');
  createTag('textarea', 'paper', wrapper);
  createTag('div', 'keyboard-block', wrapper);
  const keyboardBlock = document.querySelector('.keyboard-block');
  const paper = document.querySelector('.paper');

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
          const div = document.createElement('div');
          div.classList.add('button-block', button[button.length - 1], buttonsCodes[index][innerIndex]);
          const span = document.createElement('span');
          span.classList.add('technical');
          span.innerHTML = button[0];
          div.append(span);
          buttonsLine.append(div);
        } else {
          const div = document.createElement('div');
          div.classList.add('button-block', buttonsCodes[index][innerIndex]);
          button.forEach((value, valueIndex) => {
            const span = document.createElement('span');
            if (valueIndex === 0) span.classList.add('show-value');
            if (valueIndex === 1) span.classList.add('hide-value');
            span.innerHTML = button[valueIndex];
            div.append(span);
          });
          buttonsLine.append(div);
        }
      });
    });
  };

  getKeyBoard(buttonsEng, keyboardEng);
  getKeyBoard(buttonsRu, keyboardRu);

  const mouseHandler = (el) => {
    el.classList.toggle('active');
  };

  const mouseTextHandler = (el) => {
    const value = el.querySelector('.show-value');
    if (value) {
      paper.value += value.textContent;
    }

    if (el.classList.contains('Space')) {
      paper.value += ' ';
    }

    if (el.classList.contains('Tab')) {
      paper.value += '  ';
    }

    if (el.classList.contains('ArrowUp') || el.classList.contains('ArrowDown') || el.classList.contains('ArrowLeft') || el.classList.contains('ArrowRight')) {
      const arrow = el.querySelector('span').textContent;
      paper.value += arrow;
    }

    if (el.classList.contains('Enter')) {
      paper.value += '\n';
    }

    if (el.classList.contains('Backspace')) {
      paper.value = paper.value.slice(0, paper.value.length - 1);
    }
  };

  keyboardEng.addEventListener('mousedown', (event) => {
    const button = event.target.closest('div');
    if (!button) return;
    if (!keyboardEng.contains(button)) return;
    mouseHandler(button);
    mouseTextHandler(button);
  });

  keyboardRu.addEventListener('mousedown', (event) => {
    const button = event.target.closest('div');
    if (!button) return;
    if (!keyboardRu.contains(button)) return;
    mouseHandler(button);
    mouseTextHandler(button);
  });

  keyboardEng.addEventListener('mouseup', (event) => {
    const button = event.target.closest('div');
    if (!button) return;
    if (!keyboardEng.contains(button)) return;
    mouseHandler(button);
  });

  keyboardRu.addEventListener('mouseup', (event) => {
    const button = event.target.closest('div');
    if (!button) return;
    if (!keyboardRu.contains(button)) return;
    mouseHandler(button);
  });

  function runOnKeys(func, ...codes) {
    const pressed = new Set();

    document.addEventListener('keydown', (event) => {
      const buttons = document.querySelectorAll(`.${event.code}`);
      buttons.forEach((button) => {
        button.classList.add('active');
      });
      pressed.add(event.code);

      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        const allSpan = document.querySelectorAll('span');
        allSpan.forEach((span) => {
          if (!span.classList.contains('technical')) {
            if (span.classList.contains('hide-value')) {
              span.classList.remove('hide-value');
              span.classList.add('show-value');
            } else {
              span.classList.add('hide-value');
              span.classList.remove('show-value');
            }
          }
        });
      }

      const button = state.language === 'en' ? keyboardEng.querySelector(`.${event.code}`) : keyboardRu.querySelector(`.${event.code}`);
      const value = button.querySelector('.show-value');
      if (value) {
        paper.value += value.textContent;
      }

      if (event.code === 'Space') {
        paper.value += ' ';
      }

      if (event.code === 'Tab') {
        paper.value += ' ';
      }

      if (event.code === 'ArrowUp' || event.code === 'ArrowDown' || event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
        const arrow = document.querySelector(`.${event.code}`);
        const arrowValue = arrow.querySelector('span').textContent;
        paper.value += arrowValue;
      }

      if (event.code === 'Enter') {
        paper.value += '\n';
      }

      if (event.code === 'Backspace') {
        paper.value = paper.value.slice(0, paper.value.length - 1);
      }

      for (const code of codes) {
        if (!pressed.has(code)) {
          return;
        }
      }

      pressed.clear();

      func();
    });

    document.addEventListener('keyup', (event) => {
      const buttons = document.querySelectorAll(`.${event.code}`);
      buttons.forEach((button) => {
        button.classList.remove('active');
      });
      pressed.delete(event.code);
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        const allSpan = document.querySelectorAll('span');
        allSpan.forEach((span) => {
          if (!span.classList.contains('technical')) {
            if (span.classList.contains('hide-value')) {
              span.classList.remove('hide-value');
              span.classList.add('show-value');
            } else {
              span.classList.add('hide-value');
              span.classList.remove('show-value');
            }
          }
        });
      }
    });
  }

  runOnKeys(
    () => {
      state.language === 'en' ? state.language = 'ru' : state.language = 'en';
      if (state.language === 'en') {
        keyboardEng.classList.remove('hide-keyboard');
        keyboardRu.classList.add('hide-keyboard');
      } else {
        keyboardRu.classList.remove('hide-keyboard');
        keyboardEng.classList.add('hide-keyboard');
      }
    },
    'ControlLeft',
    'AltLeft',
  );

  function setLocalStorage() {
    localStorage.setItem('language', state.language);
  }

  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if (localStorage.getItem('language')) {
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
