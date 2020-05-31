const input = document.querySelector('input');
const addButton = document.querySelector('button.add');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('input');
const deleteButton = document.querySelector('delete_button');

const addTask = () => {

    let titleTask = input.value;

    if (titleTask != '') {
        const task = document.createElement('li');
        ul.appendChild(task);
        task.textContent = titleTask;
        task.innerHTML = titleTask + "<button class ='delete_button'>X</button>";
        input.value = '';
    }

}
addButton.addEventListener("click", addTask);
window.addEventListener("submit", (event) => {
    event.preventDefault();
});