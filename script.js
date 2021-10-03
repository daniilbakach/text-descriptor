const textarea = document.querySelector('#textarea');
const id = document.querySelector('#submit');
const infoMassage = document.querySelector('.require');

// let modifiedInput = input.replace(" ", '');
id.addEventListener('click', () => {
    let input = textarea.value;
    noInput(input)
    textToArray(input);
});

function textToArray(input) {
    let oneLine = input.replace(/\s|\n/g, '');
    let symbols = oneLine.split('');
    return symbols;
}

function noInput(input) {
    if (!input) {
        infoMassage.innerHTML = 'Не введено данных, попробуйте снова';
        infoMassage.classList.remove('disabled');
    } else {
        infoMassage.classList.add('disabled');
    }
}