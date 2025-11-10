#!/bin/bash

# Quick setup script for server deployment

echo "🔧 Setting up Let Us Cook on server..."

# Check if .env exists
if [ ! -f "backend/.env" ]; then
    echo "⚠️  backend/.env not found. Creating from template..."
    cat > backend/.env << 'EOF'
DB_HOST=postgres
DB_PORT=5432
DB_USER=cookuser
DB_PASSWORD=cookpass
DB_NAME=letuscook
DB_SSLMODE=disable

SERVER_PORT=3000
SERVER_HOST=0.0.0.0

ENV=production

# Add your OpenAI API key here
OPENAI_API_KEY=your_openai_api_key_here
EOF
    echo "✅ Created backend/.env - Please add your OPENAI_API_KEY!"
    echo ""
fi

# Make scripts executable
chmod +x start.sh stop.sh

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env and add your OPENAI_API_KEY"
echo "2. Run: ./start.sh"
echo ""
