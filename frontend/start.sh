#!/bin/bash

# Haven E-commerce - Start Server Script
# Automatically starts the development server

echo ""
echo "🏠 Haven E-commerce - Development Server"
echo "=========================================="
echo ""

# Check if we're in the frontend directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found!"
    echo "Please run this script from the frontend directory"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "⚠️  Dependencies not installed!"
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
    echo "✅ Dependencies installed!"
    echo ""
fi

echo "🚀 Starting development server..."
echo ""
echo "📍 Server will run at: http://localhost:3000"
echo ""
echo "Pages available:"
echo "  🏠 Home:     http://localhost:3000"
echo "  🛍️  Products: http://localhost:3000/products"
echo "  🛒 Cart:     http://localhost:3000/cart"
echo "  🔐 Login:    http://localhost:3000/login"
echo "  📊 Admin:    http://localhost:3000/admin"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=========================================="
echo ""

# Start the development server
npm run dev
