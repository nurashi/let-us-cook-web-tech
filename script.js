
// Theme and Language Management
let currentLang = 'en';

// Initialize theme from localStorage on page load
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.documentElement.classList.add('dark-theme');
        updateThemeButton(true);
    } else {
        updateThemeButton(false);
    }
}

// Toggle theme and save to localStorage
function toggleNavTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    document.documentElement.classList.toggle('dark-theme');
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeButton(isDark);
    
    onThemeChanged(isDark);
}

// Callback executed after theme changes
function onThemeChanged(isDark) {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        if (isDark) {
            card.style.transition = 'all 0.3s ease';
        }
    });
    
    console.log(`Theme changed to: ${isDark ? 'dark' : 'light'}`);
}

// Update theme button icon
function updateThemeButton(isDark) {
    const navBtn = document.getElementById('navThemeToggle');
    const oldBtn = document.getElementById('themeToggle');
    
    if (navBtn) {
        const icon = navBtn.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = isDark ? '☀️' : '🌙';
        }
    }
    
    if (oldBtn) {
        oldBtn.innerHTML = isDark ? '☀️ Day Mode' : '🌙 Night Mode';
    }
}

// Initialize language from localStorage
function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    currentLang = savedLang;
    updateLanguage(savedLang);
}

// Toggle language between EN and RU
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    localStorage.setItem('language', currentLang);
    updateLanguage(currentLang);
}

// Update all text elements with language
function updateLanguage(lang) {
    const langBtn = document.getElementById('navLangToggle');
    if (langBtn) {
        langBtn.textContent = lang === 'en' ? 'EN' : 'RU';
    }
    
    document.querySelectorAll('[data-lang-en][data-lang-ru]').forEach(element => {
        const text = lang === 'en' ? element.getAttribute('data-lang-en') : element.getAttribute('data-lang-ru');
        if (text) {
            // Update placeholder for input elements
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Special handling for highlight content (to avoid showing HTML attributes)
    const highlightText1 = document.querySelector('.highlight-text-1');
    const highlightText2 = document.querySelector('.highlight-text-2');
    
    if (highlightText1) {
        highlightText1.textContent = lang === 'en' 
            ? 'Cooking is an art that brings people together. Whether you love breakfast, lunch, dinner, or dessert, there is always a recipe for everyone.'
            : 'Приготовление пищи - это искусство, которое объединяет людей. Будь то завтрак, обед, ужин или десерт, всегда найдется рецепт для каждого.';
    }
    
    if (highlightText2) {
        highlightText2.textContent = lang === 'en'
            ? 'Our recipes include pasta, chicken, cake, pizza, and many more delicious dishes from around the world.'
            : 'Наши рецепты включают пасту, курицу, торты, пиццу и множество других вкусных блюд со всего мира.';
    }
}

// Old function for compatibility
let isDarkTheme = false;

function toggleTheme() {
    toggleNavTheme();
}

// Star rating system
function setupStarRating() {
    const ratingContainers = document.querySelectorAll('.star-rating');
    
    ratingContainers.forEach(container => {
        const stars = container.querySelectorAll('.star');
        let currentRating = 0;
        
        stars.forEach((star, index) => {
            star.addEventListener('click', function() {
                currentRating = index + 1;
                updateStars(stars, currentRating);
                
                const ratingText = container.nextElementSibling;
                if (ratingText && ratingText.classList.contains('rating-value')) {
                    ratingText.textContent = `Rating: ${currentRating}/5`;
                }
            });
            
            star.addEventListener('mouseenter', function() {
                updateStars(stars, index + 1);
            });
        });
        
        container.addEventListener('mouseleave', function() {
            updateStars(stars, currentRating);
        });
    });
}

function updateStars(stars, rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = '#ffc107';
            star.textContent = '★';
        } else {
            star.style.color = '#ddd';
            star.textContent = '☆';
        }
    });
}

