import { Hamburger } from './js/Hamburger';
import { CookiesPopup } from './js/CookiesPopup';
import { Gallery } from './js/Gallery';


classHome {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
      new CookiesPopup();
      new Gallery();
    });
  }
}
Home.init();