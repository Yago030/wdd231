document.querySelectorAll('[data-modal]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.dataset.modal;
    const modal = document.getElementById(targetId);
    if (modal) modal.style.display = 'flex';
  });
});

document.querySelectorAll('.modal .close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'none';
    });
  }
});
