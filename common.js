// ============================================
// TRANSLATIONS
// ============================================

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.culinary': 'Culinary',
        'nav.soups': 'Soups',
        'nav.meals': 'Meals',
        'nav.fastfood': 'Fast Food',
        'nav.desserts': 'Desserts',
        'nav.drinks': 'Drinks',
        'nav.breakfast': 'Breakfast',
        'nav.login': 'Log In',
        'nav.signup': 'Sign Up',
        'nav.profile': 'Profile',
        'nav.chat': 'Chat',
        'nav.logout': 'Logout',
        
        // Homepage
        'hero.title': 'Welcome to Let Us Cook',
        'hero.subtitle': 'Discover amazing recipes and culinary delights from around the world',
        'hero.explore': 'Explore Menu',
        'categories.title': 'Explore Our Categories',
        'category.culinary': 'Culinary Arts',
        'category.culinary.desc': 'Explore the world of professional cooking and culinary techniques by Nurassyl',
        'category.soups': 'Soups',
        'category.soups.desc': 'Warm and comforting soup recipes from around the world',
        'category.meals': 'Main Meals',
        'category.meals.desc': 'Hearty and satisfying main course dishes',
        'category.fastfood': 'Fast Food',
        'category.fastfood.desc': 'Quick and delicious fast food favorites',
        'category.desserts': 'Desserts',
        'category.desserts.desc': 'Sweet treats and delectable desserts',
        'category.drinks': 'Drinks',
        'category.drinks.desc': 'Refreshing beverages and cocktails',
        'category.breakfast': 'Breakfast',
        'category.breakfast.desc': 'Start your day with amazing breakfast options',
        'features.title': 'Why Choose Let Us Cook?',
        'feature.quality': 'Quality Recipes',
        'feature.quality.desc': 'Carefully curated recipes from professional chefs and culinary experts',
        'feature.search': 'Easy Search',
        'feature.search.desc': 'Find exactly what you\'re looking for with our advanced search and filter options',
        'feature.rate': 'Rate & Review',
        'feature.rate.desc': 'Share your experience and help others discover great dishes',
        
        // Search & Filter
        'search.placeholder': 'Search...',
        'search.button': 'Search',
        'search.title': 'Find Your Perfect',
        'filter.difficulty': 'Difficulty',
        'filter.all': 'All',
        'filter.type': 'Type',
        'filter.category': 'Category',
        'filter.sort': 'Sort By',
        'sort.default': 'Default',
        'sort.price.asc': 'Price: Low to High',
        'sort.price.desc': 'Price: High to Low',
        'sort.rating': 'Rating',
        
        // Authentication
        'auth.signup.title': 'Create Your Account',
        'auth.login.title': 'Welcome Back!',
        'auth.name': 'Full Name',
        'auth.email': 'Email Address',
        'auth.phone': 'Phone Number',
        'auth.password': 'Password',
        'auth.confirm': 'Confirm Password',
        'auth.signup.button': 'Sign Up',
        'auth.login.button': 'Log In',
        'auth.signup.footer': 'Already have an account?',
        'auth.login.footer': 'Don\'t have an account?',
        'auth.logout.confirm': 'Are you sure you want to logout?',
        
        // Profile
        'profile.title': 'User Profile',
        'profile.member': 'Member since',
        'profile.stats.ratings': 'Ratings Given',
        'profile.stats.searches': 'Searches Made',
        'profile.stats.category': 'Favorite Category',
        'profile.back': 'Back to Home',
        
        // Footer
        'footer.about': 'About Us',
        'footer.about.text': 'Let Us Cook is your ultimate destination for discovering amazing recipes and culinary inspiration from around the world.',
        'footer.links': 'Quick Links',
        'footer.more': 'More Categories',
        'footer.account': 'Account',
        'footer.copyright': '© 2025 Let Us Cook - Culinary Excellence. All rights reserved.',
        'footer.team': 'Created by Nurassyl, Anuar, Asylan, and Rasul',
        
        // Profile page
        'profile.member_since': 'Member since',
        'profile.email': 'Email Address',
        'profile.phone': 'Phone Number',
        'profile.user_id': 'User ID',
        'profile.ratings_given': 'Ratings Given',
        'profile.searches_made': 'Searches Made',
        'profile.favorite_category': 'Favorite Category',
        'profile.back_home': 'Back to Home',
        
        // Category pages common
        'page.about': 'About',
        'page.recipes': 'Recipe Collection',
        'page.recipe.view': 'View Recipe',
        'page.recipe.difficulty': 'Difficulty',
        'page.recipe.time': 'Time',
        'page.recipe.servings': 'Servings',
        'page.recipe.rating': 'Rating',
        'page.recipe.rate': 'Rate this recipe',
        'page.recipe.min': 'min',
        'page.easy': 'Easy',
        'page.medium': 'Medium',
        'page.hard': 'Hard',
        'page.time.quick': 'Under 30 min',
        'page.time.medium': '30-60 min',
        'page.time.long': 'Over 60 min',
        
        // Culinary page
        'culinary.title': 'Culinary Arts',
        'culinary.subtitle': 'Master the art of cooking with professional techniques and exquisite recipes',
        'culinary.about.title': 'About Culinary Excellence',
        'culinary.about.text': 'Welcome to the Culinary Arts section, where we explore the finest techniques and recipes from professional kitchens around the world. Created by Nurassyl, this collection represents the pinnacle of cooking artistry.',
        
        // Soups page
        'soups.title': 'Soups Collection',
        'soups.subtitle': 'Warm and comforting soups from around the world',
        'soups.about.title': 'About Our Soups',
        'soups.about.text': 'Discover our carefully curated collection of soups, from traditional favorites to innovative creations. Each recipe is designed to bring warmth and comfort to your table.',
        
        // Meals page
        'meals.title': 'Main Meals',
        'meals.subtitle': 'Hearty and satisfying main course dishes',
        'meals.about.title': 'About Our Main Meals',
        'meals.about.text': 'Explore our selection of main course dishes that will satisfy any appetite. From classic comfort foods to elegant dinner options.',
        
        // Fast Food page
        'fastfood.title': 'Fast Food Favorites',
        'fastfood.subtitle': 'Quick and delicious fast food classics',
        'fastfood.about.title': 'About Fast Food',
        'fastfood.about.text': 'Indulge in our collection of fast food favorites. Quick, tasty, and satisfying meals for when you need something delicious in a hurry.',
        
        // Desserts page
        'desserts.title': 'Desserts & Sweet Treats',
        'desserts.subtitle': 'Indulgent desserts and sweet delights',
        'desserts.about.title': 'About Our Desserts',
        'desserts.about.text': 'Satisfy your sweet tooth with our delectable dessert collection. From classic cakes to innovative sweet creations.',
        
        // Drinks page
        'drinks.title': 'Beverages & Drinks',
        'drinks.subtitle': 'Refreshing drinks and cocktails',
        'drinks.about.title': 'About Our Beverages',
        'drinks.about.text': 'Quench your thirst with our diverse drink collection. From refreshing juices to sophisticated cocktails.',
        
        // Breakfast page
        'breakfast.title': 'Breakfast Menu',
        'breakfast.subtitle': 'Start your day right with amazing breakfast options',
        'breakfast.about.title': 'About Breakfast',
        'breakfast.about.text': 'Begin your day with our delicious breakfast recipes. From quick morning bites to leisurely weekend brunches.',
        
        // Messages
        'message.noresults': 'No items found. Try adjusting your filters.',
        'message.login.success': 'Login successful!',
        'message.signup.success': 'Account created successfully! Please log in.',
        'message.login.required': 'Please log in to view your profile'
    },
    ru: {
        // Navigation
        'nav.home': 'Главная',
        'nav.culinary': 'Кулинария',
        'nav.soups': 'Супы',
        'nav.meals': 'Блюда',
        'nav.fastfood': 'Фастфуд',
        'nav.desserts': 'Десерты',
        'nav.drinks': 'Напитки',
        'nav.breakfast': 'Завтрак',
        'nav.login': 'Войти',
        'nav.signup': 'Регистрация',
        'nav.profile': 'Профиль',
        'nav.chat': 'Чат',
        'nav.logout': 'Выйти',
        
        // Homepage
        'hero.title': 'Добро пожаловать в Let Us Cook',
        'hero.subtitle': 'Откройте для себя удивительные рецепты и кулинарные изыски со всего мира',
        'hero.explore': 'Изучить меню',
        'categories.title': 'Наши категории',
        'category.culinary': 'Кулинарное искусство',
        'category.culinary.desc': 'Исследуйте мир профессиональной кухни и кулинарных техник от Нурасыла',
        'category.soups': 'Супы',
        'category.soups.desc': 'Теплые и утешительные рецепты супов со всего мира',
        'category.meals': 'Основные блюда',
        'category.meals.desc': 'Сытные и вкусные основные блюда',
        'category.fastfood': 'Фастфуд',
        'category.fastfood.desc': 'Быстрые и вкусные блюда фастфуда',
        'category.desserts': 'Десерты',
        'category.desserts.desc': 'Сладкие угощения и восхитительные десерты',
        'category.drinks': 'Напитки',
        'category.drinks.desc': 'Освежающие напитки и коктейли',
        'category.breakfast': 'Завтрак',
        'category.breakfast.desc': 'Начните свой день с потрясающих завтраков',
        'features.title': 'Почему стоит выбрать Let Us Cook?',
        'feature.quality': 'Качественные рецепты',
        'feature.quality.desc': 'Тщательно отобранные рецепты от профессиональных поваров и кулинарных экспертов',
        'feature.search': 'Удобный поиск',
        'feature.search.desc': 'Найдите именно то, что ищете, с помощью нашего расширенного поиска и фильтров',
        'feature.rate': 'Оценка и отзывы',
        'feature.rate.desc': 'Поделитесь своим опытом и помогите другим открыть отличные блюда',
        
        // Search & Filter
        'search.placeholder': 'Поиск...',
        'search.button': 'Искать',
        'search.title': 'Найдите свой идеальный',
        'filter.difficulty': 'Сложность',
        'filter.all': 'Все',
        'filter.type': 'Тип',
        'filter.category': 'Категория',
        'filter.sort': 'Сортировка',
        'sort.default': 'По умолчанию',
        'sort.price.asc': 'Цена: от низкой к высокой',
        'sort.price.desc': 'Цена: от высокой к низкой',
        'sort.rating': 'Рейтинг',
        
        // Authentication
        'auth.signup.title': 'Создать аккаунт',
        'auth.login.title': 'С возвращением!',
        'auth.name': 'Полное имя',
        'auth.email': 'Email адрес',
        'auth.phone': 'Номер телефона',
        'auth.password': 'Пароль',
        'auth.confirm': 'Подтвердите пароль',
        'auth.signup.button': 'Зарегистрироваться',
        'auth.login.button': 'Войти',
        'auth.signup.footer': 'Уже есть аккаунт?',
        'auth.login.footer': 'Нет аккаунта?',
        'auth.logout.confirm': 'Вы уверены, что хотите выйти?',
        
        // Profile
        'profile.title': 'Профиль пользователя',
        'profile.member': 'Участник с',
        'profile.stats.ratings': 'Оценок дано',
        'profile.stats.searches': 'Поисков выполнено',
        'profile.stats.category': 'Любимая категория',
        'profile.back': 'На главную',
        
        // Footer
        'footer.about': 'О нас',
        'footer.about.text': 'Let Us Cook - ваш идеальный источник для поиска удивительных рецептов и кулинарного вдохновения со всего мира.',
        'footer.links': 'Быстрые ссылки',
        'footer.more': 'Больше категорий',
        'footer.account': 'Аккаунт',
        'footer.copyright': '© 2025 Let Us Cook - Кулинарное совершенство. Все права защищены.',
        'footer.team': 'Создано Нурасылом, Ануаром, Асыланом и Расулом',
        
        // Profile page
        'profile.member_since': 'Участник с',
        'profile.email': 'Адрес электронной почты',
        'profile.phone': 'Номер телефона',
        'profile.user_id': 'ID пользователя',
        'profile.ratings_given': 'Оценок дано',
        'profile.searches_made': 'Поисков выполнено',
        'profile.favorite_category': 'Любимая категория',
        'profile.back_home': 'На главную',
        
        // Category pages common
        'page.about': 'О разделе',
        'page.recipes': 'Коллекция рецептов',
        'page.recipe.view': 'Смотреть рецепт',
        'page.recipe.difficulty': 'Сложность',
        'page.recipe.time': 'Время',
        'page.recipe.servings': 'Порции',
        'page.recipe.rating': 'Рейтинг',
        'page.recipe.rate': 'Оценить этот рецепт',
        'page.recipe.min': 'мин',
        'page.easy': 'Легко',
        'page.medium': 'Средне',
        'page.hard': 'Сложно',
        'page.time.quick': 'Менее 30 мин',
        'page.time.medium': '30-60 мин',
        'page.time.long': 'Более 60 мин',
        
        // Culinary page
        'culinary.title': 'Кулинарное искусство',
        'culinary.subtitle': 'Овладейте искусством приготовления с профессиональными техниками и изысканными рецептами',
        'culinary.about.title': 'О кулинарном мастерстве',
        'culinary.about.text': 'Добро пожаловать в раздел кулинарного искусства, где мы изучаем лучшие техники и рецепты из профессиональных кухонь по всему миру. Эта коллекция, созданная Нурасылом, представляет собой вершину кулинарного мастерства.',
        
        // Soups page
        'soups.title': 'Коллекция супов',
        'soups.subtitle': 'Теплые и согревающие супы со всего мира',
        'soups.about.title': 'О наших супах',
        'soups.about.text': 'Откройте для себя нашу тщательно подобранную коллекцию супов, от традиционных фаворитов до инновационных творений. Каждый рецепт создан, чтобы принести тепло и уют к вашему столу.',
        
        // Meals page
        'meals.title': 'Основные блюда',
        'meals.subtitle': 'Сытные и насыщающие основные блюда',
        'meals.about.title': 'О наших основных блюдах',
        'meals.about.text': 'Изучите наш выбор основных блюд, которые удовлетворят любой аппетит. От классической домашней еды до элегантных вариантов для ужина.',
        
        // Fast Food page
        'fastfood.title': 'Фастфуд фавориты',
        'fastfood.subtitle': 'Быстрая и вкусная классика фастфуда',
        'fastfood.about.title': 'О фастфуде',
        'fastfood.about.text': 'Насладитесь нашей коллекцией фастфуд фаворитов. Быстрые, вкусные и сытные блюда для тех моментов, когда вам нужно что-то вкусное побыстрее.',
        
        // Desserts page
        'desserts.title': 'Десерты и сладости',
        'desserts.subtitle': 'Изысканные десерты и сладкие наслаждения',
        'desserts.about.title': 'О наших десертах',
        'desserts.about.text': 'Удовлетворите свой сладкий зуб нашей восхитительной коллекцией десертов. От классических тортов до инновационных сладких творений.',
        
        // Drinks page
        'drinks.title': 'Напитки и коктейли',
        'drinks.subtitle': 'Освежающие напитки и коктейли',
        'drinks.about.title': 'О наших напитках',
        'drinks.about.text': 'Утолите жажду нашей разнообразной коллекцией напитков. От освежающих соков до изысканных коктейлей.',
        
        // Breakfast page
        'breakfast.title': 'Меню завтраков',
        'breakfast.subtitle': 'Начните свой день правильно с потрясающих вариантов завтрака',
        'breakfast.about.title': 'О завтраках',
        'breakfast.about.text': 'Начните свой день с наших вкусных рецептов завтрака. От быстрых утренних перекусов до неспешных выходных бранчей.',
        
        // Messages
        'message.noresults': 'Ничего не найдено. Попробуйте изменить фильтры.',
        'message.login.success': 'Вход выполнен успешно!',
        'message.signup.success': 'Аккаунт создан успешно! Пожалуйста, войдите.',
        'message.login.required': 'Пожалуйста, войдите, чтобы просмотреть свой профиль'
    }
};

