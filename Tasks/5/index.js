var subMenuArr = document.querySelectorAll('.sub-menu');
var languagesMenuEl = document.querySelector('#languages-menu');
var citiesMenuEl = document.querySelector('#cities-menu');
var mainMenuEl = document.querySelector('.main-menu');
startedPage();

mainMenuEl.addEventListener('click', onMainMenuClick);

function startedPage() {
    for (var i = 0; i < subMenuArr.length; i++) {
        subMenuArr[i].classList.add('hidden');
    }
}

function onMainMenuClick(e) {
    var elem = e.target;
    var id = elem.id
    defineTypeSubMenu(id);
}

function defineTypeSubMenu(id) {
    if (id === 'languages-menu') {
        i = 0;
    } else if (id === 'cities-menu') {
        i = 1;
    }
    openSubMenu(i);
}
function openSubMenu(i) {
    classes = subMenuArr[i].classList;
    if (classes.contains('hidden')) {
        classes.remove('hidden');
    } else {
        classes.add('hidden');
    }
}
