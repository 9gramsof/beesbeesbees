var ForagerBee = function() {
  //call the Bee superclass
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.color = 'yellow';
  this.canFly = true;
  this.treasureChest = [];
};

//food property and eat method were inhereted from Grub to Bee. When Bee is inherited here, it also inherts grub.

//set prototype and constructor
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(pirateBooty) {
  this.treasureChest.push(pirateBooty);
};