const input = document.querySelector('input');
const addButton = document.querySelector('button.add');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li')
let taskNumber = document.querySelector('span');
let number = 0;
const deleteButton = document.querySelector("body > form > ul > li > button");


//functions
const addTask = () => {

    let titleTask = input.value;

    if (titleTask != '') {
        const task = document.createElement('li');
        ul.appendChild(task);
        task.textContent = titleTask;
        task.innerHTML = titleTask + '<button class="delete_button">X</button>';
        input.value = '';
        number++;
        taskNumber.textContent = `${number}`;
        task.querySelector('button').addEventListener("click", removeTask)
        liElements.push(titleTask)

    }


}

const removeTask = (e) => {
    e.target.parentNode.remove();
    number--;
    taskNumber.textContent = `${number}`;
    liElements.pop(e.target.parentNode)
}

//search
let liElements = [...li];
const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();

}


//events 

addButton.addEventListener("click", addTask);
window.addEventListener("submit", (event) => {
    event.preventDefault();
});
window.addEventListener('input', searchTask)
