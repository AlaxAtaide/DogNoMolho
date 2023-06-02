const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const transitionOverlay = document.querySelector('.transition-overlay');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  transitionOverlay.classList.add('active');
  setTimeout(function () {
    window.location.href = 'index.html';
  }, 1000); // Tempo da animação de transição em milissegundos
});

var passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', function(event) {
  var password = passwordInput.value;

  // Verifica se o evento foi acionado por uma tecla de apagar
  if (event.inputType === 'deleteContentBackward' || event.inputType === 'deleteContentForward') {
    // Não aplica a formatação
    return;
  }

  // Remove todos os caracteres não numéricos da senha
  password = password.replace(/\D/g, '');

  // Limita a quantidade de caracteres numéricos a 8
  if (password.length > 8) {
    password = password.substring(0, 10);
  }

  // Adiciona a formatação correta (XX) XXXX-XXXX
  if (password.length >= 2) {
    password = '(' + password.substring(0, 2) + ') ' + password.substring(2);
    if (password.length >= 9) {
      password = password.substring(0, 9) + '-' + password.substring(9);
    }
  }

  // Atualiza o valor do campo de senha com a senha formatada
  passwordInput.value = password; 
  
  
});




// // Importe a biblioteca do Twilio
// const twilio = require('twilio');

// // Configure as credenciais do Twilio
// const accountSid = 'AC1a4328be6f04cdd38980db483e1d9182';
// const authToken = 'ee10543b790b1144b0ef1fef19ca4109';
// const client = new twilio(accountSid, authToken);

// // Função para gerar um código de confirmação
// function generateConfirmationCode() {
//   // Implemente a lógica para gerar o código de confirmação aqui
//   // Por exemplo, você pode usar uma biblioteca de geração de números aleatórios
//   return '123456'; // Código de exemplo
// }

// // Evento de envio do formulário
// document.getElementById('login-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Impede o envio do formulário padrão

//   // Obtenha o número de telefone digitado pelo usuário
//   const phoneNumber = document.getElementById('password').value;

//   // Gerar um código de confirmação
//   const confirmationCode = generateConfirmationCode();

//   // Enviar o código de confirmação via SMS
//   client.messages.create({
//     body: `Seu código de confirmação é: ${confirmationCode}`,
//     from: '+13613100829',
//     to: phoneNumber
//   })
//   .then(message => {
//     // Código executado quando a mensagem é enviada com sucesso
//     console.log('Mensagem enviada com sucesso:', message.sid);

//     // Redirecionar para a página de confirmação
//     window.location.href = 'confirm.html';
//   })
//   .catch(error => {
//     // Código executado quando ocorre um erro no envio da mensagem
//     console.error('Erro ao enviar a mensagem:', error);
//   });
// });
