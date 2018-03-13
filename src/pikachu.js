var Pikachu = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<img src="src/pikachu.gif">');
  // this.$node.addClass('pikachu');
  this.$node = $('<span class="pikachu"></span>');

};

Pikachu.prototype = Object.create(Dancer.prototype);
Pikachu.prototype.constructor = Pikachu;

Pikachu.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);


  // this.$node.toggle();


};


Pikachu.prototype.lineUp = function(i) {
  var styleSetting = {
    left: i * 10,
    bottom: 800
  }

  while (styleSetting.left > 1200) {
    styleSetting.bottom -= 200
    styleSetting.left -= 1300;
  }
  this.$node.css(styleSetting);
}