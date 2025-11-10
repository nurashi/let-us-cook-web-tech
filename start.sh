#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting Let Us Cook Application...${NC}\n"

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}❌ docker-compose not found. Please install it first.${NC}"
    exit 1
fi

# Stop any existing containers
echo -e "${BLUE}🛑 Stopping existing containers...${NC}"
docker-compose down 2>/dev/null

# Build and start all services
echo -e "${BLUE}🏗️  Building and starting services...${NC}"
docker-compose up -d --build

# Wait for services to be ready
echo -e "${BLUE}⏳ Waiting for services to start...${NC}"
sleep 5

# Check if containers are running
if docker ps | grep -q "letuscook"; then
    echo -e "\n${GREEN}✅ All services started successfully!${NC}\n"
    echo -e "${GREEN}📍 Application URLs:${NC}"
    echo -e "   🌐 Frontend: ${BLUE}http://localhost:8080${NC}"
    echo -e "   🔐 Login:    ${BLUE}http://localhost:8080/${NC}"
    echo -e "   🏠 Home:     ${BLUE}http://localhost:8080/login.html${NC}"
    echo -e "   💬 Chat:     ${BLUE}http://localhost:8080/chat.html${NC}"
    echo -e "   🔧 API:      ${BLUE}http://localhost:8080/api/health${NC}"
    echo -e "\n${GREEN}👤 Test credentials:${NC}"
    echo -e "   📧 Email:    john@example.com"
    echo -e "   🔑 Password: password123"
    echo -e "\n${BLUE}📊 Container status:${NC}"
    docker-compose ps
    echo -e "\n${BLUE}💡 To stop: docker-compose down${NC}"
    echo -e "${BLUE}💡 To view logs: docker-compose logs -f${NC}"
else
    echo -e "\n${RED}❌ Failed to start services${NC}"
    echo -e "${RED}Check logs with: docker-compose logs${NC}"
    exit 1
fi
