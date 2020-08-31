document
  .querySelector('.faq__block')
  .addEventListener('click', (e) => {
    const element = e.target.closest('.faq__item');
    if (element) {
      e.target.closest('.faq__item').classList.toggle('faq__item-hide');
    }
  });