// Dynamic content update
function updateGreeting() {
    const nameInput = document.getElementById('userName');
    const greetingElement = document.getElementById('greeting');
    
    if (nameInput && greetingElement) {
        const name = nameInput.value.trim();
        if (name) {
            greetingElement.innerHTML = `<strong>Hello, ${name}!</strong> Welcome to Let Us Cook!`;
        } else {
            greetingElement.textContent = 'Welcome to Let Us Cook!';
        }
    }
}

// Display current time
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
``
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
// INITIALIZATION
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme and language first
    initTheme();
    initLanguage();
    
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
    // also bind the popup subscription form (some pages use id="subscriptionForm")
    const popupForm = document.getElementById('subscriptionForm');
    if (popupForm) {
        popupForm.addEventListener('submit', handleSubscriptionForForm.bind(null, popupForm));
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
    
    // theme toggle button (old)
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // navbar theme toggle button (new)
    const navThemeToggle = document.getElementById('navThemeToggle');
    if (navThemeToggle) {
        navThemeToggle.addEventListener('click', toggleNavTheme);
    }
    
    // navbar language toggle button
    const navLangToggle = document.getElementById('navLangToggle');
    if (navLangToggle) {
        navLangToggle.addEventListener('click', toggleLanguage);
    }
    
    // multi-step form buttons
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    if (nextBtn) nextBtn.addEventListener('click', nextStep);
    if (prevBtn) prevBtn.addEventListener('click', prevStep);
    // bind background color button if present (some pages use inline onclick, add listener here too)
    const colorBtn = document.getElementById('colorChangeBtn');
    if (colorBtn) colorBtn.addEventListener('click', changeBackgroundColor);
    
    // initialize multi-step form
    if (document.getElementById('step1')) {
        showStep(1);
    }
    
    console.log('✅ All features initialized!');
    
    // Initialize jQuery features if jQuery is loaded
    if (typeof jQuery !== 'undefined') {
        initJQueryFeatures();
    }
});

// Real-time search and live filter
function initRealTimeSearch() {
    $('#searchInput').on('keyup', function() {
        const searchText = $(this).val().toLowerCase();
        $('.searchable-item').each(function() {
            const itemText = $(this).text().toLowerCase();
            if (itemText.indexOf(searchText) !== -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
}

// Autocomplete search suggestions
function initAutocomplete() {
    const suggestions = [
        'Pancakes', 'Grilled Chicken', 'Pasta Carbonara', 'Chocolate Cake',
        'Cheeseburger', 'Loaded Fries', 'Fried Chicken', 'Donuts',
        'Ice Cream Sundae', 'Pizza Slice', 'Double Cheeseburger', 
        'Chicken Nuggets', 'Veggie Wrap', 'Sushi', 'Tacos', 'Paella'
    ];
    
    $('#autocompleteInput').on('keyup', function() {
        const value = $(this).val().toLowerCase();
        const $dropdown = $('#autocompleteDropdown');
        
        if (value.length === 0) {
            $dropdown.hide();
            return;
        }
        
        const matches = suggestions.filter(item => 
            item.toLowerCase().indexOf(value) !== -1
        );
        
        if (matches.length > 0) {
            $dropdown.empty();
            matches.forEach(match => {
                $dropdown.append(`<div class="autocomplete-item">${match}</div>`);
            });
            $dropdown.show();
        } else {
            $dropdown.hide();
        }
    });
    
    $(document).on('click', '.autocomplete-item', function() {
        $('#autocompleteInput').val($(this).text());
        $('#autocompleteDropdown').hide();
    });
    
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#autocompleteInput, #autocompleteDropdown').length) {
            $('#autocompleteDropdown').hide();
        }
    });
}

// Search highlighting
function initSearchHighlight() {
    $('#highlightSearchBtn').on('click', function() {
        const searchTerm = $('#highlightInput').val();
        const $content = $('.highlight-content');
        
        $content.find('.highlight').contents().unwrap();
        
        if (searchTerm.length === 0) return;
        
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        $content.each(function() {
            const $elem = $(this);
            const html = $elem.html();
            const newHtml = html.replace(regex, '<span class="highlight">$1</span>');
            $elem.html(newHtml);
        });
    });
}

// PART 2: UX Engagement Elements
// Scroll progress bar
function initScrollProgressBar() {
    $(window).on('scroll', function() {
        const windowHeight = $(document).height() - $(window).height();
        const scrolled = $(window).scrollTop();
        const progress = (scrolled / windowHeight) * 100;
        $('#scrollProgress').css('width', progress + '%');
    });
}

// Animated number counter
function initNumberCounter() {
    let counted = false;
    
    $(window).on('scroll', function() {
        const $counters = $('.counter-number');
        
        if ($counters.length === 0) return;
        
        const counterTop = $counters.first().offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        
        if (!counted && windowBottom > counterTop) {
            counted = true;
            $counters.each(function() {
                const $this = $(this);
                const target = parseInt($this.data('target'));
                
                $({ count: 0 }).animate({ count: target }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.count));
                    },
                    complete: function() {
                        $this.text(target);
                    }
                });
            });
        }
    });
}

