var WackyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="wackyDancer"></span>');  
  Dancer.call(this, top, left, timeBetweenSteps);
}

WackyDancer.prototype = Object.create(Dancer.prototype);
WackyDancer.prototype.constructor = WackyDancer;

WackyDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);

  this.$node.css("width", '10px');
  this.$node.css("width", '40px');

  this.$node.toggleClass('pinkWackyDancer');
}