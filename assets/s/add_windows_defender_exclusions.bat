@echo off
setlocal EnableExtensions

rem Add Windows Defender exclusions for this script directory and AppData luckygametools.
rem Run this file as Administrator.

fltmc >nul 2>&1
if errorlevel 1 (
    echo [ERROR] This script is not running with administrator privileges.
    echo.
    echo Please right-click this script and choose "Run as administrator".
    echo Then run it again.
    echo.
    pause
    exit /b 1
)

set "SCRIPT_DIR=%~dp0"
if "%SCRIPT_DIR:~-1%"=="\" set "SCRIPT_DIR=%SCRIPT_DIR:~0,-1%"

set "LUCKYTOOLS_DIR=%APPDATA%\luckygametools"

echo [INFO] Adding Windows Defender exclusions:
echo        1. %SCRIPT_DIR%
echo        2. %LUCKYTOOLS_DIR%
echo.

if not exist "%LUCKYTOOLS_DIR%" (
    echo [INFO] Directory does not exist. Creating: %LUCKYTOOLS_DIR%
    mkdir "%LUCKYTOOLS_DIR%" >nul 2>&1
    if errorlevel 1 (
        echo [ERROR] Failed to create directory: %LUCKYTOOLS_DIR%
        pause
        exit /b 1
    )
)

set "DEFENDER_EXCLUSION_SCRIPT_DIR=%SCRIPT_DIR%"
set "DEFENDER_EXCLUSION_LUCKYTOOLS_DIR=%LUCKYTOOLS_DIR%"

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "try { $ErrorActionPreference = 'Stop'; $paths = @($env:DEFENDER_EXCLUSION_SCRIPT_DIR, $env:DEFENDER_EXCLUSION_LUCKYTOOLS_DIR); foreach ($path in $paths) { Add-MpPreference -ExclusionPath $path }; Write-Host '[OK] Windows Defender exclusions added.' } catch { Write-Host ('[ERROR] Failed to add exclusions: ' + $_.Exception.Message); exit 1 }"

if errorlevel 1 (
    echo.
    echo [ERROR] Operation failed. Defender may be managed by policy/security software,
    echo or this system may not support Add-MpPreference.
    pause
    exit /b 1
)

echo.
echo [DONE] Completed.
pause
exit /b 0
