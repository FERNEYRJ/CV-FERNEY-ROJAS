const button = document.querySelector('.back-to-top');

if (button) {
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
