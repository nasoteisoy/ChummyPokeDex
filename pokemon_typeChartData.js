// All 18 Pokemon types
const allTypes = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy"
];

// Nested lookup: typeChart[attackingType][defendingType] = multiplier
// Multipliers: 0 = immune, 0.5 = not very effective, 1 = normal, 2 = super effective
const typeChart = {
  "normal": {
    "normal": 1.0,
    "fire": 1.0,
    "water": 1.0,
    "electric": 1.0,
    "grass": 1.0,
    "ice": 1.0,
    "fighting": 1.0,
    "poison": 1.0,
    "ground": 1.0,
    "flying": 1.0,
    "psychic": 1.0,
    "bug": 1.0,
    "rock": 0.5,
    "ghost": 0.0,
    "dragon": 1.0,
    "dark": 1.0,
    "steel": 0.5,
    "fairy": 1.0
  },
  "fire": {
    "normal": 1.0,
    "fire": 0.5,
    "water": 0.5,
    "electric": 1.0,
    "grass": 2.0,
    "ice": 2.0,
    "fighting": 1.0,
    "poison": 1.0,
    "ground": 1.0,
    "flying": 1.0,
    "psychic": 1.0,
    "bug": 2.0,
    "rock": 0.5,
    "ghost": 1.0,
    "dragon": 0.5,
    "dark": 1.0,
    "steel": 2.0,
    "fairy": 1.0
  },
  "water": {
    "normal": 1.0,
    "fire": 2.0,
    "water": 0.5,
    "electric": 1.0,
    "grass": 0.5,
    "ice": 1.0,
    "fighting": 1.0,
    "poison": 1.0,
    "ground": 2.0,
    "flying": 1.0,
    "psychic": 1.0,
    "bug": 1.0,
    "rock": 2.0,
    "ghost": 1.0,
    "dragon": 0.5,
    "dark": 1.0,
    "steel": 1.0,
    "fairy": 1.0
  },
  "electric": {
    "normal": 1.0,
    "fire": 1.0,
    "water": 2.0,
    "electric": 0.5,
    "grass": 0.5,
    "ice": 1.0,
    "fighting": 1.0,
    "poison": 1.0,
    "ground": 0.0,
    "flying": 2.0,
    "psychic": 1.0,
    "bug": 1.0,
    "rock": 1.0,
    "ghost": 1.0,
    "dragon": 0.5,
    "dark": 1.0,
    "steel": 1.0,
    "fairy": 1.0
  },
  "grass": {
    "normal": 1.0,
    "fire": 0.5,
    "water": 2.0,
    "electric": 1.0,
    "grass": 0.5,
    "ice": 1.0,
    "fighting": 1.0,
    "poison": 0.5,
    "ground": 2.0,
    "flying": 0.5,
    "psychic": 1.0,
    "bug": 0.5,
    "rock": 2.0,
    "ghost": 1.0,
    "dragon": 0.5,
    "dark": 1.0,
    "steel": 0.5,
    "fairy": 1.0
  },
  "ice": {
    "normal": 1.0,
    "fire": 0.5,
    "water": 0.5,
    "electric": 1.0,
    "grass": 2.0,
    "ice": 0.5,
    "fighting": 1.0,
    "poison": 1.0,
    "ground": 2.0,
    "flying": 2.0,
    "psychic": 1.0,
    "bug": 1.0,
    "rock": 1.0,
    "ghost": 1.0,
    "dragon": 2.0,
    "dark": 1.0,
    "steel": 0.5,
    "fairy": 1.0
  },
  "fighting": {
    "normal": 2.0,
    "fire": 1.0,
    "water": 1.0,
    "electric": 1.0,
    "grass": 1.0,
    "ice": 2.0,
    "fighting": 1.0,
    "poison": 0.5,
    "ground": 1.0,
    "flying": 0.5,
    "psychic": 0.5,
    "bug": 0.5,
    "rock": 2.0,
    "ghost": 0.0,
    "dragon": 1.0,
    "dark": 2.0,
    "steel": 2.0,
    "fairy": 0.5
  },
  "poison": {
    "normal": 1.0,
    "fire": 1.0,
    "water": 1.0,
    "electric": 1.0,
    "grass": 2.0,
    "ice": 1.0,
    "fighting": 1.0,
    "poison": 0.5,
    "ground": 0.5,
    "flying": 1.0,
    "psychic": 1.0,
    "bug": 1.0,
    "rock": 0.5,
    "ghost": 0.5,
    "dragon": 1.0,
    "dark": 1.0,
    "steel": 0.0,
    "fairy": 2.0
  },
  "ground": {
    "normal": 1.0,
    "fire": 2.0,
    "water": 1.0,
    "electric": 2.0,
    "grass": 0.5,
    "ice": 1.0,
    "fighting": 1.0,
    "poison": 2.0,
    "ground": 1.0,
    "flying": 0.0,
    "psychic": 1.0,
    "bug": 0.5,
    "rock": 2.0,
    "ghost": 1.0,
    "dragon": 1.0,
    "dark": 1.0,
    "steel": 2.0,
    "fairy": 1.0
  },
  "flying": {
    "normal": 1.0,
    "fire": 1.0,
    "water": 1.0,
    "electric": 0.5,
    "grass": 2.0,
    "ice": 1.0,
    "fighting": 2.0,
    "poison": 1.0,
    "ground": 1.0,
    "flying": 1.0,
    "psychic": 1.0,
    "bug": 2.0,
    "rock": 0.5,
    "ghost": 1.0,
    "dragon": 1.0,
    "dark": 1.0,
    "steel": 0.5,
    "fairy": 1.0
  },
  "psychic": {
    "normal": 1.0,
    "fire": 1.0,
    "water": 1.0,
    "electric": 1.0,
    "grass": 1.0,
    "ice": 1.0,
    "fighting": 2.0,
    "poison": 2.0,
    "ground": 1.0,
    "flying": 1.0,
    "psychic": 0.5,
    "bug": 1.0,
    "rock": 1.0,
    "ghost": 1.0,
    "dragon": 1.0,
    "dark": 0.0,
    "steel": 0.5,
    "fairy": 1.0
  },
  "bug": {
    "normal": 1.0,
    "fire": 0.5,
    "water": 1.0,
    "electric": 1.0,
    "grass": 2.0,
    "ice": 1.0,
    "fighting": 0.5,
    "poison": 0.5,
    "ground": 1.0,
    "flying": 0.5,
    "psychic": 2.0,
    "bug": 1.0,
    "rock": 1.0,
    "ghost": 0.5,
    "dragon": 1.0,
    "dark": 2.0,
    "steel": 0.5,
    "fairy": 0.5
  },
  "rock": {
    "normal": 1.0,
    "fire": 2.0,
    "water": 1.0,
    "electric": 1.0,
    "grass": 1.0,
    "ice": 2.0,
    "fighting": 0.5,
    "poison": 1.0,
    "ground": 0.5,
    "flying": 2.0,
    "psychic": 1.0,
    "bug": 2.0,
    "rock": 1.0,
    "ghost": 1.0,
    "dragon": 1.0,
    "dark": 1.0,
    "steel": 0.5,
    "fairy": 1.0
  },
  "ghost": {
    "normal": 0.0,
    "fire": 1.0,
    "water": 1.0,
    "electric": 1.0,
    "grass": 1.0,
    "ice": 1.0,
    "fighting": 1.0,
    "poison": 1.0,
    "ground": 1.0,
    "flying": 1.0,
    "psychic": 2.0,
    "bug": 1.0,
    "rock": 1.0,
    "ghost": 2.0,
    "dragon": 1.0,
    "dark": 0.5,
    "steel": 1.0,
    "fairy": 1.0
  },
  "dragon": {
    "normal": 1.0,
    "fire": 1.0,
    "water": 1.0,
    "electric": 1.0,
    "grass": 1.0,
    "ice": 1.0,
    "fighting": 1.0,
    "poison": 1.0,
    "ground": 1.0,
    "flying": 1.0,
    "psychic": 1.0,
    "bug": 1.0,
    "rock": 1.0,
    "ghost": 1.0,
    "dragon": 2.0,
    "dark": 1.0,
    "steel": 0.5,
    "fairy": 0.0
  },
  "dark": {
    "normal": 1.0,
    "fire": 1.0,
    "water": 1.0,
    "electric": 1.0,
    "grass": 1.0,
    "ice": 1.0,
    "fighting": 0.5,
    "poison": 1.0,
    "ground": 1.0,
    "flying": 1.0,
    "psychic": 2.0,
    "bug": 1.0,
    "rock": 1.0,
    "ghost": 2.0,
    "dragon": 1.0,
    "dark": 0.5,
    "steel": 1.0,
    "fairy": 0.5
  },
  "steel": {
    "normal": 1.0,
    "fire": 0.5,
    "water": 0.5,
    "electric": 0.5,
    "grass": 1.0,
    "ice": 2.0,
    "fighting": 1.0,
    "poison": 1.0,
    "ground": 1.0,
    "flying": 1.0,
    "psychic": 1.0,
    "bug": 1.0,
    "rock": 2.0,
    "ghost": 1.0,
    "dragon": 1.0,
    "dark": 1.0,
    "steel": 0.5,
    "fairy": 2.0
  },
  "fairy": {
    "normal": 1.0,
    "fire": 0.5,
    "water": 1.0,
    "electric": 1.0,
    "grass": 1.0,
    "ice": 1.0,
    "fighting": 2.0,
    "poison": 0.5,
    "ground": 1.0,
    "flying": 1.0,
    "psychic": 1.0,
    "bug": 1.0,
    "rock": 1.0,
    "ghost": 1.0,
    "dragon": 2.0,
    "dark": 2.0,
    "steel": 0.5,
    "fairy": 1.0
  }
};

