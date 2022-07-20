export function ShowAlert(msg, className) {
  const form = document.getElementById('js-contactForm');
  const div = document.createElement('div');

  div.className = `contact-section__alert contact-section__alert--${className}`;
  div.appendChild(document.createTextNode(msg));

  form.insertAdjacentElement('beforebegin', div);

  setTimeout(() => {
    document.querySelector('.contact-section__alert').remove();
  }, 5000);
}
