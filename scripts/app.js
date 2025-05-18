// Список тем
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
    { id: 12, title: "Этап 12: Сборка проекта", file: "12-build.html" },
    { id: 13, title: "Этап 13: Тестирование (Jest)", file: "13-testing.html" },
    { id: 14, title: "Этап 14: Деплой проекта", file: "14-deploy.html" },
    { id: 15, title: "Этап 15: Финал — Собственный проект", file: "15-final-project.html" }
];

const topicsList = document.getElementById('topics-list');

// Получаем сохранённый прогресс или создаём новый объект
let completedTopics = JSON.parse(localStorage.getItem('completedTopics')) || {};

function saveProgress() {
    localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
}

topics.forEach(topic => {
    const listItem = document.createElement('li');

    // Создаём чекбокс
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `topic-${topic.id}`;
    checkbox.checked = !!completedTopics[topic.id];
    checkbox.style.marginRight = '10px';

    // Обработчик изменения состояния
    checkbox.addEventListener('change', () => {
        completedTopics[topic.id] = checkbox.checked;
        saveProgress();
    });

    // Создаём ссылку
    const link = document.createElement('a');
    link.href = `topics/${topic.file}`;
    link.textContent = topic.title;

    // Добавляем элементы на страницу
    listItem.appendChild(checkbox);
    listItem.appendChild(link);
    topicsList.appendChild(listItem);
});

const progressContainer = document.createElement('div');
progressContainer.style.marginTop = '20px';
progressContainer.style.fontSize = '1rem';

function updateProgressDisplay() {
    const total = topics.length;
    const completed = Object.values(completedTopics).filter(Boolean).length;
    progressContainer.textContent = `Пройдено этапов: ${completed} из ${total}`;
}

updateProgressDisplay();
topicsList.after(progressContainer);
