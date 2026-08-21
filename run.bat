@echo off
title My NoteBook
echo ========================================
echo        My NoteBook - Starting...
echo ========================================
echo.
echo Browser mein ye address open karein:
echo        http://localhost:5000
echo.
echo Band karne ke liye is window ko close karein.
echo ========================================
echo.
cd /d "%~dp0"
python app.py
pause
