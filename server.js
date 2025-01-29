const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Указываем статическую директорию для файлов сборки
app.use(express.static(path.join(__dirname, 'dist')));

// Обрабатываем все GET-запросы и отправляем файл index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
