import 'hammerjs';

export class Slider {
  constructor() {
    this.slides = document.querySelectorAll('.header__slider-slide');
    this.buttons = document.querySelectorAll(
      '.header__slider-navigation-button'
    );
    this.slider = document.querySelector('.header__slider');

    this.currentSlide = 0;
    this.slideInterval = null;
    const hammer = new Hammer(this.slider);

    this.buttons.forEach((button, i) => {
      button.addEventListener('click', () => {
        this.manualNavigation(i);
        this.currentSlide = i;

        clearInterval(this.slideInterval);
        this.automaticNavigation();
      });
    });

    // this.automaticNavigation();

    hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammer.on('swipeleft', this.showPreviousSlide.bind(this));
    hammer.on('swiperight', this.showNextSlide.bind(this));
  }

  manualNavigation(slideNumber) {
    this.slides.forEach((slide, i) => {
      slide.classList.remove('js-slide-active');
      this.buttons[i].classList.remove('js-slide-active');
    });

    this.slides[slideNumber].classList.add('js-slide-active');
    this.buttons[slideNumber].classList.add('js-slide-active');
  }

  showPreviousSlide() {
    this.slides.forEach((slide, i) => {
      slide.classList.remove('js-slide-active');
      this.buttons[i].classList.remove('js-slide-active');
    });

    this.currentSlide--;

    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    }

    this.slides[this.currentSlide].classList.add('js-slide-active');
    this.buttons[this.currentSlide].classList.add('js-slide-active');

    clearInterval(this.slideInterval);
    this.automaticNavigation();
  }

  showNextSlide() {
    this.slides.forEach((slide, i) => {
      slide.classList.remove('js-slide-active');
      this.buttons[i].classList.remove('js-slide-active');
    });

    this.currentSlide++;

    if (this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0;
    }

    this.slides[this.currentSlide].classList.add('js-slide-active');
    this.buttons[this.currentSlide].classList.add('js-slide-active');

    clearInterval(this.slideInterval);
    this.automaticNavigation();
  }

  automaticNavigation() {
    this.slideInterval = setInterval(() => {
      this.slides[this.currentSlide].classList.remove('js-slide-active');
      this.buttons[this.currentSlide].classList.remove('js-slide-active');

      this.currentSlide++;

      if (this.currentSlide > this.slides.length - 1) {
        this.currentSlide = 0;
      }

      this.slides[this.currentSlide].classList.add('js-slide-active');
      this.buttons[this.currentSlide].classList.add('js-slide-active');
    }, 10000);
  }
}
