const messageElement = document.getElementById('message');
const changeBtn = document.getElementById('changeBtn');
function changeMessage() {
  messageElement.textContent = 'Hello there!';
}
changeBtn.addEventListener('click', changeMessage);