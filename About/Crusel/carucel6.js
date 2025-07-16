const toggleBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-menu');
    const sideMenu = document.getElementById('side-menu');

    toggleBtn.onclick = () => sideMenu.classList.add('open');
    closeBtn.onclick = () => sideMenu.classList.remove('open');

    const buttons = document.querySelectorAll('.sidebar button');
const sections = document.querySelectorAll('.content-section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    
    sections.forEach(sec => {
      sec.style.display = sec.id === targetId ? 'block' : 'none';
    });
  });
});