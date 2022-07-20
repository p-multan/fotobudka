import { Hamburger } from './js/Hamburger';
import { CookiesPopup } from './js/CookiesPopup';
import { Form } from './js/Form';

classHome {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
      new CookiesPopup();
      new Form();
    });
  }
}
Home.init();
