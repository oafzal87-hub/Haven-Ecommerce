#!/bin/bash

# Haven E-commerce Setup Script
# This script automates the entire preview setup process

echo "🏠 Haven E-commerce - Automated Setup"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed: $(node -v)"
echo "✅ npm is installed: $(npm -v)"
echo ""

# Navigate to frontend directory
echo "📁 Navigating to frontend directory..."
cd frontend || exit 1
echo "✅ Current directory: $(pwd)"
echo ""

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "⚠️  node_modules already exists"
    read -p "Do you want to reinstall dependencies? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "🗑️  Removing old node_modules..."
        rm -rf node_modules package-lock.json
        echo "✅ Removed node_modules"
    fi
else
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -eq 0 ]; then
        echo "✅ Dependencies installed successfully!"
    else
        echo "❌ Failed to install dependencies"
        exit 1
    fi
fi

echo ""
echo "🚀 Setup Complete!"
echo "======================================"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "Then open your browser to:"
echo "  http://localhost:3000"
echo ""
echo "Happy coding! 🎉"
