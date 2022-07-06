import { Hamburger } from './js/Hamburger';
import { CookiesPopup } from './js/CookiesPopup';
import { Gallery } from './js/Gallery';

class Basic {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
      new CookiesPopup();
      new Gallery();
    });
  }
}

Basic.init();
