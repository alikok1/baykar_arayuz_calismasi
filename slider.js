class Slider {
    constructor() {
        this.currentIndex = 0;
        this.sliderBlock = document.querySelector('.slider-block');
        this.sliderItems = document.querySelectorAll('.slider-item');
        this.totalItems = this.sliderItems.length;

        this.previousBtn = document.querySelector('.previous-btn');
        this.nextBtn = document.querySelector('.next-btn');

        this.itemWidth = this.sliderItems[0].clientWidth; // İlk öğenin genişliğini al
        this.init();
    }

    init() {
        this.previousBtn.addEventListener('click', () => this.moveSlide(-1));
        this.nextBtn.addEventListener('click', () => this.moveSlide(1));
        this.updateSliderPosition();
    }

    moveSlide(direction) {
        // Son elemandan bir önceki elemana ulaşıldıysa
        if (this.currentIndex === this.totalItems - 3 && direction === 1) {
            this.currentIndex = 0; // Başlangıca dön
        } else {
            this.currentIndex += direction;

            // İlk elemana ulaşıldığında kaymayı durdur
            if (this.currentIndex < 0) {
                this.currentIndex = 0; // İlk elemana git
            } else if (this.currentIndex >= this.totalItems) {
                this.currentIndex = this.totalItems - 1; // Son elemana git
            }
        }

        this.updateSliderPosition();
    }

    updateSliderPosition() {
        const offset = -this.currentIndex * this.itemWidth; // Öğenin genişliği kadar kaydır
        this.sliderBlock.style.transform = `translateX(${offset}px)`; // Piksel cinsinden kaydır
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Slider();
});
