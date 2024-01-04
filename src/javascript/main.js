// Function to change the character's level
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
    // Only update HP if it doesn't go below zero
    if (newHP >= 0) {
      $('#hp').text(newHP);
    } else {
      newHP = 0; // Set HP to zero if it would go below zero
      $('#hp').text(newHP);
    }
    // Only update MP if it doesn't go below zero
    if (newMP >= 0) {
      $('#mp').text(newMP);
    } else {
      newMP = 0; // Set MP to zero if it would go below zero
      $('#mp').text(newMP);
    }
    // Update attributes regardless of level increase or decrease
    var attributes = ['Сила', 'Выносливость', 'Ловкость', 'Интеллект', 'Магия', 'Проворность'];
    for (var i = 0; i < attributes.length; i++) {
      var attribute = attributes[i];
      // Get the current attribute value
      var currentValue = parseInt($('#' + attribute).text());
      // Calculate the new attribute value based on level difference
      var newValue = currentValue + (levelDiff * 4);
      // Update the attribute value
      $('#' + attribute).text(newValue);
    }
    // Update the level and display a success message
    $('#level').text(level);
    alert("Уровень персонажа успешно изменен!");
  } else {
    alert("Некорректный уровень персонажа!");
  }
}
