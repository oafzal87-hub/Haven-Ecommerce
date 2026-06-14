@echo off
REM Haven E-commerce - Start Server Script (Windows)
REM Automatically starts the development server

cls
echo.
echo 🏠 Haven E-commerce - Development Server
echo ==========================================
echo.

REM Check if we're in the frontend directory
if not exist "package.json" (
    echo ❌ package.json not found!
    echo Please run this script from the frontend directory
    pause
    exit /b 1
)

REM Check if node_modules exists
if not exist "node_modules" (
    echo ⚠️  Dependencies not installed!
    echo 📦 Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed!
    echo.
)

echo 🚀 Starting development server...
echo.
echo 📍 Server will run at: http://localhost:3000
echo.
echo Pages available:
echo   🏠 Home:     http://localhost:3000
echo   🛍️  Products: http://localhost:3000/products
echo   🛒 Cart:     http://localhost:3000/cart
echo   🔐 Login:    http://localhost:3000/login
echo   📊 Admin:    http://localhost:3000/admin
echo.
echo Press Ctrl+C to stop the server
echo ==========================================
echo.

REM Start the development server
call npm run dev
pause
