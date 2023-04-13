

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
