var GrowingDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="growingDancer"></span>');  
  Dancer.call(this, top, left, timeBetweenSteps);
}

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);

  this.$node.animate({width: '1px'});
  this.$node.animate({width: '100px'});  

} 