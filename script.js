
// Day/Night Theme Toggle
let isDarkTheme = false;

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    const body = document.body;
    const html = document.documentElement;
    
    if (isDarkTheme) {
        // night mode
        body.classList.add('dark-theme');
        html.classList.add('dark-theme');
        
        // update button text
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.innerHTML = '☀️ Day Mode';
        }
    } else {
        // day mode
        body.classList.remove('dark-theme');
        html.classList.remove('dark-theme');
        
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.innerHTML = '🌙 Night Mode';
        }
    }
}

// Star Rating System - allows users to rate recipes
function setupStarRating() {
    const ratingContainers = document.querySelectorAll('.star-rating');
    
    ratingContainers.forEach(container => {
        const stars = container.querySelectorAll('.star');
        let currentRating = 0;
        
        stars.forEach((star, index) => {
            // click to set rating
            star.addEventListener('click', function() {
                currentRating = index + 1;
                updateStars(stars, currentRating);
                
                // show the rating value
                const ratingText = container.nextElementSibling;
                if (ratingText && ratingText.classList.contains('rating-value')) {
                    ratingText.textContent = `Rating: ${currentRating}/5`;
                }
            });
            
            // hover effect
            star.addEventListener('mouseenter', function() {
                updateStars(stars, index + 1);
            });
        });
        
        // reset to current rating when mouse leaves
        container.addEventListener('mouseleave', function() {
            updateStars(stars, currentRating);
        });
    });
}

function updateStars(stars, rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = '#ffc107'; // gold color
            star.textContent = '★';
        } else {
            star.style.color = '#ddd'; // gray color
            star.textContent = '☆';
        }
    });
}

// Dynamic content update using textContent and innerHTML
function updateGreeting() {
    const nameInput = document.getElementById('userName');
    const greetingElement = document.getElementById('greeting');
    
    if (nameInput && greetingElement) {
        const name = nameInput.value.trim();
        if (name) {
            greetingElement.innerHTML = `<strong>Hello, ${name}! 👋</strong> Welcome to Let Us Cook!`;
        } else {
            greetingElement.textContent = 'Welcome to Let Us Cook!';
        }
    }
}


// Button to display current time
function showCurrentTime() {
    const timeDisplay = document.getElementById('currentTime');
    if (timeDisplay) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        timeDisplay.textContent = `Current Time: ${timeString}`;
        timeDisplay.style.fontSize = '1.2rem';
        timeDisplay.style.color = '#007bff';
    }
}

// Keyboard navigation for menu
function setupKeyboardNavigation() {
    const menuItems = document.querySelectorAll('.nav-link');
    let currentIndex = 0;
    
    document.addEventListener('keydown', function(event) {
        // only works when no input is focused
        if (document.activeElement.tagName === 'INPUT' || 
            document.activeElement.tagName === 'TEXTAREA') {
            return;
        }
        
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            event.preventDefault();
            currentIndex = (currentIndex + 1) % menuItems.length;
            menuItems[currentIndex].focus();
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            event.preventDefault();
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            menuItems[currentIndex].focus();
        }
    });
}

// Multi-step form with callbacks
let currentStep = 1;
const totalSteps = 3;

