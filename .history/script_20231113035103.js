document.addEventListener('DOMContentLoaded', function () {
    const searchToggle = document.querySelector('.search');
    const searchBar = document.querySelector('.search-bar');

    searchToggle.addEventListener('click', function () {
        searchBar.classList.toggle('active');
    });
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
const productLink = 'https://example.com/product-1';

fetch(productLink)
    .then(response => response.text())
    .then(html => {
        const productDescription = extractProductDescription(html);
        console.log('Product Description:', productDescription);
        const productImages = extractProductImages(html);
        console.log('Product Images:', productImages);
    });

function extractProductDescription(html) {
  const descriptionElement = document.querySelector('.product-description');
          return descriptionElement.innerText;
}

function extractProductImages(html) {
  const imageElements = document.querySelectorAll('.product-image');
          return Array.from(imageElements).map(imageElement => imageElement.src);
}
const instagramContainer = document.querySelector('.mini-instagram');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Патеки до вашите слики
const comments = ['Comment 1', 'Comment 2', 'Comment 3']; // Коментари за сликите

images.forEach((image, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = 'Instagram Image';

    const commentElement = document.createElement('p');
    commentElement.textContent = comments[index];

    const postElement = document.createElement('div');
    postElement.appendChild(imgElement);
    postElement.appendChild(commentElement);

    instagramContainer.appendChild(postElement);
});

// Пример за лајкови
const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Додадете код за обработка на лајковите
        alert('Liked!');
    });
});

});