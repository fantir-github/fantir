
function ToDoListService() {
    var that = this;
    this.getTasks = function (onSuccess) {
        $.ajax({
            type: 'GET',
            url: 'http://repetitora.net/api/JS/Tasks/?widgetid=1553&count=10',
            success: function (data) {
                this.data = data;
                //to do with data something
                //onSuccess(data);
                
                for (var i = 0; i < this.data.length; i++) {
                    toDoList.tasks.push(new Task(this.data[i].title, this.data[i].id));
                    toDoList.GetTasks(this.data[i].title);
                }
                console.log('get');

            },
        });
    }

    this.createTask = function (name) {
        $.ajax({
            type: 'POST',
            url: 'http://repetitora.net/api/JS/Tasks/?widgetid=1553',
            success: function () {
                console.log('create');

                toDoList.ui.createNewLine(name);
            },
            data: {
                title: name
            }

        });
    }
    this.updateTask = function (id, name) {
        $.ajax({
            type: 'PUT',
            url: 'http://repetitora.net/api/JS/Tasks/?widgetid=1553',
            success: function () {
                console.log('Ok -put');
            },
            data: {
                taskId: id,
                title: name

            }

        });
    }

    this.deleteTask = function (id) {
        $.ajax({
            type: 'DELETE',
            url: 'http://repetitora.net/api/JS/Tasks/',
            success: function () {
                console.log('delete - ok');
            },
            data: {
                widgetid: 1553,
                taskId: id,
            }

        });
    }
}




// function TakeTask(name, checkbox){
//     this.task = {
//         name: name,
//         checkbox: checkbox,

//     }


// }

// var arrObjectTasks = [];
// function fillingObject(){
//     var container = document.querySelector('.containerTable');
//     var list = container.firstElementChild.childNodes;
//     list = Array.prototype.slice.call(list);
//     for(var i = 2; i<list.length; i++){
//         var propertyList = list[i].childNodes;
//         var namList = propertyList[0].innerHTML;
//         var check = false;
//         check = propertyList[1].firstElementChild.checked;

//         arrObjectTasks[i] = new TakeTask(namList, check);
//         console.log(arrObjectTasks[i].task.name, arrObjectTasks[i].task.checkbox);
//     }



// }
// fillingObject();

