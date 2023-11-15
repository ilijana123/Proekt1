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
document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');

    toggleButton.addEventListener('click', function () {
        navigation.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Променлива која ги претставува податоците за состојбата на најава
    let loggedIn = false;

    // Функција за прикажување на состојбата на најавата
    function updateLoginStatus() {
        const loginStatusElement = document.getElementById('loginStatus');

        if (loggedIn) {
            loginStatusElement.textContent = 'Најавени сте!';
        } else {
            loginStatusElement.textContent = 'Не сте најавени.';
        }
    }

    // Функција за најава
    function login() {
        // Симулација на проверка за веќе најавен корисник
        if (!loggedIn) {
            // Симулација на успешна најава
            loggedIn = true;

            // Повикај го ажурирањето на состојбата на најавата
            updateLoginStatus();
        }
    }

    // Додавање на event listener за најава на копчето
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', login);

    // Иницијализација на состојбата на најавата
    updateLoginStatus();
});
function updateLoginStatus() {
    // Да се извлече информацијата за најава од сесијата, локално схладилиште или друг механизам
    const isLoggedIn = checkIfUserIsLoggedIn(); // Ова е само пример, треба да го прилагодите според вашите потреби

    const loginStatusElement = document.getElementById('loginStatus');

    if (isLoggedIn) {
        loginStatusElement.textContent = 'Најавени сте!';
    } else {
        loginStatusElement.textContent = 'Не сте најавени.';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const shopMenu = document.getElementById('shopMenu');
    const categoryMenu = document.getElementById('categoryMenu');

    // Додајте event listener за mouseenter на "Shop" за да прикажете категории
    shopMenu.addEventListener('mouseenter', function () {
        categoryMenu.classList.remove('hidden');
    });

    // Додајте event listener за mouseleave на "Shop" за да исчезнат категориите
    shopMenu.addEventListener('mouseleave', function () {
        categoryMenu.classList.add('hidden');
    });
});


function showCategory(category) {
    // Скриј ги сите категории
    hideAllCategories();

    // Прикажи ја само избраната категорија
    var selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.classList.remove('cs-hidden');
    }
}

function hideAllCategories() {
    // Скриј ги сите категории
    var allCategories = document.querySelectorAll('.container');
    allCategories.forEach(function(category) {
        category.classList.add('cs-hidden');
    });
}

function likeProduct(productId) {
    // Implement like functionality for the specified product
    console.log(`Liked product ${productId}`);
}

function commentProduct(productId) {
    // Implement comment functionality for the specified product
    console.log(`Commented on product ${productId}`);
}

function orderProduct(productId) {
    // Implement order functionality for the specified product
    console.log(`Ordered product ${productId}`);
}
document.addEventListener('DOMContentLoaded', function() {
    // Get the Log In link by its id
    var loginLink = document.getElementById('loginLink');

    // Add a click event listener
    loginLink.addEventListener('click', function() {
        // Redirect to login.html
        window.location.href = 'login.html';
    });
});