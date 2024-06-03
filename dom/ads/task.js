const rotator = document.querySelector('.rotator');
const cases = document.querySelectorAll('.rotator__case');

let activeIndex = 0;

function changeCase() {
  const caseActive = document.querySelector('.rotator__case_active');
  const nextIndex = (activeIndex + 1) % cases.length;

  caseActive.classList.remove('rotator__case_active');
  cases[nextIndex].classList.add('rotator__case_active');
  activeIndex = nextIndex;

  setTimeout(changeCase, parseInt(cases[nextIndex].dataset.speed));
}

changeCase();