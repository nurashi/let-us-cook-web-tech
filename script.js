
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Clear previous error messages
    clearErrors();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Validate Name (required, at least 2 characters)
    if (name === '') {
        showError('name', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Validate Email (required, correct format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate Password (required, at least 6 characters)
    if (password === '') {
        showError('password', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters');
        isValid = false;
    }
    
    // Validate Confirm Password (must match password)
    if (confirmPassword === '') {
        showError('confirmPassword', 'Please confirm your password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        isValid = false;
    }
    
    // Validate Message (required, at least 10 characters)
    if (message === '') {
        showError('message', 'Message is required');
        isValid = false;
    } else if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    // If all validations pass
    if (isValid) {
        alert('Form submitted successfully! \n\nName: ' + name + '\nEmail: ' + email);
        document.getElementById('contactForm').reset();
    }
    
    return false;
}

// Helper function to show error messages
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.style.borderColor = 'red';
    field.parentElement.appendChild(errorDiv);
}

// Helper function to clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

function toggleAccordion(element) {
    const answer = element.nextElementSibling;
    const isOpen = answer.style.display === 'block';
    
    // Close all accordions first
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allQuestions = document.querySelectorAll('.faq-question');
    
    allAnswers.forEach(ans => {
        ans.style.display = 'none';
    });
    
    allQuestions.forEach(q => {
        q.classList.remove('active');
    });
    
    // Toggle current accordion
    if (!isOpen) {
        answer.style.display = 'block';
        element.classList.add('active');
    }
}

function showPopup() {
    const popup = document.getElementById('subscriptionPopup');
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
}

function closePopup() {
    const popup = document.getElementById('subscriptionPopup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close popup when clicking outside the form
function closePopupOutside(event) {
    const popup = document.getElementById('subscriptionPopup');
    if (event.target === popup) {
        closePopup();
    }
}

// Handle subscription form submission for a single form element
function handleSubscriptionForForm(form, event) {
    if (event) event.preventDefault();
    const emailInput = form.querySelector('.subscribe-email');
    const nameInput = form.querySelector('.subscribe-name');
    const email = emailInput ? emailInput.value.trim() : '';
    const name = nameInput ? nameInput.value.trim() : '';

    if (email === '') {
        alert('Please enter an email to subscribe.');
        return;
    }

    alert('Thank you for subscribing! \nWe will send updates to: ' + email);
    form.reset();
    // Close popup if present
    try { closePopup(); } catch (e) { /* ignore if no popup */ }
}

const backgroundColors = [
    '#ffffff', // white
    '#f0f8ff', // alice blue
    '#ffe4e1', // misty rose
    '#f0fff0', // honeydew
    '#fff8dc', // cornsilk
    '#fffacd', // lemon chiffon
    '#e6e6fa'  // lavender
];

let currentColorIndex = 0;
let lastBgColor = '';

function changeBackgroundColor() {
    const colors = ["#f8f9fa", "#ffe4e1", "#e6ffe6", "#e6f0ff", "#fffbe6", "#f0e6ff", "#ffffff"];

    // pick a new color different from last set
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    let attempts = 0;
    while (newColor === lastBgColor && attempts < 10) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
        attempts++;
    }

    // Remove any Bootstrap bg-* classes on body and html that may override background
    [document.documentElement, document.body].forEach(elem => {
        const clsList = Array.from(elem.classList);
        clsList.forEach(cls => {
            if (/^bg-/.test(cls)) elem.classList.remove(cls);
        });
    });

    // Remove background-image and set background-color/background with !important on both html and body
    [document.documentElement, document.body].forEach(elem => {
        elem.style.setProperty('background-image', 'none', 'important');
        elem.style.setProperty('background', newColor, 'important');
        elem.style.setProperty('background-color', newColor, 'important');
    });

    lastBgColor = newColor;
}

function updateDateTime() {
    const now = new Date();
    
    // Format date
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const dateString = now.toLocaleDateString('en-US', options);
    
    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Update the display
    const dateTimeElement = document.getElementById('currentDateTime');
    if (dateTimeElement) {
        dateTimeElement.innerHTML = `
            <div style="font-size: 1.2rem; font-weight: 600; color: #333;">
                 ${dateString}
            </div>
            <div style="font-size: 2rem; font-weight: 700; color: #007bff; margin-top: 0.5rem;">
                 ${timeString}
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize date/time and update every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // Set up form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
    
    // Set up subscription forms (support multiple pages/forms)
    const subscriptionForms = document.querySelectorAll('.subscription-form');
    if (subscriptionForms.length) {
        subscriptionForms.forEach(form => {
            form.addEventListener('submit', handleSubscriptionForForm.bind(null, form));
        });
    }
    
    // Set up popup close on outside click
    const popup = document.getElementById('subscriptionPopup');
    if (popup) {
        popup.addEventListener('click', closePopupOutside);
    }
    
    // Initialize accordion - hide all answers by default
    const faqAnswers = document.querySelectorAll('.faq-answer');
    faqAnswers.forEach(answer => {
        answer.style.display = 'none';
    });
    
    console.log('All JavaScript features initialized successfully!');
});
