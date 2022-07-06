import { Hamburger } from './js/Hamburger';

class Basic {
  static init() {
    document.addEventListener('DOMContentLoaded', () => {
      new Hamburger();
    });
  }
}

Basic.init();