function showStep(step) {
    // hide all steps
    for (let i = 1; i <= totalSteps; i++) {
        const stepDiv = document.getElementById(`step${i}`);
        if (stepDiv) {
            stepDiv.style.display = 'none';
        }
    }
    
    // show current step
    const currentStepDiv = document.getElementById(`step${step}`);
    if (currentStepDiv) {
        currentStepDiv.style.display = 'block';
    }
    
    // update buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitMultiStep');
    
    if (prevBtn) prevBtn.style.display = step === 1 ? 'none' : 'inline-block';
    if (nextBtn) nextBtn.style.display = step === totalSteps ? 'none' : 'inline-block';
    if (submitBtn) submitBtn.style.display = step === totalSteps ? 'inline-block' : 'none';
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

// Switch statement - Recipe filter by category
function filterRecipes(category) {
    const allRecipes = document.querySelectorAll('.recipe-item');
    const filterStatus = document.getElementById('filterStatus');
    
    let displayText = '';
    
    switch(category) {
        case 'all':
            allRecipes.forEach(recipe => recipe.style.display = 'block');
            displayText = 'Showing all recipes';
            break;
        case 'breakfast':
            allRecipes.forEach(recipe => {
                if (recipe.dataset.category === 'breakfast') {
                    recipe.style.display = 'block';
                } else {
                    recipe.style.display = 'none';
                }
            });
            displayText = 'Showing breakfast recipes';
            break;
        case 'lunch':
            allRecipes.forEach(recipe => {
                if (recipe.dataset.category === 'lunch') {
                    recipe.style.display = 'block';
                } else {
                    recipe.style.display = 'none';
                }
            });
            displayText = 'Showing lunch recipes';
            break;
        case 'dinner':
            allRecipes.forEach(recipe => {
                if (recipe.dataset.category === 'dinner') {
                    recipe.style.display = 'block';
                } else {
                    recipe.style.display = 'none';
                }
            });
            displayText = 'Showing dinner recipes';
            break;
        case 'dessert':
            allRecipes.forEach(recipe => {
                if (recipe.dataset.category === 'dessert') {
                    recipe.style.display = 'block';
                } else {
                    recipe.style.display = 'none';
                }
            });
            displayText = 'Showing desserts';
            break;
        default:
            allRecipes.forEach(recipe => recipe.style.display = 'block');
            displayText = 'Showing all recipes';
    }
    
    if (filterStatus) {
        filterStatus.textContent = displayText;
    }
}

// Objects and Methods - Recipe data structure
const recipeDatabase = {
    recipes: [
        { 
            id: 1, 
            name: 'Pancakes', 
            category: 'breakfast', 
            cookTime: 15,
            difficulty: 'Easy' 
        },
        { 
            id: 2, 
            name: 'Grilled Chicken', 
            category: 'lunch', 
            cookTime: 30,
            difficulty: 'Medium' 
        },
        { 
            id: 3, 
            name: 'Pasta Carbonara', 
            category: 'dinner', 
            cookTime: 25,
            difficulty: 'Medium' 
        },
        { 
            id: 4, 
            name: 'Chocolate Cake', 
            category: 'dessert', 
            cookTime: 60,
            difficulty: 'Hard' 
        }
    ],
    
    getRecipeById: function(id) {
        return this.recipes.find(recipe => recipe.id === id);
    },
    
    getRecipesByCategory: function(category) {
        return this.recipes.filter(recipe => recipe.category === category);
    },
    
    addRecipe: function(recipe) {
        this.recipes.push(recipe);
    }
};

// Arrays and Loops - Display recipe list
function displayRecipeList() {
    const recipeListContainer = document.getElementById('recipeList');
    if (!recipeListContainer) return;
    
    let html = '<div class="row g-3">';
    
    // using for loop to iterate
    for (let i = 0; i < recipeDatabase.recipes.length; i++) {
        const recipe = recipeDatabase.recipes[i];
        html += `
            <div class="col-md-6 recipe-item" data-category="${recipe.category}">
                <div class="card">
                    <div class="card-body">
                        <h5>${recipe.name}</h5>
                        <p class="mb-1"><small>Category: ${recipe.category}</small></p>
                        <p class="mb-1"><small>Cook Time: ${recipe.cookTime} mins</small></p>
                        <p class="mb-0"><small>Difficulty: ${recipe.difficulty}</small></p>
                    </div>
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    recipeListContainer.innerHTML = html;
}

// Higher-Order Functions - map, filter, forEach
function demonstrateHigherOrderFunctions() {
    // map - get all recipe names
    const recipeNames = recipeDatabase.recipes.map(recipe => recipe.name);
    
    // filter - get only easy recipes
    const easyRecipes = recipeDatabase.recipes.filter(recipe => recipe.difficulty === 'Easy');
    
    // forEach - log cook times
    recipeDatabase.recipes.forEach(recipe => {
        console.log(`${recipe.name} takes ${recipe.cookTime} minutes`);
    });
    
    return { recipeNames, easyRecipes };
}

// Play Sound - notification sound
function playNotificationSound() {
    // create an audio element programmatically
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFA==');
    audio.volume = 0.3;
    audio.play().catch(err => console.log('Sound play failed:', err));
}

// Animations - bounce effect
function animateElement(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.style.transform = 'scale(1.1)';
    element.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 300);
}


function validateForm(event) {
    event.preventDefault();
    clearErrors();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    if (name === '') {
        showError('name', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (password === '') {
        showError('password', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters');
        isValid = false;
    }
    
    if (confirmPassword === '') {
        showError('confirmPassword', 'Please confirm your password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match');
        isValid = false;
    }
    
    if (message === '') {
        showError('message', 'Message is required');
        isValid = false;
    } else if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    if (isValid) {
        playNotificationSound(); // play sound on success
        alert('Form submitted successfully! ✅\n\nName: ' + name + '\nEmail: ' + email);
        document.getElementById('contactForm').reset();
    }
    
    return false;
}

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
    
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allQuestions = document.querySelectorAll('.faq-question');
    
    allAnswers.forEach(ans => {
        ans.style.display = 'none';
    });
    
    allQuestions.forEach(q => {
        q.classList.remove('active');
    });
    
    if (!isOpen) {
        answer.style.display = 'block';
        element.classList.add('active');
        animateElement(answer.id || 'temp'); // add animation
    }
}

function showPopup() {
    const popup = document.getElementById('subscriptionPopup');
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    const popup = document.getElementById('subscriptionPopup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closePopupOutside(event) {
    const popup = document.getElementById('subscriptionPopup');
    if (event.target === popup) {
        closePopup();
    }
}

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

    playNotificationSound(); // play sound
    alert('Thank you for subscribing! 🎉\nWe will send updates to: ' + email);
    form.reset();
    try { closePopup(); } catch (e) { }
}

const backgroundColors = [
    '#ffffff', '#f8f9fa', '#ffe4e1', '#e6ffe6', 
    '#e6f0ff', '#fffbe6', '#f0e6ff'
];
let currentColorIndex = 0;
let lastBgColor = '';

function changeBackgroundColor() {
    currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    const newColor = backgroundColors[currentColorIndex];
    
    [document.documentElement, document.body].forEach(elem => {
        elem.style.setProperty('background-image', 'none', 'important');
        elem.style.setProperty('background', newColor, 'important');
        elem.style.setProperty('background-color', newColor, 'important');
    });
    
    playNotificationSound(); // sound effect
}

function updateDateTime() {
    const now = new Date();
    
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const dateString = now.toLocaleDateString('en-US', options);
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const dateTimeElement = document.getElementById('currentDateTime');
    if (dateTimeElement) {
        dateTimeElement.innerHTML = `
            <div style="font-size: 1.2rem; font-weight: 600; color: #333;">
                 📅 ${dateString}
            </div>
            <div style="font-size: 2rem; font-weight: 700; color: #007bff; margin-top: 0.5rem;">
                 🕐 ${timeString}
            </div>
        `;
    }
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
    // existing features
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
    
    const subscriptionForms = document.querySelectorAll('.subscription-form');
    if (subscriptionForms.length) {
        subscriptionForms.forEach(form => {
            form.addEventListener('submit', handleSubscriptionForForm.bind(null, form));
        });
    }
    
    const popup = document.getElementById('subscriptionPopup');
    if (popup) {
        popup.addEventListener('click', closePopupOutside);
    }
    
    const faqAnswers = document.querySelectorAll('.faq-answer');
    faqAnswers.forEach(answer => {
        answer.style.display = 'none';
    });
    
    // NEW: advanced features initialization
    setupStarRating();
    setupKeyboardNavigation();
    displayRecipeList();
    
    // greeting input listener
    const nameInput = document.getElementById('userName');
    if (nameInput) {
        nameInput.addEventListener('input', updateGreeting);
    }
    
    // time button
    const timeBtn = document.getElementById('showTimeBtn');
    if (timeBtn) {
        timeBtn.addEventListener('click', showCurrentTime);
    }
    
    // theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // multi-step form buttons
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    if (nextBtn) nextBtn.addEventListener('click', nextStep);
    if (prevBtn) prevBtn.addEventListener('click', prevStep);
    
    // initialize multi-step form
    if (document.getElementById('step1')) {
        showStep(1);
    }
    
    console.log('✅ All features initialized!');
});
