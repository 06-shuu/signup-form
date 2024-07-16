function confirmation(event) {
    const passwd = document.querySelector('#passwd');
    const confPasswd = document.querySelector('#confpasswd');
    const errorMsg = document.querySelector('#error-msg');

    if (passwd.value !== confPasswd.value) {
        event.preventDefault(); 
        passwd.style.borderColor = "#ff0000";
        confPasswd.style.borderColor = "#ff0000";
        errorMsg.innerHTML = `* Passwords do not match`;

    } else {
        errorMsg.textContent = '';
    }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', confirmation);
