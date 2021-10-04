const textarea = document.querySelector('#textarea');
const id = document.querySelector('#submit');
const infoMassage = document.querySelector('.require');
const characteristicList = document.querySelector('.characteristic-list');
const textStatistic = document.querySelector('.text-statistic');

let symbols = [];
let characteristicArray = [];

// let modifiedInput = input.replace(" ", '');
id.addEventListener('click', () => {
    let input = textarea.value;
    noInput(input)
    textToArray(input);
    symbolCharacteristic();
    characteristicList.innerHTML = characteristicArray.join('');
    textLength(input);
    refreshArrays();
});

function textToArray(input) {
    let oneLine = input.replace(/\s|\n/g, '');
    symbols = oneLine.split('');
}

function noInput(input) {
    if (!input) {
        infoMassage.innerHTML = 'Не введено данных, попробуйте снова';
        infoMassage.classList.remove('disabled');
        textStatistic.classList.add('disabled');
    } else {
        infoMassage.classList.add('disabled');
        textStatistic.classList.remove('disabled');
    }
}

function symbolCharacteristic() {
    for (symbol of symbols) {
        characteristicArray.push(`<li class="characteristic-list__item">Символ ${symbol} - ${toUnicode(symbol)} ${symbolCountry(symbol)}</li>`);
    }

}

function toUnicode(symbol) {
    return `Юникод: U+${symbol.charCodeAt(0).toString(16).padStart(4, "0")};`;
}

function symbolCountry(symbol) {

    if ((symbol.charCodeAt(0) >= 65 && symbol.charCodeAt(0) <= 90) || (symbol.charCodeAt(0) >= 97 && symbol.charCodeAt(0) <= 122)) {
        return 'язык: английский;';
    } else if ((symbol.charCodeAt(0) >= 1040 && symbol.charCodeAt(0) <= 1103) || (symbol.charCodeAt(0) === 1105)) {
        return 'язык: русский;';
    } else {
        return 'язык: другой;';
    }
}

function refreshArrays() {
    symbols = [];
    characteristicArray = [];
}

function textLength(input) {
    textStatistic.innerHTML = `Общая статистика <div>Введено символов: ${input.length}</div>`
}