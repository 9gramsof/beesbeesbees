var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

//set prototype and constructor
//in terms of prototype -> Grub was inhereted in Bee, Bee was inhereted in ForagerBee, and ForagerBee is inhereted here - > therefore, Grub was inhereted here in RetiredForagerBee
//treasureChest is also inhereted from foragerBee
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

//forage method
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

//an always winning gamble method allows the beed to add treasure to the treasureChest

RetiredForagerBee.prototype.gamble = function(pirateBooty) {
  this.treasureChest.push(pirateBooty);
};