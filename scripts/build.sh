#!/bin/bash

# Clean previous builds
rm -rf .next out public

# Build Next.js
next build

# Create public directory if it doesn't exist
mkdir -p public

# Copy static files
cp -r out/* public/ 