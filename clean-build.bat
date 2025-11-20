@echo off
echo Cleaning old build...
if exist dist rmdir /s /q dist

echo Building production version...
cd /d "C:\Users\sarah\Documents\GitHub\My-portfolio"
set "PATH=%PATH%;C:\Program Files\nodejs"
"C:\Program Files\nodejs\npm.cmd" run build

echo.
echo ===============================================
echo BUILD COMPLETE!
echo ===============================================
echo.
echo Next steps for deployment:
echo 1. Upload the entire 'dist' folder to your hosting provider
echo 2. If using GitHub Pages, commit and push these changes
echo 3. Clear your browser cache or try incognito mode
echo.
echo Dist folder location: %CD%\dist
echo.
pause