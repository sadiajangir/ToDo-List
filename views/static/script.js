function addToList() {
    var textInput = document.getElementById('textInput');
    var text = textInput.value.trim();
    if (text !== '') {
        var list = document.getElementById('textList');
        var listItem = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        checkbox.onchange = function() {
            listItem.classList.toggle('completed');
            if (listItem.classList.contains('completed')) {
                completedList.appendChild(listItem);
            } else {
                list.appendChild(listItem);
            }
        };
        var task = document.createElement('span');
        task.textContent = text;
        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = function() {
            if (!listItem.classList.contains('completed')) {
                var newText = prompt('Edit task:', task.textContent);
                if (newText !== null && newText.trim() !== '') {
                    task.textContent = newText;
                }
            }
        };
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = function() {
            listItem.remove();
        };
        listItem.appendChild(checkbox);
        listItem.appendChild(task);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);
        textInput.value = ''; // Clear input after adding to list
    } else {
        alert('Please enter some text!');
    }
}