const progress = document.getElementById('progress');
const form = document.getElementById('form');
const fileInput = document.getElementById('file');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', (e) => {
    const percent = Math.round((e.loaded / e.total) * 100);
    progress.value = percent / 100;
  });
  xhr.open('POST', form.action, true);
  xhr.send(new FormData(form));
});