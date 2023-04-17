// INICIO DO BACK-END DO SITE

// CARRINHO DE COMPRA (SHOPPING CAR)

//garante que o DOM tenha sido carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    let carts = document.querySelectorAll('.button');
  
    //loop para ir de 0 até a quantidade de elementos (cards) da minha página
    for (let i=0; i < carts.length; i++) {
      carts[i].addEventListener('click', () => {
        console.log("adicionar ao carrinho"); 
      })
    }
  });
  
  