function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    translatePage(lang);
    updateLanguageButton(lang);
}

function translatePage(lang) {
    // Translate text content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Translate placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

function updateLanguageButton(lang) {
    const langBtn = document.querySelector('.language-toggle');
    if (langBtn) {
        langBtn.textContent = lang === 'en' ? 'RU' : 'EN';
    }
}

function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
    
    // Dispatch custom event so pages can re-render dynamic content
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: newLang } }));
}

// ============================================
// THEME MANAGEMENT
// ============================================

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

// ============================================
// AUTHENTICATION MANAGEMENT
// ============================================

function checkAuth() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const authButtons = document.querySelector('.auth-buttons');
    const userProfile = document.querySelector('.user-profile');
    
    if (user) {
        if (authButtons) authButtons.style.display = 'none';
        if (userProfile) {
            userProfile.style.display = 'flex';
            document.querySelector('.user-name').textContent = user.name;
            document.querySelector('.user-email').textContent = user.email;
        }
    } else {
        if (authButtons) authButtons.style.display = 'flex';
        if (userProfile) userProfile.style.display = 'none';
    }
}

function logoutOld() {
    const currentLang = getCurrentLanguage();
    const confirmMsg = translations[currentLang]['auth.logout.confirm'];
    if (confirm(confirmMsg)) {
        localStorage.removeItem('currentUser');
        window.location.href = '/index.html';
    }
}

