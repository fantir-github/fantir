var thumbnails = document.querySelectorAll('.thumbnails img');
var fullSizeImg = document.getElementById('full-size-img');

var showFullSizeImage = function(e) {
    var el = e.target;
    var srcEl = el.dataset.srcFull;
    fullSizeImg.src = srcEl;
}

for (var i = 0; i < thumbnails.length; i++) {
	thumbnails[i].addEventListener('click', showFullSizeImage);
}


