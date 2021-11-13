///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.getElementById('nav-icon');
const headerEl = document.getElementsByClassName('collapsed-menu');
const listEl = document.getElementsByClassName('collapsed-list');

btnNavEl.addEventListener('click', function () {
  if (headerEl[0].classList[1] === 'no-active') {
    headerEl[0].classList.add('is-active');
    listEl[0].classList.add('is-active');
    headerEl[0].classList.remove('no-active');
    listEl[0].classList.remove('no-active');
	btnNavEl.classList.add('open')
  } else {
    headerEl[0].classList.remove('is-active');
    listEl[0].classList.remove('is-active');
	btnNavEl.classList.remove('open')
    headerEl[0].classList.add('no-active');
    listEl[0].classList.add('no-active');

  }
});


