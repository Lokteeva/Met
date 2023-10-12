const search = document.querySelector('#search');
const headerInfo = document.querySelector('#header-info');
const Input = document.querySelector('#input');

search.addEventListener('click', function(){
  headerInfo.classList.add('hidden');
  Input.classList.remove('hidden');
})



