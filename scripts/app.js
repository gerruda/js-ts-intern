// Список тем (обновляйте его при добавлении новых этапов)
const topics = [
    { id: 1, title: "Этап 1: Знакомство с JavaScript", file: "1-intro.html" },
    { id: 2, title: "Этап 2: Базовый синтаксис", file: "2-syntax.html" },
    { id: 3, title: "Этап 3: Управляющие конструкции", file: "3-controls.html" },
    { id: 4, title: "Этап 4: Функции и область видимости", file: "4-functions.html" },
    { id: 5, title: "Этап 5: Работа с DOM", file: "5-dom.html" },
    { id: 6, title: "Этап 6: Асинхронность", file: "6-async.html" },
    { id: 7, title: "Этап 7: Введение в TypeScript", file: "7-typescript.html" },
    { id: 8, title: "Этап 8: Классы и ООП", file: "8-oop.html" },
    { id: 9, title: "Этап 9: Работа с API", file: "9-api.html" },
    { id: 10, title: "Этап 10: Фреймворки", file: "10-frameworks.html" },
    { id: 11, title: "Этап 11: Состояния", file: "11-state.html" },
    { id: 11, title: "Этап 11: Состояния", file: "11-state.html" },
    { id: 12, title: "Этап 12: Сборка проекта", file: "12-build.html" },
    { id: 13, title: "Этап 13: Тестирование (Jest)", file: "13-testing.html" },

    // Добавляйте новые этапы по аналогии
];

// Генерация списка на главной странице
const topicsList = document.getElementById('topics-list');

topics.forEach(topic => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `topics/${topic.file}`;
    link.textContent = topic.title;
    listItem.appendChild(link);
    topicsList.appendChild(listItem);
});

document.querySelectorAll('.show-answer').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});
