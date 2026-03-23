let result = 0;
let current = 0;
let massive = [];
let operator = null;
let plus = [];

const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.calc-button');

// getElementsByClassName - берется массив

// Кнопка сброса результата до 0
document.getElementById('clear').onclick = function () {
    current = 0;
    updateScreen();
};

// Подключение кнопок цифр
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (!isNaN(value)) {
      inputNumber(value);
    } 
  });
});

// Обновление экрана
function updateScreen() {
    screen.textContent = current || '0';
}

// Стирание цифр
document.getElementById('larr').onclick = function () {
    current = Math.trunc(current / 10);
    updateScreen();
};

// Ввод цифр
function inputNumber(num) {
  if (current == 0) {
    current = num;
  }
  else if (plus[0] == 1) {
    current = num;
    plus = [];
  }
  else {
    current += num;
  }
  updateScreen();
}

document.getElementById('divide').onclick = function () {
  if ( current !== 0) {
    massive.push(current);
    massive.push('/');
    current = 0;
    updateScreen();
  }
}

document.getElementById('times').onclick = function () {
  if (current !== 0) {
    massive.push(current);
    massive.push('*');
    current = 0;
    updateScreen();
  }
}

document.getElementById('minus').onclick = function () {
  if (current !== 0){
    massive.push(current);
    massive.push('-');
    current = 0;
    updateScreen();
  }
}

document.getElementById('plus').onclick = function () {
  if (current !== 0 ) {
    massive.push(current);
    massive.push('+');
    current = 0;
    updateScreen();
  }
}

document.getElementById('equals').onclick = function () {
    massive.push(current);
    if (massive[1] == '/') {
      current = massive[0] / massive[2];
      plus.push(1);
    }
    else if (massive[1] == '*') {
      current = massive[0] * massive[2];
      plus.push(1);
    }
    else if (massive[1] == '-') {
      current = massive[0] - massive[2];
      plus.push(1);
    }    
    else if (massive[1] == '+') {
      current = Number(massive[0]) + Number(massive[2]);
      plus.push(1);
    }
    updateScreen();
    massive = [];
}