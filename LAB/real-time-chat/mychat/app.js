const express = require('express'); // Подключаем Express
const app = express(); // Создаем приложение Express
const port = 3000; // Порт, на котором будет работать сервер

// Маршрут "/"
app.get('/', (req, res) => {
    res.send('hi'); // Отправляем текст "hi"
});

// Маршрут "/json"
app.get('/json', (req, res) => {
    res.json({ text: 'hi', numbers: [1, 2, 3] }); // Отправляем JSON
});

// Маршрут "/echo"
app.get('/echo', (req, res) => {
    const input = req.query.input || ''; // Получаем параметр input
    res.json({
        normal: input, // Оригинальный текст
        shouty: input.toUpperCase(), // Текст в верхнем регистре
        charCount: input.length, // Количество символов
        backwards: input.split('').reverse().join('') // Текст задом наперед
    });
});

// Обслуживание статических файлов из папки "mychat"
app.use('/static', express.static('mychat'));

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
