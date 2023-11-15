function btnClicked()
{
    document.location.href="html1.html";
}
document.querySelector('.login-active').addEventListener('click', function() {
    document.querySelector('.form').classList.add('login-active');
});

document.querySelector('.sign-up-active').addEventListener('click', function() {
    document.querySelector('.form').classList.add('sign-up-active');
});

document.querySelector('.form-cancel').addEventListener('click', function() {
    document.querySelector('.form').classList.remove('login-active', 'sign-up-active');
});
 