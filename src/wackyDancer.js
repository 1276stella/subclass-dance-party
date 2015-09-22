var WackyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="wackyDancer"></span>');  
  Dancer.call(this, top, left, timeBetweenSteps);
}

WackyDancer.prototype = Object.create(Dancer.prototype);
WackyDancer.prototype.constructor = WackyDancer;

WackyDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  // this.$node.css("borderColor", "blue");
  // console.log("this.node before", this.$node.css('border-color'));
  // this.$node.css("borderColor", "red");
  // console.log("this.node after", this.$node.css('border-color'));

  // this.$node.css("borderColor", 'green');
  // this.$node.css("borderColor", 'purple');
  // this.$node.css({borderWidth: '10px'});
  // this.$node.css({borderWidth: '30px'});

  this.$node.toggleClass('pinkWackyDancer');
} 