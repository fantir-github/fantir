class SliderView {
    constructor(elId) {
        var elSelector = '#' + elId;
        this._el = document.querySelector(elSelector);
        this.showPrevBtn = null;
        this.showNextBtn = null;
        this.slideImage = null;

        this._logic = new SliderLogic();
    }
    _render() {

        this._el.innerHTML = `
        <div class='itk-slider'>
            <button class='show-prev-btn'> PREV </button>
            <img class='slide-img' src=''>
            <button class='show-next-btn'> NEXT </button>
        </div>`;

        this.showPrevBtn = this._el.querySelector('.show-prev-btn');
        this.showNextBtn = this._el.querySelector('.show-next-btn');
        this.slideImage = this._el.querySelector('.slide-img');
    };
    start() {
        var that = this;
        this._render();

        // subscribe to events
        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });

        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick();
        });


        this.showPrevBtn.disabled = true;

        this._logic.init(function () {
            that.slideImage.src = that._logic.getCurrentImageUrl();
        });
    };
    onShowPrevBtnClick() {

        this._logic.activatePrevImage();

        this.slideImage.src = this._logic.getCurrentImageUrl();
        this.showNextBtn.disabled = false;

        if (!this._logic.canMovePrev()) {
            this.showPrevBtn.disabled = true;
        }
    };
    onShowNextBtnClick() {

        this._logic.activateNextImage();
        this.slideImage.src = this._logic.getCurrentImageUrl();

        this.showPrevBtn.disabled = false;

        if (!this._logic.canMoveNext()) {
            this.showNextBtn.disabled = true;
        }
    };





}


// SliderView.prototype = {
//     _render: function () {

//         this._el.innerHTML = `
//         <div class='itk-slider'>
//             <button class='show-prev-btn'> PREV </button>
//             <img class='slide-img' src=''>
//             <button class='show-next-btn'> NEXT </button>
//         </div>`;

//         this.showPrevBtn = this._el.querySelector('.show-prev-btn');
//         this.showNextBtn = this._el.querySelector('.show-next-btn');
//         this.slideImage = this._el.querySelector('.slide-img');
//     },
//     start: function () {
//         var that = this;
//         this._render();

//         // subscribe to events
//         this.showPrevBtn.addEventListener('click', function (e) {
//             that.onShowPrevBtnClick(e);
//         });

//         this.showNextBtn.addEventListener('click', function (e) {
//             that.onShowNextBtnClick();
//         });


//         this.showPrevBtn.disabled = true;

//         this._logic.init(function () {
//             that.slideImage.src = that._logic.getCurrentImageUrl();
//         });
//     },
//     onShowPrevBtnClick: function (e) {

//         this._logic.activatePrevImage();

//         this.slideImage.src = this._logic.getCurrentImageUrl();
//         this.showNextBtn.disabled = false;

//         if (!this._logic.canMovePrev()) {
//             this.showPrevBtn.disabled = true;
//         }
//     },
//     onShowNextBtnClick: function (e) {

//         this._logic.activateNextImage();
//         this.slideImage.src = this._logic.getCurrentImageUrl();

//         this.showPrevBtn.disabled = false;

//         if (!this._logic.canMoveNext()) {
//             this.showNextBtn.disabled = true;
//         }
//     }

// }


