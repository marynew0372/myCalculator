let currentOperand = ''; //Первый операнд (текущий)
let previousOperand = ''; //Второй операнд (предыдущий)
let operation = undefined; //Оператор

function number(number) {
    if (number === '0' && currentOperand === '0') return; //проверка 2-х нулей подряд
    currentOperand = currentOperand.toString() + number.toString(); //преобразование в строку и конкатенация в currentOperand
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return; //Проверка на наличие значения
    if (previousOperand !== '') {
        compute();
    }
    operation = op; //запись значения аргумента функции chooseOperation в переменную
    previousOperand = currentOperand; //Из текущего записываем в предыдущий
    currentOperand = ''; //сбрасываем значение
    updateDisplay();
}

function compute() {
    let result;
    const prev = parseFloat(previousOperand); //Засовываем в константу и преобразовываем в число с плавающей точкой
    const current = parseFloat(currentOperand); //Аналогично предыдущей строке
    if (isNaN(prev) || isNaN(current)) return; //Проверка "является ли числом"
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Делить на ноль нельзя");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result; //записываем результат, например, чтобы провести операцию прошлого результата со следующим числом
    operation = undefined;
    previousOperand = ''; 
    updateDisplay();
}

//Очищаем display 
function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

//интерактивно обновляем на display информацию
function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = currentOperand || previousOperand || '0';
}