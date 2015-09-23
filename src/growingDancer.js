var GrowingDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="growingDancer"></span>');  
  Dancer.call(this, top, left, timeBetweenSteps);
}

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);
  // this.$node.css("borderColor", "blue");
  // console.log("this.node before", this.$node.css('border-color'));
  // this.$node.css("borderColor", "red");
  // console.log("this.node after", this.$node.css('border-color'));


  this.$node.animate({width: '1px'});
  this.$node.animate({width: '100px'});  

  // this.$node.css({borderWidth: '10px'});
  // this.$node.css({borderWidth: '30px'});

  // this.$node.toggleClass('blueDancer');
} 