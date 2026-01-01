
  const carroussel = document.querySelector('.carroussel');
  const fotos = document.querySelectorAll('.foto');
  const izquierda = document.querySelector('.flecha-izquierda');
  const derecha = document.querySelector('.flecha-derecha');
  let index = 0;

  function MostrarFotos(i) {
    if (i < 0){
        index = fotos.length - 1;
    }
    else if (i >= fotos.length){
        index = 0;

    } else{

        index = i;
    } 

    carroussel.style.transform = `translateX(-${index * 100}%)`;
  }

  izquierda.addEventListener('click', () => MostrarFotos(index - 1));

  derecha.addEventListener('click', () => MostrarFotos(index + 1));

  function cerrarModal() {
  const modal = document.getElementById('avisoModal');
  modal.style.display = 'none';
}


