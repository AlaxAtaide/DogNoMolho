

// Efeito Underline na página ativa (Underline Effect in the active page)
const currentLocation = location.href;
const menuItems = document.querySelectorAll('.nav-links a');
const menuLength = menuItems.length;

for (let i = 0; i < menuLength; i++) {
  if (menuItems[i].href === currentLocation) {
    menuItems[i].classList.add('active');
  }
}

// Efeito Modo Noturno (DARK MODE)
const header = document.querySelector('.body'); 
const icon = document.querySelector('.icon-js');


// Verifica o modo ativo pelo usuário a última vez que entrou
window.addEventListener('load', () => {
  const header = document.querySelector('.body'); 
  const icon = document.querySelector('.icon-js');

// Verifica o valor armazenado no localStorage (Dessa forma será aplicado entre light/dark em todas as páginas ao apertar o botão)
  if (localStorage.getItem('modoNoturno') === 'ativado') {
    header.classList.add('dark'); // Aplicar estilo de modo noturno
  }

  icon.addEventListener('click', () => {
    header.classList.toggle('dark');
    if (header.classList.contains('dark')) {
      localStorage.setItem('modoNoturno', 'ativado'); // Armazenar estado do modo noturno no localStorage
    } else {
      localStorage.removeItem('modoNoturno'); // Remover estado do modo noturno do localStorage
    }
  });
});




// INICIO DO BACK-END DO SITE

// CARRINHO DE COMPRA (SHOPPING CAR)

// Garante que o DOM tenha sido carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
  // Cria o seletor do elemento (button)
  let carts = document.querySelectorAll('.button');

  // Seletor dos elementos de produtos (neste exemplo, assumindo que cada produto tem a classe 'product')
  let products = document.querySelectorAll('.card');

  let productsData = []; // Array para armazenar os dados dos produtos

  // Itera sobre os elementos de produtos para extrair os dados
  products.forEach(product => {
    let name = product.querySelector('.name').textContent; // Nome do produto
    let desc = product.querySelector('.desc').textContent; // Descrição (tag) do produto
    let price = parseInt(product.querySelector('.price').textContent); // Preço do produto (convertido para número)

    // Armazena os dados em um objeto
    let productData = {
      name: name,
      desc: desc,
      price: price,
      inCart: 0
    };

    // Adiciona o objeto de dados do produto ao array
    productsData.push(productData);
  });

  
    // Loop para ir de 0 até a quantidade de elementos (cards) da minha página
  for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
      cartNumbers(productsData[i]); 
      custoTotal(productsData[i])
    })
  }

    // Função para atualizar o número de itens no carrinho quando a página é carregada
  function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');  
    // Verifica se há itens no carrinho no localStorage
    if (productNumbers) {
      document.querySelector('.qtdcart').textContent = productNumbers;


    // Atualiza a visibilidade do elemento .qtdcart
    if (parseInt(productNumbers) > 0) {
      document.querySelector('.qtdcart').style.visibility = 'visible';
    } else {
      document.querySelector('.qtdcart').style.visibility = 'hidden';
    }
    }
  }
  
  function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers)

    if (productNumbers) {
      localStorage.setItem('cartNumbers', productNumbers + 1);
      document.querySelector('.qtdcart').textContent = productNumbers + 1;
    } else {
      localStorage.setItem('cartNumbers', 1);
      document.querySelector('.qtdcart').textContent = 1;
    }

    // Atualiza a visibilidade do elemento .qtdcart
    if (parseInt(localStorage.getItem('cartNumbers')) > 0) {
      document.querySelector('.qtdcart').style.visibility = 'visible';
    } else {
      document.querySelector('.qtdcart').style.visibility = 'hidden';
    }

    setItems(product);

    function setItems(product) {
      let cartItems = localStorage.getItem('productsInCart')
      cartItems = JSON.parse(cartItems)


      if(cartItems != null) {

        if(cartItems[product.desc] == undefined) {
          cartItems = {
            ...cartItems,
            [product.desc]: product
          }
        }
        cartItems[product.desc].inCart += 1;
      } else {
        product.inCart = 1;
        cartItems = {
          [product.desc]: product
        }
      }


    
      localStorage.setItem("productsInCart", JSON.stringify
      (cartItems));
    }

  }

  function custoTotal(product) {

        //console.log("O preço do produto é", product.price);
 
        let cartCusto = localStorage.getItem('custoTotal');

        console.log("Meu custoTotal é", cartCusto);
        console.log(typeof cartCusto);
      
    
      if(cartCusto != null) {
        cartCusto = parseInt(cartCusto);
        localStorage.setItem("custoTotal", cartCusto +
         product.price);
      } else {
        localStorage.setItem("custoTotal", product.price);
      }

  }



  // Chama a função onLoadCartNumbers() para atualizar o número de itens no carrinho quando a página for carregada
  onLoadCartNumbers();


});
