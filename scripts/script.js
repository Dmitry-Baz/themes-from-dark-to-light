const body = document.body;

// Устанавливаем начальную тему как светлую
let isDarkTheme = false;

// Функция для переключения темы
function toggleTheme() {
  if (isDarkTheme) {
    body.classList.remove('dark'); // Убираем класс темной темы
  } else {
    body.classList.add('dark'); // Добавляем класс темной темы
  }
  isDarkTheme = !isDarkTheme; // Переключаем флаг темы
}

// Обработчик события нажатия клавиши
document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    event.preventDefault(); // Предотвращаем стандартное поведение Tab (переход по элементам)
    toggleTheme(); // Вызываем функцию переключения темы
  }
});