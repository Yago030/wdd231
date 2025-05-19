const container = document.getElementById('directory');
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');

gridBtn.addEventListener('click', () => {
  container.classList.add('grid');
  container.classList.remove('list');
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
  container.classList.add('list');
  container.classList.remove('grid');
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');
});
