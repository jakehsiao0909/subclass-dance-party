var Turtle = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="turtle"></span>');

};

Turtle.prototype = Object.create(Dancer.prototype);
Turtle.prototype.constructor = Turtle;

Turtle.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, 2000);
  

  this.left = $("body").height() * Math.random(),
  this.right = $("body").width() * Math.random(),
  this.setPosition(this.left, this.right);

  this.$node.fadeIn();


};


Turtle.prototype.lineUp = function(i) {

 
  var styleSetting = {
    left: i * 10,
    top: 32
  }

  while (styleSetting.left > 1200) {
    styleSetting.top += 120;
    styleSetting.left -= 1300;
 }

   while (styleSetting.top > 830) {
     styleSetting.top = $("body").height() * Math.random(),
     styleSetting.left = $("body").width() * Math.random(),
     styleSetting.setPosition(styleSetting.top, styleSetting.left)
  }
  this.$node.css(styleSetting);
}


Turtle.prototype.breakLineUp = function() {

  var styleSetting = {
    left: $("body").height() * Math.random(),
    top: $("body").width() * Math.random()
  }

  while (styleSetting.top > 830) {
     styleSetting.top -= 100,
     styleSetting.left = styleSetting.left,
     styleSetting.setPosition(styleSetting.top, styleSetting.left)
  }

  while (styleSetting.left > 1200) {
     styleSetting.top = styleSetting.top,
     styleSetting.left -= 200,
     styleSetting.setPosition(styleSetting.top, styleSetting.left)
  }
  this.$node.css(styleSetting);
}