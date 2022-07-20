import { Hamburger } from './js/Hamburger';
import { CookiesPopup } from './js/CookiesPopup';
import { Form } from './js/Form';

class Home {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
      new CookiesPopup();
      new Form();
    });
  }
}

Home.init();
