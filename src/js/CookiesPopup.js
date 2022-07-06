export class CookiesPopup {
  constructor() {
    this.popup = document.getElementById('cookiesPopup');
    this.acceptButton = document.getElementById('cookies-accept-button');
    this.areCookiesAllowed = this.getConsent();

    this.checkConsent();

    this.acceptButton.addEventListener('click', () => {
      this.saveConsent();
      this.hidePopup(true);
    });
  }

  checkConsent = () => {
    if (this.getConsent()) {
      this.hidePopup();
    }
  };

  getConsent = () =>
    localStorage.getItem('cookiesAllowed')
      ? JSON.parse(localStorage.getItem('cookiesAllowed'))
      : false;

  saveConsent = () => localStorage.setItem('cookiesAllowed', true);

  hidePopup = (buttonClicked = false) => {
    if (buttonClicked) {
      this.popup.classList.add('accepted');
    } else {
      this.popup.classList.add('hidden');
    }
  };
}
