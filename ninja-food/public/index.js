const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', (e) => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});

const clickablDivs = document.getElementsByClassName("clickable-div");

Array.from(clickablDivs).forEach(function (div) {
  
  div.addEventListener('click', function (){
    window.open(div.id + ".html", '_blank')
  })
})