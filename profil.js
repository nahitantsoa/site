let button = document.querySelector('#mode');
let span = document.querySelector ('span');

if(localStorage.getItem('theme')){
  if (localStorage.getItem('theme') == 'sombre') {
    modeSombre();
  }
}

button.addEventListener('click', () => {
  if(document.body.classList.contains('dark')){
   
    document.body.classList = '';
    span.textContent = 'Thème sombre';
    localStorage.SetItem ('theme', 'clair');
  }
  else {
    modeSombre();
  }
});

function modeSombre() {
  document.body.className = 'dark';
  span.textContent = 'Thème clair';
  localStorage.SetItem('theme', 'sombre');
}
   