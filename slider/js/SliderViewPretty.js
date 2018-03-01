class SliderViewPretty extends SliderView {
    constructor(elId){
        super(elId);
    };
    //debugger;
    //SliderView();
    // let newSlider = new SliderView(elId);
    //SliderView.apply(this, arguments);
    _render() {

        this._el.innerHTML = `
        <div class='itk-slider'>
            <button class='show-prev-btn'> left </button>
            <img class='slide-img' src=''>
            <button class='show-next-btn'> right </button>
        </div>`;

        this.showPrevBtn = this._el.querySelector('.show-prev-btn');
        this.showNextBtn = this._el.querySelector('.show-next-btn');
        this.slideImage = this._el.querySelector('.slide-img');
    };

}

// SliderViewPretty.prototype = Object.create(SliderView.prototype);

// SliderViewPretty.prototype._render = function(){
//     SliderView.prototype._render.apply(this);

//     // el.innerHTML = `<button>Hi</button>`;
// }