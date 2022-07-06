export class Hamburger {
  constructor() {
    this.hamburgerIcon = document.getElementById('js-hamburger');
    this.navigationMenu = document.getElementById('js-menu');
    this.navigationMenuItems = document.querySelectorAll(
      '.navbar__links-menu-item-link'
    );

    this.hamburgerIcon.addEventListener(
      'click',
      this.menuVisibilityHandler.bind(this)
    );

    this.navigationMenuItems.forEach((item) => {
      item.addEventListener('click', this.menuCloser.bind(this));
    });
  }

  menuVisibilityHandler() {
    this.navigationMenu.classList.toggle('js-menu-open');
  }

  menuCloser() {
    this.navigationMenu.classList.remove('js-menu-open');
  }
}
