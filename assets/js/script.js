const dynamicText = document.querySelector("h1 span");
if (dynamicText) {
    const words = ["Sinehan", "a Web Developer", "a Student", "a Programmer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeEffect = () => {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        dynamicText.textContent = currentChar;
        dynamicText.classList.add("stop-blinking");
        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, 70);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 70);
        } else {
            isDeleting = !isDeleting;
            dynamicText.classList.remove("stop-blinking");
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
            setTimeout(typeEffect, 1200);
        }
    }
    typeEffect();
}

document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementsByClassName("loader-container")[0];
    loadingScreen.style.opacity = 0;
    setTimeout(() => loadingScreen.style.display = "none", 700);
});

function scrollToContainer(containerId) {
    const container = document.getElementById(containerId);
    container.scrollIntoView({ behavior: 'smooth' });
}

function openURL() {
    window.open('https://github.com/sinehan001', '_blank');
}

function openWallet() {
    window.location.href = "wallet.html";
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#goToTopBtn').fadeIn();
        } else {
            $('#goToTopBtn').fadeOut();
        }
    });

    $('#goToTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 0);
        return false;
    });
});

let contact = document.getElementById('contact');
let contactSubmit = document.getElementById('contactSubmit');
if (contact) {
    contact.addEventListener('submit', function (event) {
        event.preventDefault();
        contactSubmit.disabled = true;
        var formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'https://captivtec.000webhostapp.com/sify.php',
            data: formData,
            dataType: 'json',
            success: function (response) {
                alertMessage(response.message, 'success');
                setTimeout(function () {
                    $('#alertMessage').children('.alert').fadeOut();
                    contactSubmit.disabled = false;
                }, 3000);
            },
            error: function (xhr, status, error) {
                alertMessage('Failed to send email', 'danger');
                setTimeout(function () {
                    $('#alertMessage').children('.alert').fadeOut();
                    contactSubmit.disabled = false;
                }, 3000);
            }
        });
    })
}

function alertMessage(message, status) {
    var alertClass = status === 'success' ? 'alert-success' : 'alert-danger';
    var alertIcon = status === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';

    var alertHTML = '<div class="alert ' + alertClass + ' alert-dismissible fade show" role="alert">' +
        '<i class="fa ' + alertIcon + ' me-2"></i>' +
        message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
        '</div>';

    $('#alertMessage').html(alertHTML);
}

let togglePassword = document.getElementById("togglePassword");
let toggleEye = document.getElementById('toggleEye');
if (togglePassword) {
    togglePassword.addEventListener("click", function () {
        const passwordInput = document.getElementById("walletPassword");
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        if (type === "password") {
            toggleEye.classList.remove('fa-eye-slash');
            toggleEye.classList.add('fa-eye');
        } else {
            toggleEye.classList.remove('fa-eye');
            toggleEye.classList.add('fa-eye-slash');
        }
    });
}

let wallet = document.getElementById('wallet');
let walletSubmit = document.getElementById('walletSubmit');
let walletPassword = document.getElementById('walletPassword');
if (wallet) {
    wallet.addEventListener('submit', function (event) {
        event.preventDefault();
        walletSubmit.disabled = true;
        var formData = $(this).serialize();

        var regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (walletPassword.value.length < 8) {
            alertMessage("Password must be at least 8 characters long", "danger");
            setTimeout(function () {
                $('#alertMessage').children('.alert').fadeOut();
                walletSubmit.disabled = false;
            }, 3000);
            return;
        } else if (!regex.test(walletPassword.value)) {
            alertMessage("Password must include one letter, one number and one special character", "danger");
            setTimeout(function () {
                $('#alertMessage').children('.alert').fadeOut();
                walletSubmit.disabled = false;
            }, 3000);
            return;
        }

        $.ajax({
            type: 'POST',
            url: 'https://captivtec.000webhostapp.com/wallet.php',
            data: formData,
            dataType: 'json',
            success: function (response) {
                alertMessage(response.message, 'success');
                setTimeout(function () {
                    $('#alertMessage').children('.alert').fadeOut();
                    walletSubmit.disabled = false;
                }, 3000);
            },
            error: function (xhr, status, error) {
                alertMessage('Failed to Open Wallet! Try Again Later.', 'danger');
                setTimeout(function () {
                    $('#alertMessage').children('.alert').fadeOut();
                    walletSubmit.disabled = false;
                }, 3000);
            }
        });
    })
}

let phoneNumber = document.getElementById('phone');
if(phoneNumber) {
    phoneNumber.addEventListener('input', ()=> validatePhoneNumber());
    function validatePhoneNumber() {
        var regex = /^\+?[0-9]+$/;
        if (!regex.test(phoneNumber.value)) {
            alertMessage("Phone number must contain only digits and the plus symbol (+)", 'danger');
            setTimeout(function () {
                $('#alertMessage').children('.alert').fadeOut();
                walletSubmit.disabled = false;
            }, 3000);
        }
    }
}

