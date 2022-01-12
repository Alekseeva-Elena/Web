// Вариант 1)	Создать страницу со скриптом, который бы 
// средствами скрипта, по нажатию кнопки выводил sin(x), 
// где x – числовая переменная, которая вводится в форме.

function run() {
    var number = document.getElementById('num').value;
    number = number.replace(/,/g,'.');

    if (!isNaN(number)){
        parseFloat(number);
        document.getElementById("res").innerHTML = Math.sin(number);
    } else if(number.includes('/')) {
        arr = number.split('/');
        if(arr[0].includes('pi')){
            withPi = arr[0].replace('pi', '');
            if (withPi === '') {
                withPi = 1;
            } else if (withPi === '-') {
                withPi = -1;
            }
            if (!isNaN(withPi) && !isNaN(arr[1]) && arr[1] != 0) {
                parseFloat(withPi);
                parseFloat(arr[1]);
                document.getElementById("res").innerHTML = Math.sin((withPi * Math.PI)/arr[1]);
            } else {
                document.getElementById("res").innerHTML = 'Введены неверные данные!';
            }
        } else if (!isNaN(arr[0]) && !isNaN(arr[1]) && arr[1] != 0) {
            parseFloat(arr[0]);
            parseFloat(arr[1]);
            document.getElementById("res").innerHTML = Math.sin(arr[0]/arr[1]);
        } else {
            document.getElementById("res").innerHTML = 'Введены неверные данные!';
        }
    } else if(number.includes('pi')) {
        number = number.replace('pi','');
        if (number === '') {
            number = 1;
        } else if (number === '-') {
            number = -1;
        }
        if (!isNaN(number)) {
            parseFloat(number);
            document.getElementById("res").innerHTML = Math.sin(number * Math.PI);

        } else {
            document.getElementById("res").innerHTML = 'Введены неверные данные!';
        }
    } else {
        document.getElementById("res").innerHTML = 'Введены неверные данные!';
    }
}

function bindUIActions() {
    window.addEventListener('keydown', function (e) {
        console.log(e.code);
        if(e.code === 'Enter') { 
            run();
        }
    });
}

window.onload = function () {
    console.log('hello');
    bindUIActions();
}