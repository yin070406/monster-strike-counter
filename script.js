let count = localStorage.getItem('count') || 0;

document.getElementById('count').textContent = count;

document.getElementById('incrementBtn').addEventListener('click', function() {
  count++;
  document.getElementById('count').textContent = count;
  localStorage.setItem('count', count);
});

document.getElementById('resetBtn').addEventListener('click', function() {
  count = 0;
  
  document.getElementById('count').textContent = count;
  localStorage.setItem('count', count);
});