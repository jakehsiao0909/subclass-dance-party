var Turtle = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="turtle"></span>');
};

Turtle.prototype = Object.create(Dancer.prototype);
Turtle.prototype.constructor = Turtle;

Turtle.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);


  // this.$node.toggle();


};


Turtle.prototype.lineUp = function(i) {

 
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