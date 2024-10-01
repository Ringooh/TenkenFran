/** 
 * Array with level ranges and corresponding ranks
 * 
 * Массив с диапазонами уровней и соответствующими рангами
 **/
var levelRanks = [
  { levelRange: [1, 14], rank: "G" },
  { levelRange: [15, 24], rank: "F" },
  { levelRange: [25, 34], rank: "E" },
  { levelRange: [35, 44], rank: "D" },
  { levelRange: [45, 54], rank: "C" },
  { levelRange: [55, 64], rank: "B" },
  { levelRange: [65, 74], rank: "A" },
  { levelRange: [75, 99], rank: "S" },
  { levelRange: [100, 9999], rank: "SS" }
];

/**
 * Function to determine rank based on level
 * 
 * Функция для определения ранга на основе уровня
**/
function getRankForLevel(level) {
  for (var i = 0; i < levelRanks.length; i++) {
    var range = levelRanks[i].levelRange;
    if (level >= range[0] && level <= range[1]) {
      return levelRanks[i].rank;
    }
  }
  return "Недостаточно данных";
}

/** 
 * Function to change the character's level
 * 
 * Функция изменения уровня персонажа
**/
function changeLevel() {
  var level = parseInt(prompt("Введите новый уровень персонажа:"));
  if (!isNaN(level)) {
    var currentLevel = parseInt($('#level').text());
    var levelDiff = level - currentLevel;
    var hpChange = levelDiff * 5;
    var mpChange = levelDiff * 5;
    var currentHP = parseInt($('#hp').text());
    var currentMP = parseInt($('#mp').text());
    var newHP = currentHP + hpChange;
    var newMP = currentMP + mpChange;

    /**
     * Defining a new rank based on level
     * 
     * Определение нового ранга на основе уровня
    **/
    var newRank = getRankForLevel(level);
    /**
     * Rank display update
     * 
     * Обновление отображения ранга
    **/
    $('.rang span').text(newRank);

    /** 
     * Only update HP if it doesn't go below zero
     * 
     * Обновляйте HP только в том случае, если он не опускается ниже нуля.
    **/
    if (newHP >= 0) {
      $('#hp').text(newHP);
    } else {
      newHP = 0;
       /**
       * Set HP to zero if it would go below zero
       * 
       * Установите HP на ноль, если оно упадет ниже нуля.
       **/
      $('#hp').text(newHP);
    }
    /**
     *  Only update MP if it doesn't go below zero
     * 
     * Обновляйте MP только в том случае, если он не опускается ниже нуля.
    **/
    if (newMP >= 0) {
      $('#mp').text(newMP);
    } else {
      newMP = 0;
       /**
       * Set MP to zero if it would go below zero
       * 
       * Установите MP на ноль, если оно упадет ниже нуля.
       **/
      $('#mp').text(newMP);
    }
    /** 
     * Update attributes regardless of level increase or decrease
     * 
     * Обновляйте атрибуты независимо от повышения или понижения уровня.
    **/
    var attributes = ['strange', 'vitality', 'dexterity', 'intelligence', 'magic', 'agility'];
    for (var i = 0; i < attributes.length; i++) {
      var attribute = attributes[i];
      /** 
       * Get the current attribute value
       * 
       * Получить текущее значение атрибута
      **/
      var currentValue = parseInt($('#' + attribute).text());
      /**
       * Calculate the new attribute value based on level difference
       * 
       * Рассчитайте новое значение атрибута на основе разницы уровней.
      **/
      var newValue = currentValue + (levelDiff * 4);
      /**
       * Update the attribute value
       * 
       * Обновить значение атрибута
      **/
      $('#' + attribute).text(newValue);
    }
    // Update the level and display a success message
    $('#level').text(level);
    alert("Уровень персонажа успешно изменен!");
  } else {
    alert("Некорректный уровень персонажа!");
  }
}
