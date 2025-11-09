#!/bin/bash
cd /home/nurashi/git/let-us-cook-web-tech/backend
export GOSUMDB=off
export GOPROXY=direct  
export GOFLAGS="-mod=mod"
go run cmd/main.go
