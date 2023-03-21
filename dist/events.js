// Пишем форму поиска, которая открывается по клику на иконку,
// а закрывается по клику на любое место страницы, кроме самой формы.
// Таккже закрыть форму можно по клавише (Esc) на клавиатуре.
// Для поля ввода поискового запроса добавляем счётчик символов.

const form = document.querySelector('.found');

document.addEventListener("click", found);

document.addEventListener('keydown', close); 

function close(keyboardEvent) {
    if(keyboardEvent.keyCode === 27) {
    form.classList.remove('_active');
    }
};

function found(pointerEvent) {
    pointerEvent.preventDefault();
    if (pointerEvent.target.closest('.button')) {
        form.classList.toggle('_active');
    }
    if (!pointerEvent.target.closest('.found')) {
        form.classList.remove('_active');
    }
};

const txtItem = document.querySelector('.input');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.input__counter span');
txtCounter.innerHTML = txtItemLimit;
console.log(txtItemLimit);


txtItem.addEventListener('input', txtSetCounter);   // заменили "keyup" на "input"
// txtItem.addEventListener('keydown', function(keyboardEvent) {
//     if (keyboardEvent.repeat) txtSetCounter();
// });

function txtSetCounter() {
    const txtCounterResult = txtItemLimit - txtItem.value.length;
    txtCounter.innerHTML = txtCounterResult;
    console.log(txtCounterResult);
}


// const stick = document.querySelector('.stick');

// // document.addEventListener("scroll", stick);

// window.onscroll = function() {
//     pointerEvent.preventDefault();
//     // var form = document.getElementsByTagName('.background')
//     if (document.documentElement.scrollTop > 500) {
//         stick.classList.toggle('_ac');
//     } else {
//         if (stick.classList.contains("_ac")) {
//             stick.classList.remove('_ac');
//         }
//     }
// };

// document.body.scrollTop > 500 || 