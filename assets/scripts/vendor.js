// Get monster + player health
const monsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");
const bonusLifeEl = document.getElementById("bonus-life");

// Get controls
const attackBtn = document.getElementById("attack-btn");
const strongAttackBtn = document.getElementById("strong-attack-btn");
const healBtn = document.getElementById("heal-btn");
const logBtn = document.getElementById("log-btn");

// Adjust health
function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

// Attack monster
function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

// Attak player
function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

// Healup
function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

// Reset the game
function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

// Remove bonus life
function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

// Set player health
function setPlayerHealth(health) {
  playerHealthBar.value = health;
}
