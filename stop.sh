#!/bin/bash

# Colors
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🛑 Stopping Let Us Cook Application...${NC}\n"

# Use docker compose (newer) or docker-compose (older)
if docker compose version &> /dev/null; then
    docker compose down
elif command -v docker-compose &> /dev/null; then
    docker-compose down
else
    echo -e "${RED}❌ Neither 'docker compose' nor 'docker-compose' found.${NC}"
    exit 1
fi

echo -e "\n${RED}✅ All services stopped${NC}"
