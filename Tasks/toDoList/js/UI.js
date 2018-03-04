function CreateLine() {
    this.createNewLine = function (name) {
        var tableForTaskNameEl = document.querySelector('.containerTable');
        var newRow = tableForTaskNameEl.insertRow(1);
        var cell0 = newRow.insertCell(0);
        var cell1 = newRow.insertCell(1);
        var cell2 = newRow.insertCell(2);
        var cell3 = newRow.insertCell(3);
        //fill cell 0
        cell0.innerHTML = name;
        //fill cell 1
        var checkBox = document.createElement('input');
        checkBox.type = 'checkBox';
        cell1.appendChild(checkBox);
        //fill cell 2
        var buttonForUpdate = document.createElement('a');
        buttonForUpdate.id = 'updateTask';
        buttonForUpdate.href = '';
        buttonForUpdate.innerHTML = 'update';
        cell2.appendChild(buttonForUpdate);
        //fill cell 3
        var buttonToDeleteLine = document.createElement('a');
        buttonToDeleteLine.id = 'deleteTask';
        buttonToDeleteLine.href = '';
        buttonToDeleteLine.innerHTML = 'delete';
        cell3.appendChild(buttonToDeleteLine);
        fillAnArrayLinks();
        onButtonUpdateTaskClick();
    }

    this.updateTaskF = function (e) {
        e.preventDefault();
        var clickedTask = e.currentTarget;
        var thisTask = clickedTask.parentElement.parentElement.firstElementChild;
        var thisTaskName = thisTask.innerHTML;
        thisTask.innerHTML = '';
        //create new elements for save new name task 
        var newNameTask = document.createElement('input');
        var saveNewNameTaskBtn = document.createElement('button');
    
        newNameTask.className = 'inputForNewTaskName';
        newNameTask.placeholder = 'input new task name';
        newNameTask.type = 'text';
    
        saveNewNameTaskBtn.className = 'buttonForNewTaskName';
        saveNewNameTaskBtn.href = '';
        saveNewNameTaskBtn.innerHTML = 'save';
    
        thisTask.appendChild(newNameTask);
        thisTask.appendChild(saveNewNameTaskBtn);
        //после создания элементов их нужно убрать и вернуть новое имя таски
        var btnforSaveNewTaskName = document.querySelector('.buttonForNewTaskName');
        btnforSaveNewTaskName.addEventListener('click', function () {
            var newNameTaskEl = document.querySelector('.inputForNewTaskName');
            thisTask.innerHTML = newNameTaskEl.value;
            toDoList.updateTask(newNameTask.value, thisTaskName);
        });
    }

    //clear input and fill out an array of links

    // inputTaskNameEl.value = '';
    
    // fillAnArrayLinks();
    // onButtonUpdateTaskClick();
}