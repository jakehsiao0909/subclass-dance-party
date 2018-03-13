var Pikachu = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="src/pikachu.gif">');
  this.$node.addClass('pikachu');
};

Pikachu.prototype = Object.create(Dancer.prototype);
Pikachu.prototype.constructor = Pikachu;

Pikachu.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);


  // this.$node.toggle();


};