@echo off
title FORJA - Inicializando Servidor PWA
color 0b
echo ===================================================
echo             FORJA - CONSTRUA SUA EVOLUCAO
echo ===================================================
echo.
cd /d "C:\Users\isaac-mm\.gemini\antigravity\scratch\forja"

echo [1/2] Verificando e instalando dependencias (React 19, Dexie, Tailwind)...
call "C:\Program Files\nodejs\npm.cmd" install

echo.
echo [2/2] Iniciando servidor local do FORJA...
echo.
echo Abra seu navegador em: http://localhost:5173
echo.
call "C:\Program Files\nodejs\npm.cmd" run dev
pause