// Loading spinner on submit
function initLoadingSpinner() {
    $('.submit-with-loader').on('click', function(e) {
        e.preventDefault();
        const $btn = $(this);
        const originalText = $btn.text();
        
        $btn.prop('disabled', true)
            .html('<span class="spinner"></span> Please wait...')
            .addClass('loading');
        
        setTimeout(function() {
            $btn.prop('disabled', false)
                .html(originalText)
                .removeClass('loading');
            showNotification('Form submitted successfully', 'success');
        }, 2000);
    });
}

// PART 3: Web App Functionality
// Notification system
function showNotification(message, type) {
    const $notification = $('<div class="notification"></div>')
        .addClass(type || 'info')
        .text(message)
        .appendTo('body');
    
    setTimeout(function() {
        $notification.addClass('show');
    }, 100);
    
    setTimeout(function() {
        $notification.removeClass('show');
        setTimeout(function() {
            $notification.remove();
        }, 300);
    }, 3000);
}

// Copy to clipboard
function initCopyToClipboard() {
    $('.copy-btn').on('click', function() {
        const $btn = $(this);
        const textToCopy = $btn.siblings('.copy-text').text();
        
        const $temp = $('<textarea>');
        $('body').append($temp);
        $temp.val(textToCopy).select();
        document.execCommand('copy');
        $temp.remove();
        
        const originalHtml = $btn.html();
        $btn.html('✓ Copied!')
            .addClass('copied');
        
        showNotification('Copied to clipboard!', 'success');
        
        setTimeout(function() {
            $btn.html(originalHtml)
                .removeClass('copied');
        }, 2000);
    });
}

// Image lazy loading with smooth animation
function initLazyLoading() {
    const lazyLoadImages = function() {
        $('.lazy-image').each(function() {
            const $img = $(this);
            const imageTop = $img.offset().top;
            const imageBottom = imageTop + $img.outerHeight();
            const windowTop = $(window).scrollTop();
            const windowBottom = windowTop + $(window).height();
            
            // Load image when it's in viewport (with 100px offset)
            if (imageBottom >= windowTop - 100 && imageTop <= windowBottom + 100) {
                const src = $img.data('src');
                if (src && !$img.attr('src')) {
                    // Preload image before showing
                    const tempImg = new Image();
                    tempImg.onload = function() {
                        $img.attr('src', src)
                            .addClass('loaded')
                            .removeClass('lazy-image');
                    };
                    tempImg.src = src;
                }
            }
        });
    };
    
    // Debounce scroll event for performance
    let scrollTimeout;
    $(window).on('scroll resize', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(lazyLoadImages, 100);
    });
    
    // Initial check on page load
    $(window).trigger('scroll');
}

// Initialize all jQuery features
function initJQueryFeatures() {
    initRealTimeSearch();
    initAutocomplete();
    initSearchHighlight();
    initScrollProgressBar();
    initNumberCounter();
    initLoadingSpinner();
    initCopyToClipboard();
    initLazyLoading();
    
    console.log('jQuery features initialized');
}