// ============================================
// FORM VALIDATION
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    // At least 8 characters, must contain at least one letter and one number
    const minLength = password.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return minLength && hasLetter && hasNumber;
}

function getPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    if (strength <= 2) return { level: 'weak', color: '#dc3545' };
    if (strength <= 3) return { level: 'medium', color: '#ffc107' };
    return { level: 'strong', color: '#28a745' };
}

function validatePhone(phone) {
    // Accepts formats: +1234567890, 123-456-7890, (123) 456-7890
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
}

function validateRequired(value) {
    return value.trim() !== '';
}

function showError(input, message) {
    input.classList.add('error');
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.textContent = message;
        errorDiv.classList.add('show');
    }
}

function clearError(input) {
    input.classList.remove('error');
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.textContent = '';
        errorDiv.classList.remove('show');
    }
}

// ============================================
// RATING SYSTEM
// ============================================

function getRatings() {
    return JSON.parse(localStorage.getItem('ratings')) || {};
}

function saveRating(itemId, rating) {
    const ratings = getRatings();
    if (!ratings[itemId]) {
        ratings[itemId] = {
            total: 0,
            count: 0,
            average: 0
        };
    }
    
    ratings[itemId].total += rating;
    ratings[itemId].count += 1;
    ratings[itemId].average = ratings[itemId].total / ratings[itemId].count;
    
    localStorage.setItem('ratings', JSON.stringify(ratings));
    return ratings[itemId];
}

