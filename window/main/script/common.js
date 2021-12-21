//import * as d3 from "https://cdn.skypack.dev/d3@7"
//import * as d3 from 'd3'


























var titles = document.querySelectorAll('#nav_div label')


for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', function(e) {
    this.classList.add('bg-gray-900','text-white')
    this.classList.remove('text-gray-300')
    for(let j = 0; j <titles.length; j++){
      if(i != j){
        titles[j].classList.remove('bg-gray-900','text-white')
        titles[j].classList.add('text-gray-300')
      }
    }
  });
}


