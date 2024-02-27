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
    window.location.href = "wallet.php";
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
        var formData = $('#contact').serialize();
        alertMessage('Message sent successfully', 'success');

        // $.ajax({
        //     url: 'https://captivtec.000webhostapp.com/sify.php',
        //     type: 'POST',
        //     dataType: 'json',
        //     data: formData,
        //     success: function(response) {
        //         if (response.status === "success") {
        //             alertMessage(response.message, 'success');
        //         } else {
        //             alertMessage('Failed to send email! Try Again Later.', 'danger');
        //         }
        //         setTimeout(function() {
        //             $('#alertMessage').find('.alert').hide();
        //             $('#contactSubmit').prop('disabled', false);
        //         }, 3000);
        //     },
        //     error: function(xhr, status, error) {
        //         alertMessage('Failed to send request!', 'danger');
        //         console.log(error);
        //         setTimeout(function() {
        //             $('#alertMessage').find('.alert').hide();
        //             $('#contactSubmit').prop('disabled', false);
        //         }, 3000);
        //     }
        // });

    })
}

function alertMessage(message, status) {
    var alertClass = status === 'success' ? 'alert-success' : 'alert-danger';
    var alertIcon = status === 'success' ? 
    `<svg clip-rule="evenodd" width="24" height="24" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fill-rule="nonzero"/>
    </svg> &nbsp;&nbsp;`
    : `<svg clip-rule="evenodd" width="24" height="24" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" fill-rule="nonzero"/>
    </svg>&nbsp;&nbsp;`;

    var alertHTML = '<div class="alert ' + alertClass + ' alert-dismissible fade show" role="alert">' +
        alertIcon + message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
        '</div>';

    $('#alertMessage').html(alertHTML);
}

let togglePassword = document.getElementById("togglePassword");
if (togglePassword) {
    togglePassword.addEventListener("click", function () {
        const passwordInput = document.getElementById("walletPassword");
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        if (type === "password") {
            togglePassword.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>   
            `;
        } else {
            togglePassword.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2.99902 3L20.999 21" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `;
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
        console.log(formData);

        var regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!#%*?&])[^\s]{8,}$/;

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
            url: 'https://captivtec.000webhostapp.com/wallet.php',
            type: 'POST',
            dataType: 'json',
            data: formData,
            success: function(response) {
                console.log(response);
                if (response.status === "success") {
                    alertMessage(response.message, 'success');
                } else {
                    alertMessage('Failed to Open Wallet! Try Again Later.', 'danger');
                }
                setTimeout(function() {
                    $('#alertMessage').find('.alert').hide();
                    $('#walletSubmit').prop('disabled', false);
                }, 3000);
            },
            error: function(xhr, status, error) {
                alertMessage('Failed to send request!', 'danger');
                setTimeout(function() {
                    $('#alertMessage').find('.alert').hide();
                    $('#walletSubmit').prop('disabled', false);
                }, 3000);
            }
        });

    })
}

let phoneNumber = document.getElementById('phone');
if (phoneNumber) {
    phoneNumber.addEventListener('input', () => validatePhoneNumber());
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

function downloadPDF() {
    var pdfUrl = 'assets/files/SINEHAN RESUME.pdf';
    
    var link = document.createElement('a');
    link.href = pdfUrl;
    
    link.download = 'resume.pdf';
    
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
}


var currentPageUrl = window.location.href;

if (currentPageUrl.indexOf("index.php") !== -1) {
    new Textify({
        splitType: 'lines',
        largeText: true,
        animation: {
        by: 'lines',
        stagger: 0.075,
        duration: 0.7,
        ease: 'power2',
        transformOrigin: 'center center',
        animateProps: {"scale":0,"opacity":0}
        }
    }, gsap);
}
