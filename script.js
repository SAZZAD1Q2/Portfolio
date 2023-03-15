const btn = document.querySelector('#btn_hambrg');

btn.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar');

  navbar.style.disply = 'block';
  navbar.classList.toggle('show');
});

const crossBtn = document.querySelector('.cross_btn');

crossBtn.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar');

  navbar.classList.toggle('hide');
});