// Flat array of all attacker/defender/multiplier combinations
const typeChartFlat = [
  {
    "attacking": "normal",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "fire",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "water",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "grass",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "fighting",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "poison",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "ground",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "flying",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "bug",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "rock",
    "multiplier": 0.5
  },
  {
    "attacking": "normal",
    "defending": "ghost",
    "multiplier": 0.0
  },
  {
    "attacking": "normal",
    "defending": "dragon",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "dark",
    "multiplier": 1.0
  },
  {
    "attacking": "normal",
    "defending": "steel",
    "multiplier": 0.5
  },
  {
    "attacking": "normal",
    "defending": "fairy",
    "multiplier": 1.0
  },
  {
    "attacking": "fire",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "fire",
    "defending": "fire",
    "multiplier": 0.5
  },
  {
    "attacking": "fire",
    "defending": "water",
    "multiplier": 0.5
  },
  {
    "attacking": "fire",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "fire",
    "defending": "grass",
    "multiplier": 2.0
  },
  {
    "attacking": "fire",
    "defending": "ice",
    "multiplier": 2.0
  },
  {
    "attacking": "fire",
    "defending": "fighting",
    "multiplier": 1.0
  },
  {
    "attacking": "fire",
    "defending": "poison",
    "multiplier": 1.0
  },
  {
    "attacking": "fire",
    "defending": "ground",
    "multiplier": 1.0
  },
  {
    "attacking": "fire",
    "defending": "flying",
    "multiplier": 1.0
  },
  {
    "attacking": "fire",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "fire",
    "defending": "bug",
    "multiplier": 2.0
  },
  {
    "attacking": "fire",
    "defending": "rock",
    "multiplier": 0.5
  },
  {
    "attacking": "fire",
    "defending": "ghost",
    "multiplier": 1.0
  },
  {
    "attacking": "fire",
    "defending": "dragon",
    "multiplier": 0.5
  },
  {
    "attacking": "fire",
    "defending": "dark",
    "multiplier": 1.0
  },
  {
    "attacking": "fire",
    "defending": "steel",
    "multiplier": 2.0
  },
  {
    "attacking": "fire",
    "defending": "fairy",
    "multiplier": 1.0
  },
  {
    "attacking": "water",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "water",
    "defending": "fire",
    "multiplier": 2.0
  },
  {
    "attacking": "water",
    "defending": "water",
    "multiplier": 0.5
  },
  {
    "attacking": "water",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "water",
    "defending": "grass",
    "multiplier": 0.5
  },
  {
    "attacking": "water",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "water",
    "defending": "fighting",
    "multiplier": 1.0
  },
  {
    "attacking": "water",
    "defending": "poison",
    "multiplier": 1.0
  },
  {
    "attacking": "water",
    "defending": "ground",
    "multiplier": 2.0
  },
  {
    "attacking": "water",
    "defending": "flying",
    "multiplier": 1.0
  },
  {
    "attacking": "water",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "water",
    "defending": "bug",
    "multiplier": 1.0
  },
  {
    "attacking": "water",
    "defending": "rock",
    "multiplier": 2.0
  },
  {
    "attacking": "water",
    "defending": "ghost",
    "multiplier": 1.0
  },
  {
    "attacking": "water",
    "defending": "dragon",
    "multiplier": 0.5
  },
  {
    "attacking": "water",
    "defending": "dark",
    "multiplier": 1.0
  },
  {
    "attacking": "water",
    "defending": "steel",
    "multiplier": 1.0
  },
  {
    "attacking": "water",
    "defending": "fairy",
    "multiplier": 1.0
  },
  {
    "attacking": "electric",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "electric",
    "defending": "fire",
    "multiplier": 1.0
  },
  {
    "attacking": "electric",
    "defending": "water",
    "multiplier": 2.0
  },
  {
    "attacking": "electric",
    "defending": "electric",
    "multiplier": 0.5
  },
  {
    "attacking": "electric",
    "defending": "grass",
    "multiplier": 0.5
  },
  {
    "attacking": "electric",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "electric",
    "defending": "fighting",
    "multiplier": 1.0
  },
  {
    "attacking": "electric",
    "defending": "poison",
    "multiplier": 1.0
  },
  {
    "attacking": "electric",
    "defending": "ground",
    "multiplier": 0.0
  },
  {
    "attacking": "electric",
    "defending": "flying",
    "multiplier": 2.0
  },
  {
    "attacking": "electric",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "electric",
    "defending": "bug",
    "multiplier": 1.0
  },
  {
    "attacking": "electric",
    "defending": "rock",
    "multiplier": 1.0
  },
  {
    "attacking": "electric",
    "defending": "ghost",
    "multiplier": 1.0
  },
  {
    "attacking": "electric",
    "defending": "dragon",
    "multiplier": 0.5
  },
  {
    "attacking": "electric",
    "defending": "dark",
    "multiplier": 1.0
  },
  {
    "attacking": "electric",
    "defending": "steel",
    "multiplier": 1.0
  },
  {
    "attacking": "electric",
    "defending": "fairy",
    "multiplier": 1.0
  },
  {
    "attacking": "grass",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "grass",
    "defending": "fire",
    "multiplier": 0.5
  },
  {
    "attacking": "grass",
    "defending": "water",
    "multiplier": 2.0
  },
  {
    "attacking": "grass",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "grass",
    "defending": "grass",
    "multiplier": 0.5
  },
  {
    "attacking": "grass",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "grass",
    "defending": "fighting",
    "multiplier": 1.0
  },
  {
    "attacking": "grass",
    "defending": "poison",
    "multiplier": 0.5
  },
  {
    "attacking": "grass",
    "defending": "ground",
    "multiplier": 2.0
  },
  {
    "attacking": "grass",
    "defending": "flying",
    "multiplier": 0.5
  },
  {
    "attacking": "grass",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "grass",
    "defending": "bug",
    "multiplier": 0.5
  },
  {
    "attacking": "grass",
    "defending": "rock",
    "multiplier": 2.0
  },
  {
    "attacking": "grass",
    "defending": "ghost",
    "multiplier": 1.0
  },
  {
    "attacking": "grass",
    "defending": "dragon",
    "multiplier": 0.5
  },
  {
    "attacking": "grass",
    "defending": "dark",
    "multiplier": 1.0
  },
  {
    "attacking": "grass",
    "defending": "steel",
    "multiplier": 0.5
  },
  {
    "attacking": "grass",
    "defending": "fairy",
    "multiplier": 1.0
  },
  {
    "attacking": "ice",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "ice",
    "defending": "fire",
    "multiplier": 0.5
  },
  {
    "attacking": "ice",
    "defending": "water",
    "multiplier": 0.5
  },
  {
    "attacking": "ice",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "ice",
    "defending": "grass",
    "multiplier": 2.0
  },
  {
    "attacking": "ice",
    "defending": "ice",
    "multiplier": 0.5
  },
  {
    "attacking": "ice",
    "defending": "fighting",
    "multiplier": 1.0
  },
  {
    "attacking": "ice",
    "defending": "poison",
    "multiplier": 1.0
  },
  {
    "attacking": "ice",
    "defending": "ground",
    "multiplier": 2.0
  },
  {
    "attacking": "ice",
    "defending": "flying",
    "multiplier": 2.0
  },
  {
    "attacking": "ice",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "ice",
    "defending": "bug",
    "multiplier": 1.0
  },
  {
    "attacking": "ice",
    "defending": "rock",
    "multiplier": 1.0
  },
  {
    "attacking": "ice",
    "defending": "ghost",
    "multiplier": 1.0
  },
  {
    "attacking": "ice",
    "defending": "dragon",
    "multiplier": 2.0
  },
  {
    "attacking": "ice",
    "defending": "dark",
    "multiplier": 1.0
  },
  {
    "attacking": "ice",
    "defending": "steel",
    "multiplier": 0.5
  },
  {
    "attacking": "ice",
    "defending": "fairy",
    "multiplier": 1.0
  },
  {
    "attacking": "fighting",
    "defending": "normal",
    "multiplier": 2.0
  },
  {
    "attacking": "fighting",
    "defending": "fire",
    "multiplier": 1.0
  },
  {
    "attacking": "fighting",
    "defending": "water",
    "multiplier": 1.0
  },
  {
    "attacking": "fighting",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "fighting",
    "defending": "grass",
    "multiplier": 1.0
  },
  {
    "attacking": "fighting",
    "defending": "ice",
    "multiplier": 2.0
  },
  {
    "attacking": "fighting",
    "defending": "fighting",
    "multiplier": 1.0
  },
  {
    "attacking": "fighting",
    "defending": "poison",
    "multiplier": 0.5
  },
  {
    "attacking": "fighting",
    "defending": "ground",
    "multiplier": 1.0
  },
  {
    "attacking": "fighting",
    "defending": "flying",
    "multiplier": 0.5
  },
  {
    "attacking": "fighting",
    "defending": "psychic",
    "multiplier": 0.5
  },
  {
    "attacking": "fighting",
    "defending": "bug",
    "multiplier": 0.5
  },
  {
    "attacking": "fighting",
    "defending": "rock",
    "multiplier": 2.0
  },
  {
    "attacking": "fighting",
    "defending": "ghost",
    "multiplier": 0.0
  },
  {
    "attacking": "fighting",
    "defending": "dragon",
    "multiplier": 1.0
  },
  {
    "attacking": "fighting",
    "defending": "dark",
    "multiplier": 2.0
  },
  {
    "attacking": "fighting",
    "defending": "steel",
    "multiplier": 2.0
  },
  {
    "attacking": "fighting",
    "defending": "fairy",
    "multiplier": 0.5
  },
  {
    "attacking": "poison",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "poison",
    "defending": "fire",
    "multiplier": 1.0
  },
  {
    "attacking": "poison",
    "defending": "water",
    "multiplier": 1.0
  },
  {
    "attacking": "poison",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "poison",
    "defending": "grass",
    "multiplier": 2.0
  },
  {
    "attacking": "poison",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "poison",
    "defending": "fighting",
    "multiplier": 1.0
  },
  {
    "attacking": "poison",
    "defending": "poison",
    "multiplier": 0.5
  },
  {
    "attacking": "poison",
    "defending": "ground",
    "multiplier": 0.5
  },
  {
    "attacking": "poison",
    "defending": "flying",
    "multiplier": 1.0
  },
  {
    "attacking": "poison",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "poison",
    "defending": "bug",
    "multiplier": 1.0
  },
  {
    "attacking": "poison",
    "defending": "rock",
    "multiplier": 0.5
  },
  {
    "attacking": "poison",
    "defending": "ghost",
    "multiplier": 0.5
  },
  {
    "attacking": "poison",
    "defending": "dragon",
    "multiplier": 1.0
  },
  {
    "attacking": "poison",
    "defending": "dark",
    "multiplier": 1.0
  },
  {
    "attacking": "poison",
    "defending": "steel",
    "multiplier": 0.0
  },
  {
    "attacking": "poison",
    "defending": "fairy",
    "multiplier": 2.0
  },
  {
    "attacking": "ground",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "ground",
    "defending": "fire",
    "multiplier": 2.0
  },
  {
    "attacking": "ground",
    "defending": "water",
    "multiplier": 1.0
  },
  {
    "attacking": "ground",
    "defending": "electric",
    "multiplier": 2.0
  },
  {
    "attacking": "ground",
    "defending": "grass",
    "multiplier": 0.5
  },
  {
    "attacking": "ground",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "ground",
    "defending": "fighting",
    "multiplier": 1.0
  },
  {
    "attacking": "ground",
    "defending": "poison",
    "multiplier": 2.0
  },
  {
    "attacking": "ground",
    "defending": "ground",
    "multiplier": 1.0
  },
  {
    "attacking": "ground",
    "defending": "flying",
    "multiplier": 0.0
  },
  {
    "attacking": "ground",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "ground",
    "defending": "bug",
    "multiplier": 0.5
  },
  {
    "attacking": "ground",
    "defending": "rock",
    "multiplier": 2.0
  },
  {
    "attacking": "ground",
    "defending": "ghost",
    "multiplier": 1.0
  },
  {
    "attacking": "ground",
    "defending": "dragon",
    "multiplier": 1.0
  },
  {
    "attacking": "ground",
    "defending": "dark",
    "multiplier": 1.0
  },
  {
    "attacking": "ground",
    "defending": "steel",
    "multiplier": 2.0
  },
  {
    "attacking": "ground",
    "defending": "fairy",
    "multiplier": 1.0
  },
  {
    "attacking": "flying",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "flying",
    "defending": "fire",
    "multiplier": 1.0
  },
  {
    "attacking": "flying",
    "defending": "water",
    "multiplier": 1.0
  },
  {
    "attacking": "flying",
    "defending": "electric",
    "multiplier": 0.5
  },
  {
    "attacking": "flying",
    "defending": "grass",
    "multiplier": 2.0
  },
  {
    "attacking": "flying",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "flying",
    "defending": "fighting",
    "multiplier": 2.0
  },
  {
    "attacking": "flying",
    "defending": "poison",
    "multiplier": 1.0
  },
  {
    "attacking": "flying",
    "defending": "ground",
    "multiplier": 1.0
  },
  {
    "attacking": "flying",
    "defending": "flying",
    "multiplier": 1.0
  },
  {
    "attacking": "flying",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "flying",
    "defending": "bug",
    "multiplier": 2.0
  },
  {
    "attacking": "flying",
    "defending": "rock",
    "multiplier": 0.5
  },
  {
    "attacking": "flying",
    "defending": "ghost",
    "multiplier": 1.0
  },
  {
    "attacking": "flying",
    "defending": "dragon",
    "multiplier": 1.0
  },
  {
    "attacking": "flying",
    "defending": "dark",
    "multiplier": 1.0
  },
  {
    "attacking": "flying",
    "defending": "steel",
    "multiplier": 0.5
  },
  {
    "attacking": "flying",
    "defending": "fairy",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "fire",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "water",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "grass",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "fighting",
    "multiplier": 2.0
  },
  {
    "attacking": "psychic",
    "defending": "poison",
    "multiplier": 2.0
  },
  {
    "attacking": "psychic",
    "defending": "ground",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "flying",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "psychic",
    "multiplier": 0.5
  },
  {
    "attacking": "psychic",
    "defending": "bug",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "rock",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "ghost",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "dragon",
    "multiplier": 1.0
  },
  {
    "attacking": "psychic",
    "defending": "dark",
    "multiplier": 0.0
  },
  {
    "attacking": "psychic",
    "defending": "steel",
    "multiplier": 0.5
  },
  {
    "attacking": "psychic",
    "defending": "fairy",
    "multiplier": 1.0
  },
  {
    "attacking": "bug",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "bug",
    "defending": "fire",
    "multiplier": 0.5
  },
  {
    "attacking": "bug",
    "defending": "water",
    "multiplier": 1.0
  },
  {
    "attacking": "bug",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "bug",
    "defending": "grass",
    "multiplier": 2.0
  },
  {
    "attacking": "bug",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "bug",
    "defending": "fighting",
    "multiplier": 0.5
  },
  {
    "attacking": "bug",
    "defending": "poison",
    "multiplier": 0.5
  },
  {
    "attacking": "bug",
    "defending": "ground",
    "multiplier": 1.0
  },
  {
    "attacking": "bug",
    "defending": "flying",
    "multiplier": 0.5
  },
  {
    "attacking": "bug",
    "defending": "psychic",
    "multiplier": 2.0
  },
  {
    "attacking": "bug",
    "defending": "bug",
    "multiplier": 1.0
  },
  {
    "attacking": "bug",
    "defending": "rock",
    "multiplier": 1.0
  },
  {
    "attacking": "bug",
    "defending": "ghost",
    "multiplier": 0.5
  },
  {
    "attacking": "bug",
    "defending": "dragon",
    "multiplier": 1.0
  },
  {
    "attacking": "bug",
    "defending": "dark",
    "multiplier": 2.0
  },
  {
    "attacking": "bug",
    "defending": "steel",
    "multiplier": 0.5
  },
  {
    "attacking": "bug",
    "defending": "fairy",
    "multiplier": 0.5
  },
  {
    "attacking": "rock",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "rock",
    "defending": "fire",
    "multiplier": 2.0
  },
  {
    "attacking": "rock",
    "defending": "water",
    "multiplier": 1.0
  },
  {
    "attacking": "rock",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "rock",
    "defending": "grass",
    "multiplier": 1.0
  },
  {
    "attacking": "rock",
    "defending": "ice",
    "multiplier": 2.0
  },
  {
    "attacking": "rock",
    "defending": "fighting",
    "multiplier": 0.5
  },
  {
    "attacking": "rock",
    "defending": "poison",
    "multiplier": 1.0
  },
  {
    "attacking": "rock",
    "defending": "ground",
    "multiplier": 0.5
  },
  {
    "attacking": "rock",
    "defending": "flying",
    "multiplier": 2.0
  },
  {
    "attacking": "rock",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "rock",
    "defending": "bug",
    "multiplier": 2.0
  },
  {
    "attacking": "rock",
    "defending": "rock",
    "multiplier": 1.0
  },
  {
    "attacking": "rock",
    "defending": "ghost",
    "multiplier": 1.0
  },
  {
    "attacking": "rock",
    "defending": "dragon",
    "multiplier": 1.0
  },
  {
    "attacking": "rock",
    "defending": "dark",
    "multiplier": 1.0
  },
  {
    "attacking": "rock",
    "defending": "steel",
    "multiplier": 0.5
  },
  {
    "attacking": "rock",
    "defending": "fairy",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "normal",
    "multiplier": 0.0
  },
  {
    "attacking": "ghost",
    "defending": "fire",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "water",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "grass",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "fighting",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "poison",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "ground",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "flying",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "psychic",
    "multiplier": 2.0
  },
  {
    "attacking": "ghost",
    "defending": "bug",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "rock",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "ghost",
    "multiplier": 2.0
  },
  {
    "attacking": "ghost",
    "defending": "dragon",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "dark",
    "multiplier": 0.5
  },
  {
    "attacking": "ghost",
    "defending": "steel",
    "multiplier": 1.0
  },
  {
    "attacking": "ghost",
    "defending": "fairy",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "fire",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "water",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "grass",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "fighting",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "poison",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "ground",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "flying",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "bug",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "rock",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "ghost",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "dragon",
    "multiplier": 2.0
  },
  {
    "attacking": "dragon",
    "defending": "dark",
    "multiplier": 1.0
  },
  {
    "attacking": "dragon",
    "defending": "steel",
    "multiplier": 0.5
  },
  {
    "attacking": "dragon",
    "defending": "fairy",
    "multiplier": 0.0
  },
  {
    "attacking": "dark",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "fire",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "water",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "grass",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "fighting",
    "multiplier": 0.5
  },
  {
    "attacking": "dark",
    "defending": "poison",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "ground",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "flying",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "psychic",
    "multiplier": 2.0
  },
  {
    "attacking": "dark",
    "defending": "bug",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "rock",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "ghost",
    "multiplier": 2.0
  },
  {
    "attacking": "dark",
    "defending": "dragon",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "dark",
    "multiplier": 0.5
  },
  {
    "attacking": "dark",
    "defending": "steel",
    "multiplier": 1.0
  },
  {
    "attacking": "dark",
    "defending": "fairy",
    "multiplier": 0.5
  },
  {
    "attacking": "steel",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "steel",
    "defending": "fire",
    "multiplier": 0.5
  },
  {
    "attacking": "steel",
    "defending": "water",
    "multiplier": 0.5
  },
  {
    "attacking": "steel",
    "defending": "electric",
    "multiplier": 0.5
  },
  {
    "attacking": "steel",
    "defending": "grass",
    "multiplier": 1.0
  },
  {
    "attacking": "steel",
    "defending": "ice",
    "multiplier": 2.0
  },
  {
    "attacking": "steel",
    "defending": "fighting",
    "multiplier": 1.0
  },
  {
    "attacking": "steel",
    "defending": "poison",
    "multiplier": 1.0
  },
  {
    "attacking": "steel",
    "defending": "ground",
    "multiplier": 1.0
  },
  {
    "attacking": "steel",
    "defending": "flying",
    "multiplier": 1.0
  },
  {
    "attacking": "steel",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "steel",
    "defending": "bug",
    "multiplier": 1.0
  },
  {
    "attacking": "steel",
    "defending": "rock",
    "multiplier": 2.0
  },
  {
    "attacking": "steel",
    "defending": "ghost",
    "multiplier": 1.0
  },
  {
    "attacking": "steel",
    "defending": "dragon",
    "multiplier": 1.0
  },
  {
    "attacking": "steel",
    "defending": "dark",
    "multiplier": 1.0
  },
  {
    "attacking": "steel",
    "defending": "steel",
    "multiplier": 0.5
  },
  {
    "attacking": "steel",
    "defending": "fairy",
    "multiplier": 2.0
  },
  {
    "attacking": "fairy",
    "defending": "normal",
    "multiplier": 1.0
  },
  {
    "attacking": "fairy",
    "defending": "fire",
    "multiplier": 0.5
  },
  {
    "attacking": "fairy",
    "defending": "water",
    "multiplier": 1.0
  },
  {
    "attacking": "fairy",
    "defending": "electric",
    "multiplier": 1.0
  },
  {
    "attacking": "fairy",
    "defending": "grass",
    "multiplier": 1.0
  },
  {
    "attacking": "fairy",
    "defending": "ice",
    "multiplier": 1.0
  },
  {
    "attacking": "fairy",
    "defending": "fighting",
    "multiplier": 2.0
  },
  {
    "attacking": "fairy",
    "defending": "poison",
    "multiplier": 0.5
  },
  {
    "attacking": "fairy",
    "defending": "ground",
    "multiplier": 1.0
  },
  {
    "attacking": "fairy",
    "defending": "flying",
    "multiplier": 1.0
  },
  {
    "attacking": "fairy",
    "defending": "psychic",
    "multiplier": 1.0
  },
  {
    "attacking": "fairy",
    "defending": "bug",
    "multiplier": 1.0
  },
  {
    "attacking": "fairy",
    "defending": "rock",
    "multiplier": 1.0
  },
  {
    "attacking": "fairy",
    "defending": "ghost",
    "multiplier": 1.0
  },
  {
    "attacking": "fairy",
    "defending": "dragon",
    "multiplier": 2.0
  },
  {
    "attacking": "fairy",
    "defending": "dark",
    "multiplier": 2.0
  },
  {
    "attacking": "fairy",
    "defending": "steel",
    "multiplier": 0.5
  },
  {
    "attacking": "fairy",
    "defending": "fairy",
    "multiplier": 1.0
  }
];

// Helper: get multiplier for a single matchup
// getMultiplier('fire', 'grass') => 2
function getMultiplier(attackingType, defendingType) {
  return typeChart?.[attackingType]?.[defendingType] ?? 1;
}

// Helper: get combined multiplier when defending Pokemon has two types
// getDualMultiplier('electric', 'water', 'flying') => 2
function getDualMultiplier(attackingType, type1, type2) {
  return getMultiplier(attackingType, type1) * getMultiplier(attackingType, type2);
}
