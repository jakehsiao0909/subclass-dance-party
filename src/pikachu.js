var Pikachu = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="pikachu"></span>');

};

Pikachu.prototype = Object.create(Dancer.prototype);
Pikachu.prototype.constructor = Pikachu;

Pikachu.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  

  this.left = $("body").height() * Math.random(),
  this.right = $("body").width() * Math.random(),
  this.setPosition(this.left, this.right)

  this.$node.fadeTo();



};


Pikachu.prototype.lineUp = function(i) {
  var styleSetting = {
    left: i * 10,
    top: 32
  }

  while (styleSetting.left > 1200) {
    styleSetting.top += 120
    styleSetting.left -= 1300;
  }

  while (styleSetting.top > 842) {
      styleSetting.top = $("body").height() * Math.random(),
      styleSetting.left = $("body").width() * Math.random(),
      styleSetting.setPosition(styleSetting.top, styleSetting.left)
  }
  this.$node.css(styleSetting);
}

Pikachu.prototype.breakLineUp = function() {
  while (styleSetting.top > 830) {
     styleSetting.top = $("body").height() * Math.random(),
     styleSetting.left = $("body").width() * Math.random(),
     styleSetting.setPosition(styleSetting.top, styleSetting.left)
  }

  while (styleSetting.left > 1200) {
     styleSetting.top = $("body").height() * Math.random(),
     styleSetting.left = $("body").width() * Math.random(),
     styleSetting.setPosition(styleSetting.top, styleSetting.left)
  }
  this.$node.css(styleSetting);
}