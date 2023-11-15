document.addEventListener('DOMContentLoaded', function () {
    // Toggle search bar
    const searchToggle = document.querySelector('.search');
    const searchBar = document.querySelector('.search-bar');

    searchToggle.addEventListener('click', function () {
        searchBar.classList.toggle('active');
    });

    // Toggle login and sign-up forms
    const loginBtn = document.querySelector('.user');
    const loginForm = document.querySelector('.login-form');
    const signUpForm = document.querySelector('.sign-up-form');
    const formCancelBtns = document.querySelectorAll('.form-cancel');
    const signUpBtn = document.querySelector('.sign-up-btn');
    const alreadyAccountBtn = document.querySelector('.already-account');

    loginBtn.addEventListener('click', function () {
        loginForm.style.display = 'flex';
    });

    signUpBtn.addEventListener('click', function () {
        signUpForm.style.display = 'flex';
    });

    alreadyAccountBtn.addEventListener('click', function () {
        loginForm.style.display = 'flex';
        signUpForm.style.display = 'none';
    });

    formCancelBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            loginForm.style.display = 'none';
            signUpForm.style.display = 'none';
        });
    });

    // Your other JavaScript functionality here
    // ...

});
const productLink = 'https://example.com/product-1';

fetch(productLink)
    .then(response => response.text())
    .then(html => {
        // Пример за динамичко преземање текст
        const productDescription = extractProductDescription(html);
        console.log('Product Description:', productDescription);

        // Пример за динамичко преземање слики
        const productImages = extractProductImages(html);
        console.log('Product Images:', productImages);
    });

function extractProductDescription(html) {
    // Додадете код за преземање на описот од HTML
    // Пример: const descriptionElement = document.querySelector('.product-description');
    //        return descriptionElement.innerText;
}

function extractProductImages(html) {
    // Додадете код за преземање на сликите од HTML
    // Пример: const imageElements = document.querySelectorAll('.product-image');
    //        return Array.from(imageElements).map(imageElement => imageElement.src);
}