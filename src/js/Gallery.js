import 'hammerjs';

export class Gallery {
  constructor() {
    this.photos = document.querySelectorAll('.js-gallery-photo');
    this.backdrop = document.getElementById('js-galleryBackdrop');
    this.centerPhoto = document.getElementById('js-galleryBig');
    this.activePhoto = document.getElementById('js-galleryBigPhoto');
    this.activePhotoInfo = document.getElementById(
      'js-galleryPhotoDescription'
    );
    this.controls = document.querySelectorAll('.js-control');
    this.photosNumber = this.photos.length;

    const hammer = new Hammer(this.centerPhoto);

    this.backdrop.addEventListener('click', (e) => {
      if (e.target.classList.contains('js-backdrop')) {
        this.backdropClickHandler();
      }
    });

    this.extendPhotosHandler();
    this.controlsHandler();
    document.addEventListener('keyup', this.keyHandler.bind(this));

    hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammer.on('swipeleft', this.showNextPhoto.bind(this));
    hammer.on('swiperight', this.showPreviousPhoto.bind(this));

    hammer.on('swipeup', this.backdropClickHandler.bind(this));
    hammer.on('swipedown', this.backdropClickHandler.bind(this));
  }

  backdropClickHandler() {
    this.backdrop.classList.remove('js-active');
    this.centerPhoto.classList.remove('js-active');
  }

  extendPhotosHandler() {
    this.photos.forEach((photo) => {
      photo.addEventListener('click', (e) => {
        const photoSrc = e.target.getAttribute('src');
        const photoInfo = e.target.dataset.info;
        const photoNumber = +e.target.dataset.number;

        this.backdrop.classList.add('js-active');
        this.activePhoto.setAttribute('src', photoSrc);
        this.activePhoto.dataset.number = photoNumber;
        this.activePhotoInfo.textContent = photoInfo;
        this.centerPhoto.classList.add('js-active');
      });
    });
  }

  showPreviousPhoto() {
    const currentPhotoNumber = +this.activePhoto.dataset.number;
    const newPhotoNumber =
      currentPhotoNumber - 1 > 0 ? currentPhotoNumber - 1 : this.photosNumber;

    const newActivePhoto = Array.from(this.photos).filter(
      (photo) => +photo.dataset.number === +newPhotoNumber
    )[0];

    const newActivePhotoSrc = newActivePhoto.getAttribute('src');
    const newActivePhotoInfo = newActivePhoto.dataset.info;

    this.activePhoto.setAttribute('src', newActivePhotoSrc);
    this.activePhoto.dataset.number = newPhotoNumber;
    this.activePhotoInfo.textContent = newActivePhotoInfo;
  }

  showNextPhoto() {
    const currentPhotoNumber = +this.activePhoto.dataset.number;
    const newPhotoNumber =
      currentPhotoNumber + 1 > this.photosNumber ? 1 : currentPhotoNumber + 1;

    const newActivePhoto = Array.from(this.photos).filter(
      (photo) => +photo.dataset.number === +newPhotoNumber
    )[0];

    const newActivePhotoSrc = newActivePhoto.getAttribute('src');
    const newActivePhotoInfo = newActivePhoto.dataset.info;

    this.activePhoto.setAttribute('src', newActivePhotoSrc);
    this.activePhoto.dataset.number = newPhotoNumber;
    this.activePhotoInfo.textContent = newActivePhotoInfo;
  }

  controlsHandler(e) {
    this.controls.forEach((control) => {
      control.addEventListener('click', (e) => {
        if (e.target.classList.contains('js-previous')) {
          this.showPreviousPhoto();
        } else if (e.target.classList.contains('js-next')) {
          this.showNextPhoto();
        } else if (e.target.classList.contains('js-close')) {
          this.backdropClickHandler(e);
        }
      });
    });
  }

  keyHandler(e) {
    if (e.keyCode === 37) {
      this.showPreviousPhoto();
    } else if (e.keyCode === 39) {
      this.showNextPhoto();
    } else if (e.keyCode === 27) {
      this.backdropClickHandler();
    }
  }
}
