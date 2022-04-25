const mainDiv = document.getElementById('main-page');

mainDiv.addEventListener('submit', (event) => { 
  event.preventDefault();
  console.log(event.target);
  const { cardid } = event.target;
  console.log('ОПАААА', cardid);
})
