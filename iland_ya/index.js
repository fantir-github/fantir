var a = [

    [1, 1, 0, 0],

    [1, 0, 1, 1],

    [0, 0, 0, 1],

    [1, 0, 0, 0],

    [0, 1, 0, 0],

];

var btnCreateEl = document.querySelector('.createMatrix');
columsEl = document.querySelector('#quantityLines');
linesEl = document.querySelector('#quantityColumns');
containerEl = document.querySelector('.container');
btnCreateEl.addEventListener('click', CreateMatrix);


function CreateMatrix(e) {

    e.currentTarget.parentElement.innerHTML = '';
    for (var i = 0; i < columsEl.value; i++) {
        newLine();
        for (var j = 0; j < linesEl.value; j++) {
            var inputs = new CreateInput();
            if((columsEl.value -i == 1) && (linesEl.value -j == 1)){
                createBtnSubmit();
            }
        }
    }

}
var map = [];
var iterator=0;
function onBtnSubmitClick(){
    fillAnArray();
    identifyIlands();
    alert('Количество островов: '+(x-t))
}
function fillAnArray(){
    var allInputs = document.querySelectorAll('.matrix');
    for(var i = 0; i<columsEl.value; i++){
        map.push(line(allInputs));
    }
    console.log(map);
}
function line(allInputs){
    var arr = [];
    for(var j = 0; j<linesEl.value; j++){
       arr.push(allInputs[iterator].value);
       iterator++;
    }
    return arr;
}
function newLine(){
    this.brEl = document.createElement('br');
    containerEl.appendChild(brEl);
}
function createBtnSubmit(){
    newLine();
    this.btnSubmitEl = document.createElement('button');
    this.btnSubmitEl.type = 'button';
    this.btnSubmitEl.className = 'btnSubmit';
    this.btnSubmitEl.innerHTML = 'submit';
    containerEl.appendChild(btnSubmitEl);
    btnSubmitEl.addEventListener('click', onBtnSubmitClick);
}
function CreateInput() {
    this.inputEl = document.createElement('input');
        this.inputEl.type = 'number';
        this.inputEl.className = 'matrix';
        this.inputEl.placeholder = '0/1';
        containerEl.appendChild(this.inputEl);
     

}


var x = 0;
var t = 0;

function comparison(i, j) {  
    x++;
    map[i][j] == 0;
    if (i + 1 < map.length) {
        if (map[i][j + 1] == 1 && a[i + 1][j] == 1) {
            map[i][j + 1] = 0;
            map[i + 1][j] = 0;
            comparison(i, (j + 1));
            comparison((i + 1), j);
            t = t + 2;
        }
        if (map[i + 1][j] == 1) {
            map[i + 1][j] = 0;
            comparison((i + 1), j);
            t = t + 1;
        }
    }
    if (map[i][j + 1] == 1) {
        map[i][j + 1] = 0;
        comparison(i, (j + 1));
        t = t + 1;
    }
}

function identifyIlands() {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == 1) {
                comparison(i, j);
            }
        }

    }
}