function getRating(itemId) {
    const ratings = getRatings();
    return ratings[itemId] || { average: 0, count: 0 };
}

function createStarRating(itemId, currentRating = 0, isInteractive = true) {
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'rating';
    
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = i <= currentRating ? 'star' : 'star empty';
        star.textContent = '★';
        star.dataset.rating = i;
        
        if (isInteractive) {
            star.style.cursor = 'pointer';
            star.addEventListener('click', () => {
                const rating = saveRating(itemId, i);
                updateStarDisplay(ratingDiv, rating.average);
                updateRatingCount(ratingDiv, rating.count);
            });
        }
        
        ratingDiv.appendChild(star);
    }
    
    const ratingData = getRating(itemId);
    if (ratingData.count > 0) {
        const countSpan = document.createElement('span');
        countSpan.className = 'rating-count';
        countSpan.textContent = `(${ratingData.count})`;
        ratingDiv.appendChild(countSpan);
    }
    
    return ratingDiv;
}

function updateStarDisplay(ratingDiv, average) {
    const stars = ratingDiv.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < Math.round(average)) {
            star.classList.remove('empty');
        } else {
            star.classList.add('empty');
        }
    });
}

function updateRatingCount(ratingDiv, count) {
    let countSpan = ratingDiv.querySelector('.rating-count');
    if (!countSpan) {
        countSpan = document.createElement('span');
        countSpan.className = 'rating-count';
        ratingDiv.appendChild(countSpan);
    }
    countSpan.textContent = `(${count})`;
}

