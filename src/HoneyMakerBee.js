var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.color = 'yellow';
  this.honeyPot = 0;
};

//set the prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
//set the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

//a food property that is inhereted from grub
//an eat method that is inhereted from grub
//since Grub was inhereted in Bee
//when Grub was inhereted in Bee and Bee is inherited in HoneyMakerBee, Grub is also inhereted to HoneyMakerBee


//a makeHoney method that adds 1 to honeyPot
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
//a giveHoney methods that substracts 1 from honeyPot
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};


