document.addEventListener('DOMContentLoaded', () => {
// Obtém referência ao botão "Pagar"
const pagarButton = document.getElementById("pagar");

// Obtém referência ao modal
const modal = document.getElementById("modal");

// Adiciona um evento de clique ao botão "Pagar"
pagarButton.addEventListener("click", function() {
  // Exibe o modal
  modal.style.display = "block";
});

// Fecha o modal quando o usuário clicar fora da área do modal
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Obtém referência aos botões do modal
const modalPixButton = document.getElementById("modal-pix");
const modalCartaoButton = document.getElementById("modal-cartao");

// Adiciona um evento de clique ao botão "PIX"
modalPixButton.addEventListener("click", function() {
  // Faça algo quando o usuário selecionar a opção PIX
  console.log("Opção selecionada: PIX");
  // Feche o modal
  modal.style.display = "none";
});

// Adiciona um evento de clique ao botão "Cartão de Crédito"
modalCartaoButton.addEventListener("click", function() {
  // Faça algo quando o usuário selecionar a opção Cartão de Crédito
  console.log("Opção selecionada: Cartão de Crédito");
  // Feche o modal
  modal.style.display = "none";
});
});

document.addEventListener('DOMContentLoaded', () => {
   // Função para carregar o conteúdo da página de checkout no modal
   function loadCheckoutModal() {
    var modalContainer = document.getElementById('modalContainer');

    // Cria um elemento iframe
    var iframe = document.createElement('iframe');
    iframe.src = 'CheckoutCart.html';
    iframe.frameBorder = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    // Adiciona o iframe ao container modal
    modalContainer.appendChild(iframe);

    // Exibe o modal
    modalContainer.style.display = 'block';
  }

  // Função para fechar o modal
  function closeCheckoutModal() {
    var modalContainer = document.getElementById('modalContainer');

    // Remove o conteúdo do modal
    modalContainer.innerHTML = '';

    // Oculta o modal
    modalContainer.style.display = 'none';
  }

  // Adiciona o evento de clique ao botão de modal-cartao
  var modalCartaoButton = document.getElementById('modal-cartao');
  modalCartaoButton.addEventListener('click', loadCheckoutModal);
});