var contextMenu = document.getElementById('context-menu');

var contextableArea = document.getElementById('area-with-context-menu');

var onContextableAreaClick = function (e) {
    contextMenu.className = 'context-menu';
    contextMenu.style.left = (e.pageX) + 'px';
    contextMenu.style.top = (e.pageY) + 'px';
    e.preventDefault();
}

var onContextMenuClick = function (e) {
    contextMenu.classList.add('hidden');
}
contextableArea.addEventListener('contextmenu', onContextableAreaClick);
contextMenu.addEventListener('click', onContextMenuClick);
