let userInput = document.getElementById('userInput');
let buttonEnter = document.getElementById('enter');
let ul = document.querySelector('ul');
let total = document.querySelector('#total');
let achieved = document.querySelector('#achieved');
let goals = 0;
let goalsAchived = 0;

//функция проверки поля ввода на пустоту
function inputIsNotEmpty() {
    return userInput.value.length > 0;
}

//функция для создания и удаления заметок
function createTodo() {

    let li = document.createElement('li');//создание заметки
    goals++;
    total.textContent = goals;
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = '';

    li.addEventListener('click', Completed);//проврека выполнения заметки

    let deleteButton = document.createElement('button');//удаление заметки
    deleteButton.appendChild(document.createTextNode('DELETE'));
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteTodoItem);
    
    //функция проверки выполнения заметки
    function Completed(){
        goalsAchived++;
        achieved.textContent = goalsAchived;
        li.classList.toggle('done');
    }

    //удаление заметок
    function deleteTodoItem() {
        li.classList.add('delete');
        goalsAchived--;
        achieved.textContent = goalsAchived;
        goals--;
        total.textContent = goals;
    } 
}
//добавление заметки по нажатию на клавишу 'Enter'
function changeListAfterKeyPress(event) {
    if (inputIsNotEmpty() && event.which == 13) {
        createTodo();
    }
}
//добавление заметки по нажатию на кнопку на форме
function changeListAfterButtonPress(event) {
    if (inputIsNotEmpty()) {
        createTodo();
    }
}

userInput.addEventListener('keypress', changeListAfterKeyPress);
buttonEnter.addEventListener('click', changeListAfterButtonPress);
total.textContent = goals;//количество всех заметок
achieved.textContent = goalsAchived;//количество выполненных заметок

