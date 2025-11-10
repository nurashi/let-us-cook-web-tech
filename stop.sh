#!/bin/bash

# Colors
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🛑 Stopping Let Us Cook Application...${NC}\n"

docker-compose down

echo -e "\n${RED}✅ All services stopped${NC}"
