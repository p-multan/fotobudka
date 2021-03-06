import './style.scss';
import { Hamburger } from './js/Hamburger';
import { Gallery } from './js/Gallery';
import { Form } from './js/Form';
import { CookiesPopup } from './js/CookiesPopup';

class Basic {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
      // new Gallery();
      new Form();
      new CookiesPopup();
    });
  }
}

Basic.init();