// ============================================
// SEARCH & FILTER
// ============================================

function saveSearchTerm(term) {
    const searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    if (term && !searches.includes(term)) {
        searches.unshift(term);
        if (searches.length > 10) searches.pop();
        localStorage.setItem('recentSearches', JSON.stringify(searches));
    }
}

function getRecentSearches() {
    return JSON.parse(localStorage.getItem('recentSearches')) || [];
}

function saveFilterState(page, filters) {
    const filterStates = JSON.parse(localStorage.getItem('filterStates')) || {};
    filterStates[page] = filters;
    localStorage.setItem('filterStates', JSON.stringify(filterStates));
}

function getFilterState(page) {
    const filterStates = JSON.parse(localStorage.getItem('filterStates')) || {};
    return filterStates[page] || {};
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// ============================================
// MODAL MANAGEMENT
// ============================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Show success modal (custom alert replacement)
function showSuccessModal(message) {
    // Remove any existing modal
    const existingModal = document.getElementById('successModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.id = 'successModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--overlay);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: var(--bg-card);
        padding: 2rem 3rem;
        border-radius: var(--border-radius);
        box-shadow: 0 10px 40px var(--shadow);
        text-align: center;
        max-width: 400px;
        animation: slideUp 0.3s ease;
    `;
    
    modalContent.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
        <h3 style="color: var(--success); margin-bottom: 0.5rem;">Success!</h3>
        <p style="color: var(--text-primary); font-size: 1.1rem;">${message}</p>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Auto-close after 2 seconds
    setTimeout(() => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 300);
    }, 2000);
}

// Show error modal
function showErrorModal(message) {
    const existingModal = document.getElementById('errorModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.id = 'errorModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--overlay);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: var(--bg-card);
        padding: 2rem 3rem;
        border-radius: var(--border-radius);
        box-shadow: 0 10px 40px var(--shadow);
        text-align: center;
        max-width: 400px;
        animation: slideUp 0.3s ease;
    `;
    
    modalContent.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">❌</div>
        <h3 style="color: var(--error); margin-bottom: 0.5rem;">Error!</h3>
        <p style="color: var(--text-primary); font-size: 1.1rem;">${message}</p>
        <button onclick="document.getElementById('errorModal').remove()" 
                style="margin-top: 1rem; padding: 0.5rem 1.5rem; background: var(--accent-color); 
                       color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
            OK
        </button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

// Add animations to CSS
if (!document.getElementById('modalAnimations')) {
    const style = document.createElement('style');
    style.id = 'modalAnimations';
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    checkAuth();
    initMobileMenu();
    
    // Initialize language
    const currentLang = getCurrentLanguage();
    translatePage(currentLang);
    updateLanguageButton(currentLang);
    
    // Theme toggle button
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Language toggle button
    const langToggle = document.querySelector('.language-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Logout button
    const logoutBtn = document.querySelector('.btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// AUTHENTICATION GUARD
// ============================================

function isAuthenticated() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser !== null && currentUser !== undefined;
}

function getCurrentUser() {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
}

function requireAuth() {
    if (!isAuthenticated()) {
        // Save the current page to redirect back after login
        const currentPage = window.location.pathname + window.location.search;
        localStorage.setItem('redirectAfterLogin', currentPage);
        
        // Redirect to login page (now index.html)
        window.location.href = '/index.html';
        return false;
    }
    return true;
}

function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('redirectAfterLogin');
    window.location.href = '/index.html';
}

// Public pages that don't require authentication
const publicPages = [
    '/index.html',    // Login page
    '/signup.html',   // Signup page
    '/login.html',    // Home page (now public)
    '/'
];

// Check if current page requires authentication
function checkPageAuth() {
    const currentPath = window.location.pathname;
    const isPublicPage = publicPages.some(page => currentPath.endsWith(page) || currentPath === page);
    
    if (!isPublicPage && !isAuthenticated()) {
        requireAuth();
    }
}
