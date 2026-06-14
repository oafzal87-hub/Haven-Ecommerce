@echo off
REM Haven E-commerce Setup Script for Windows
REM This script automates the entire preview setup process

cls
echo.
echo 🏠 Haven E-commerce - Automated Setup (Windows)
echo ================================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js is installed
node -v
echo.
echo ✅ npm is installed
npm -v
echo.

REM Navigate to frontend directory
echo 📁 Navigating to frontend directory...
cd frontend
if %errorlevel% neq 0 (
    echo ❌ Frontend directory not found!
    pause
    exit /b 1
)

echo ✅ Current directory: %cd%
echo.

REM Check if node_modules exists
if exist "node_modules" (
    echo ⚠️  node_modules already exists
    set /p reinstall="Do you want to reinstall dependencies? (y/n): "
    if /i "%reinstall%"=="y" (
        echo 🗑️  Removing old node_modules...
        rmdir /s /q node_modules
        del package-lock.json
        echo ✅ Removed node_modules
        echo.
        echo 📦 Installing dependencies...
        call npm install
        if %errorlevel% neq 0 (
            echo ❌ Failed to install dependencies
            pause
            exit /b 1
        )
        echo ✅ Dependencies installed successfully!
    )
) else (
    echo 📦 Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed successfully!
)

echo.
echo 🚀 Setup Complete!
echo ================================================
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open your browser to:
echo   http://localhost:3000
echo.
echo Happy coding! 🎉
echo.
pause
