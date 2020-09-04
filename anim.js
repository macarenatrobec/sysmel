
var someElement = document.querySelector('#inView');

window.onscroll = function(){
    if(someElement.getBoundingClientRect().bottom <= 0){
        function counter(id, start, end, duration) {
            let obj = document.getElementById(id),
             current = start,
             range = end - start,
             increment = end > start ? 1 : -1,
             step = Math.abs(Math.floor(duration / range)),
             timer = setInterval(() => {
              current += increment;
              obj.textContent = current;
              if (current == end) {
               clearInterval(timer);
              }
             }, step);
           }
           counter("count1", 0, 13, 1000);
           counter("count2", 0, 295, 1000);
           counter("count3", 0, 106, 1000);
           counter("count4", 0, 35, 1000);
    }
}

// para modificar contadores: en los llamados a la funcion counter() se modifica el tercer parámetro, siendo este el número a mostrar en la vista. 