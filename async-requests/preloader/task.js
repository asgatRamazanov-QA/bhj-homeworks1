
fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then(response => response.json())
  .then(data => {
    const items = document.getElementById('items');
    const loader = document.getElementById('loader');

    // очистить контент элемента #items
    items.innerHTML = '';

    // итерироваться по валютам
    Object.keys(data.response.Valute).forEach((key) => {
      const item = document.createElement('div');
      item.className = 'item';

      const codeElement = document.createElement('div');
      codeElement.className = 'item__code';
      codeElement.textContent = data.response.Valute[key].CharCode;

      const valueElement = document.createElement('div');
      valueElement.className = 'item__value';
      valueElement.textContent = data.response.Valute[key].Value.toFixed(2);

      const currencyElement = document.createElement('div');
      currencyElement.className = 'item__currency';
      currencyElement.textContent = ' руб.';

      item.appendChild(codeElement);
      item.appendChild(valueElement);
      item.appendChild(currencyElement);

      items.appendChild(item);
    });

    // скрыть анимацию загрузки
    loader.classList.remove('loader_active');
  })
  .catch((error) => console.error(error));