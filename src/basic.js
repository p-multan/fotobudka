import { Hamburger } from './js/Hamburger';
import { CookiesPopup } from './js/CookiesPopup';

class Basic {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
      new CookiesPopup();
    });
  }
}

Basic.init();
