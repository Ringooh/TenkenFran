
// Получим доступ к элементу с информацией о персонаже
const characterInfo = document.getElementById('character-info');

// Создадим объект с информацией о персонаже
const character = {
  имя: 'Фран',
  возраст: 12,
  раса: 'Зверолюд',
  племя: 'Племя черных кошек',
  класс: 'Магический мечник',
  статус: 'Контракт',
  уровень: 25,
  HP: 193,
  MP: 127,
  сила: 140,
  выносливость: 103,
  ловкость: 146,
  интеллект: 101,
  магия: 100,
  проворность: 103,
  навыки: ['Убийца гоблинов', 'Спокойный ум', 'Искусный резчик', 'Решительность', 'Чувство направления', 'Ночное зрение', 'Убийца насекомых', 'Убийца демонов'],
  титулы: [],
};

// Функция обновления информации о персонаже
function updateCharacterInfo() {
  characterInfo.innerHTML = '';
  for (const key in character) {
    let value = character[key];
    if (Array.isArray(value)) {
      value = value.length > 0 ? value.join(', ') : 'Нет';
    }
    characterInfo.innerHTML += `<p><b>${key}:</b> ${value}</p>`;
  }
}

// Функция повышения уровня персонажа
function levelUp() {
  character.уровень += 1;
  character.HP += 5;
  character.MP += 5;
  character.сила += 4;
  character.выносливость += 4;
  character.ловкость += 4;
  character.интеллект += 4;
  character.магия += 4;
  character.проворность += 4;
  updateCharacterInfo();
}

// Функция добавления или удаления титулов
function toggleTitle(title) {
  const index = character.титулы.indexOf(title);
  if (index === -1) {
    character.титулы.push(title);
  } else {
    character.титулы.splice(index, 1);
  }
  updateCharacterInfo();
}

// Обновление информации о персонаже при загрузке страницы
window.onload = updateCharacterInfo;