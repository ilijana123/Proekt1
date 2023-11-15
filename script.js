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
    let loggedIn = false;
    function updateLoginStatus() {
        const loginStatusElement = document.getElementById('loginStatus');

        if (loggedIn) {
            loginStatusElement.textContent = 'Најавени сте!';
        } else {
            loginStatusElement.textContent = 'Не сте најавени.';
        }
    }

    function login() 
    {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
    
        if (email=== "simonovskailijana1@gmail.com" && password === "ilijana") {
            window.location.href = "html.html";
        } else {
            alert("Invalid username or password.");
        }
    }
    document.getElementById("loginButton").addEventListener("click", login);
    updateLoginStatus();
});
document.addEventListener('DOMContentLoaded', function () {
    
    function sign() 
    {   
            window.location.href = "html.html"; 
    }
    var signupButton = document.getElementById("signupButton");
    if (signupButton) {
        signupButton.addEventListener("click", sign);
    } else {
        console.error("Element with id 'signupButton' not found.");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    function submit() 
    {   
            window.location.href = "html.html"; 
    }
    var submitB = document.getElementById("submit");
    if (submitB) {
        submitB.addEventListener("click", submit);
    } else {
        console.error("Element with id 'submit' not found.");
    }
});


function updateLoginStatus() {
    const isLoggedIn = checkIfUserIsLoggedIn(); 

    const loginStatusElement = document.getElementById('loginStatus');

    if (isLoggedIn) {
        loginStatusElement.textContent = 'Најавени сте!';
    } else {
        loginStatusElement.textContent = 'Не сте најавени.';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var loginLink = document.getElementById("loginLink");

    if (loginLink) {
        loginLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "html.html"; 
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const shopMenu = document.getElementById('shopMenu');
    const categoryMenu = document.getElementById('categoryMenu');
    shopMenu.addEventListener('mouseenter', function () {
        categoryMenu.classList.remove('hidden');
    });
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
    var allCategories = document.querySelectorAll('.container');
    allCategories.forEach(function(category) {
        category.classList.add('cs-hidden');
    });
}

function likeProduct(productId) {
    console.log(`Liked product ${productId}`);
}

function commentProduct(productId) {
    console.log(`Commented on product ${productId}`);
}

function orderProduct(productId) {
    console.log(`Ordered product ${productId}`);
}
document.addEventListener('DOMContentLoaded', function() {
    var loginLink = document.getElementById('loginLink');
    loginLink.addEventListener('click', function() {
        window.location.href = 'html1.html';
    });
});
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function addToCart(id, name, price, size) {
    debugger;
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cartItems.find(item => item.id === id && item.size === size);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            id: id,
            name: name,
            price: price,
            quantity: 1,
            size: size
        });
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    let cartTableBody = document.getElementById('cart-items');
    cartTableBody.innerHTML = '';

    cartItems.forEach(item => {
        let row = document.createElement('tr');

        let removeColumn = document.createElement('td');
        removeColumn.innerHTML = `<a href="#" onclick="removeCartItem(${item.id})"><i class="far fa-times-circle"></i></a>`;
        row.appendChild(removeColumn);

        // Column for image
        let imageColumn = document.createElement('td');
        imageColumn.innerHTML = `<img src="${item.image}" alt="${item.name}">`;
        row.appendChild(imageColumn);

        // Column for product name
        let nameColumn = document.createElement('td');
        nameColumn.textContent = item.name;
        row.appendChild(nameColumn);

        // Column for unit price
        let priceColumn = document.createElement('td');
        priceColumn.textContent = `$${item.price.toFixed(2)}`;
        row.appendChild(priceColumn);

        // Column for quantity input
        let quantityColumn = document.createElement('td');
        quantityColumn.innerHTML = `<input type="number" value="${item.quantity}" name="quantity" id="quantity${item.id}" onchange="updateCartItem(${item.id})">`;
        row.appendChild(quantityColumn);

        // Column for total price
        let totalColumn = document.createElement('td');
        totalColumn.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
        row.appendChild(totalColumn);

        cartTableBody.appendChild(row);
    });
}

function removeCartItem(itemId) {
    debugger;
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    let itemToRemove = cartItems.find(item => item.id === itemId);

    if (itemToRemove) {
        itemToRemove.quantity--;

        if (itemToRemove.quantity === 0) {
            cartItems = cartItems.filter(item => item.id !== itemId);
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        window.location.reload();
    }
}
const likeButton = document.getElementById('like-button');
  const likeCountElement = document.getElementById('like-count');

  let likeCount = JSON.parse(localStorage.getItem('likeCount')) || 0;
  likeCountElement.innerText = likeCount;
  likeButton.addEventListener('click', () => {
    likeCount++;
    likeCountElement.innerText = likeCount;
    localStorage.setItem('likeCount', JSON.stringify(likeCount));
  });
new Vue({
    el: "#app",
    data:{
       title: 'Add a comment',
      newItem: '',
      item: [],
    },
    methods:{
      addItem  (){
      this.item.push(this.newItem);
        this.newItem = "";
      }
  }
 
  });
  document.addEventListener('DOMContentLoaded', function () {
    const categoryMenu = document.getElementById('categoryMenu');
    const shopLink = document.getElementById('shopLink');

    // Toggle category menu visibility on Shop link hover
    shopLink.addEventListener('mouseenter', function () {
        categoryMenu.classList.remove('hidden');
    });

    // Hide category menu on Shop link mouse leave
    shopLink.addEventListener('mouseleave', function () {
        categoryMenu.classList.add('hidden');
    });

    // Scroll to corresponding section on category link click
    categoryMenu.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const targetSectionId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                categoryMenu.classList.add('hidden'); // Hide the menu after clicking a category link
            }
        }
    });
});
function removeFun()
{
    var dog=document.getElementById("w1");
    dog.remove();
}
function addImage() {
    var input = document.getElementById("imageInput");
    var files = input.files;

    if (files.length > 0) {
        var img = document.createElement("img");
        var reader = new FileReader();

        reader.onload = function (e) {
            img.src = e.target.result;
            img.style.marginRight = '10px';

            var container = document.createElement("div");
            container.classList.add("image-container");

            var deleteButton = document.createElement("button");
            deleteButton.innerText = "X";
            deleteButton.classList.add("delete-button");
            deleteButton.onclick = function () {
                container.remove();
            };

            container.appendChild(img);
            container.appendChild(deleteButton);

            document.getElementById("main").appendChild(container);
        };

        reader.readAsDataURL(files[0]);
    }
}
function zoom(clickedImg) {
    var zoomedImage = document.getElementById('zoomedImage');
    var zoomedImg = document.getElementById('zoomedImg');

    zoomedImg.src = clickedImg.src;
    zoomedImage.style.display = 'flex';
}

function hideZoom() {
    var zoomedImage = document.getElementById('zoomedImage');
    zoomedImage.style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function () {
    var shopDropdown = document.getElementById("shopDropdown");
    var categoryMenu = document.getElementById("categoryMenu");

    // Show/hide dropdown on hover
    shopDropdown.addEventListener("mouseover", function () {
        categoryMenu.classList.remove("hidden");
    });

    shopDropdown.addEventListener("mouseout", function () {
        categoryMenu.classList.add("hidden");
    });

    // Navigate to the corresponding section on click
    categoryMenu.addEventListener("click", function (event) {
        var target = event.target;
        if (target.tagName === "A") {
            var targetSectionId = target.getAttribute("href");
            document.querySelector(targetSectionId).scrollIntoView({ behavior: "smooth" });
            categoryMenu.classList.add("hidden");
            event.preventDefault();
        }
    });
});