//const elementoDuvida = document.querySelectorAll('.duvida')

//elementoDuvida.forEach(duvida => {
//    duvida.addEventListener('click', () => {
//        duvida.classList.toggle('ativa')
//    })
//})

var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener('click', function () {
    duvida.classList.toggle('ativa')
  })
})