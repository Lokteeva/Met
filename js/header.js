const search = document.querySelector('#search');
const headerInfo = document.querySelector('#header-info');
const Input = document.querySelector('#input');

search.addEventListener('click', function(){
  headerInfo.classList.add('hidden');
  Input.classList.remove('hidden');
})

//promptNav
const promptNav = document.querySelector('.promptNavPR');
const PR = document.querySelector('#PR');

PR.addEventListener('mouseover', function(){
  promptNav.classList.remove('hidden');
})

PR.addEventListener('mouseout', function(){
  promptNav.classList.add('hidden');
})


