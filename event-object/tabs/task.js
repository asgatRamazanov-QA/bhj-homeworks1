const tabs = document.getElementById('tabs1');
const tabsNavigation = tabs.querySelector('.tab__navigation');
const tabContents = tabs.querySelector('.tab__contents');
const tabsArray = tabs.querySelectorAll('.tab');

tabsNavigation.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('tab')) {
    const tabIndex = Array.prototype.indexOf.call(tabsArray, target);
    showTabContent(tabIndex);
  }
});

function showTabContent(tabIndex) {
  tabsArray.forEach((tab, index) => {
    if (index === tabIndex) {
      tab.classList.add('tab_active');
      document.querySelectorAll('.tab__content')[index].classList.add('tab__content_active');
    } else {
      tab.classList.remove('tab_active');
      document.querySelectorAll('.tab__content')[index].classList.remove('tab__content_active');
    }
  });
}