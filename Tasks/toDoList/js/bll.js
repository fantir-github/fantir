function List() {
    this.toDoListServ = new ToDoListService();
    this.ui = new CreateLine();
    this.tasks = [];
    var that = this;
    this._getIndex = function (name, operation) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].title === name) {
                operation(this.tasks[i].id);
                break;
            }
        }
    }
    this.GetTasks = function (name) {
        this.ui.createNewLine(name);

    }
    this.updateTask = function (newTitle, name) {
        this._getIndex(name, function (neededId) {
            //that.tasks[neededId].title = newTitle; //проверить
            that.toDoListServ.updateTask(neededId, newTitle);
        });

    };

    this.deleteTask = function (name) {
        this._getIndex(name, function (neededId) {
            // that.tasks.splice(neededId, 1);
            that.toDoListServ.deleteTask(neededId);
        });
        
    };

    this.addTask = function (name) {
        // var newTask = new Task(name, id);
        // this.tasks.push(newTask);
        // var newLine = new CreateLine(name);
        this.toDoListServ.createTask(name);
        // this.toDoListServ.getTasks();

        // CreateLine(name);
    };
}

var buttonForAddTaskNameEl = document.querySelector('#add-task-name');

buttonForAddTaskNameEl.addEventListener('click', function (e) {
    e.preventDefault();
    var inputTaskNameEl = document.querySelector('#imput-task-name');
    var nameTask = inputTaskNameEl.value;
    toDoList.addTask(nameTask);
    inputTaskNameEl.value = '';
});

function onButtonUpdateTaskClick() {
    var buttonForUpdateTask = document.querySelectorAll('#updateTask');
    for (var i = 0; i < buttonForUpdateTask.length; i++) {
        buttonForUpdateTask[i].addEventListener('click', toDoList.ui.updateTaskF)
    }
}


function fillAnArrayLinks() {
    deleteLineA = document.querySelectorAll('#deleteTask');
    for (var i = 0; i < deleteLineA.length; i++) {
        deleteLineA[i].addEventListener('click', onDeleteArticleButtonClick);
    }
}

function onDeleteArticleButtonClick(e) {
    e.preventDefault();
    var clickedLink = e.target;

    var td = clickedLink.parentElement;
    var row = td.parentElement;
    var name = row.firstElementChild.innerHTML;
    toDoList.deleteTask(name);
    row.remove();
}

var toDoList = new List();
toDoList.toDoListServ.getTasks();


// toDoList.addTask('buy bread', '0');
// toDoList.addTask('buy milk', '1');
// toDoList.addTask('buy milk', '2');
// console.log(toDoList.tasks);
// toDoList.deleteTask('1');
// toDoList.deleteTask('0');
// console.log(toDoList.tasks);
// toDoList.updateTask('buy pie', '2');
// console.log(toDoList.tasks);

