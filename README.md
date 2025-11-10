# Let Us Cook - Web Tech Project

A delicious recipe website showcasing various food categories.

## Team Members
- **Nurassyl (nu)** - Home page and Culinary section
- **Anuar (an)** - Soups and Meals sections  
- **Asylan (as)** - Fast Food and Desserts sections
- **Rasul (ra)** - Drinks and Breakfast sections

## Project Structure
```
├── index.html          # Main homepage (for GitHub Pages)
├── culinary.html       # Nurassyl's culinary page
├── common.css          # Common styles used by all pages
├── Images/             # All food images
├── an/                 # Anuar's section
│   ├── soups.html
│   ├── meals.html
├── as/                 # Asylan's section
│   ├── fastfood.html
│   ├── desserts.html
└── ra/                 # Rasul's section
    ├── drinks.html
    ├── breakfast.html
```

## GitHub Pages Deployment

This project is ready for GitHub Pages deployment:

1. Push all changes to your GitHub repository
2. Go to Settings → Pages in your GitHub repository
3. Select "Deploy from a branch" 
4. Choose "main" branch and "/ (root)" folder
5. Your site will be available at: `https://nurashi.github.io/let-us-cook-web-tech/`

## Features
- Responsive design with mobile support
- Organized folder structure by team member
- Interactive navigation between all sections
- Hover effects and animations
- Professional styling with gradient backgrounds
- **Backend with Go & PostgreSQL** - User authentication and data management
- **AI Cooking Assistant** - Chat with OpenAI GPT-3.5 for cooking tips and recipes
- **Bilingual Support** - English and Russian translations
- **Authentication System** - Login/signup with protected pages

## Backend Architecture
```
backend/
├── cmd/
│   └── main.go              # Application entry point
├── internal/
│   ├── config/              # Configuration and database setup
│   ├── models/              # Data models
│   ├── repository/          # Database operations
│   ├── handler/             # HTTP handlers
│   │   ├── user_handler.go
│   │   └── chat_handler.go  # OpenAI integration
│   └── routes/              # Route definitions
├── Dockerfile               # Multi-stage Docker build
├── docker-compose.yml       # PostgreSQL + Backend services
└── init.sql                 # Database schema
```

## Running the Project

### Frontend (Static Server)
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Backend (Docker)
```bash
cd backend
docker-compose up --build -d

# Check health
curl http://localhost:3000/api/health
```

### Environment Variables
Create `backend/.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=cookuser
DB_PASSWORD=cookpass
DB_NAME=letuscook
DB_SSLMODE=disable

SERVER_PORT=3000
SERVER_HOST=0.0.0.0

OPENAI_API_KEY=your_api_key_here
```

## API Endpoints
- `GET /api/health` - Health check
- `POST /api/signup` - User registration
- `POST /api/login` - User authentication
- `GET /api/users` - List all users
- `GET /api/users/{id}` - Get user by ID
- `DELETE /api/users/{id}` - Delete user
- `POST /api/chat` - AI cooking assistant

## Test Credentials
- Email: `john@example.com` / Password: `password123`
- Email: `jane@example.com` / Password: `password456`
- Email: `test@test.com` / Password: `test`

## Navigation
- **Home** - Welcome page with site features
- **Culinary** - Professional cooking techniques
- **Soups** - Various soup recipes with detailed information
- **Meals** - Main course dishes and recipes
- **Fast Food** - Quick and easy food options
- **Desserts** - Sweet treats and desserts
- **Drinks** - Beverages and refreshments
- **Breakfast** - Morning meal options
- **Chat** - AI cooking assistant powered by OpenAI
- **Profile** - User profile (login required)
- **Desserts** - Sweet treats and desserts
- **Breakfast** - Morning meal options
- **Culinary** - Special culinary techniques and dishes

Enjoy exploring our delicious recipe collection! 🍽️