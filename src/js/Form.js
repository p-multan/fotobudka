import { ShowAlert } from './ShowAlert';

export class Form {
  constructor() {
    this.formDOM = document.getElementById('js-contactForm');
    this.formURL = 'https://formspree.io/f/xgedgyeb';

    this.formDOM.addEventListener('submit', this.formHandler.bind(this));
  }

  formHandler(e) {
    e.preventDefault();

    const data = {
      imie: e.target.name.value,
      email: e.target.email.value,
      telefon: e.target.phone.value,
      temat: e.target.subject.value,
      wiadomosc: e.target.message.value,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    fetch(this.formURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resContent) => {
        if ('error' in resContent) {
          this.formDOM.reset();
          ShowAlert(
            'Niestety wiadomość nie została wysłana, prosimy jeszcze raz wysłać poprawnie wypełniony formularz, jeżeli próba znowu się nie powiedzie prosimy o bezpośredni kontakt mailowy / telefoniczny',
            'fail'
          );
        } else {
          this.formDOM.reset();
          ShowAlert(
            'Dziękujemy za kontakt, postaramy się odpowiedzieć w możliwie najkrótszym czasie.',
            'success'
          );
        }
      })
      .catch((err) => {
        this.formDOM.reset();
        ShowAlert(
          'Niestety wiadomość nie została wysłana, prosimy jeszcze raz wysłać poprawnie wypełniony formularz, jeżeli próba znowu się nie powiedzie prosimy o bezpośredni kontakt mailowy / telefoniczny',
          'fail'
        );
      });
  }
}
