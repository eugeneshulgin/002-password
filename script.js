let passwordInput = document.querySelector('.password');
let passwordButton = document.querySelector('.show-button');
let bodyEl = document.querySelector('body');

passwordButton.addEventListener('mousedown', showPass);
bodyEl.addEventListener('mouseup', showText);

function showPass() {
		passwordInput.type = 'text';
		passwordButton.innerHTML = 'hide';
}
function showText(){
		passwordInput.type = 'password';
		passwordButton.innerHTML = 'show';
}