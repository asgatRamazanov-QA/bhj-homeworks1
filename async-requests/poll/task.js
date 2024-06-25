
fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');
    pollTitle.textContent = data.data.title;
    data.data.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.textContent = answer;
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
      pollAnswers.appendChild(button);
    });
  });