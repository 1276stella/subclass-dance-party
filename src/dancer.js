// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  // this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  //return dancer;
  // BlinkyDancer.prototype.step();   ASK FELLOWS WHY THIS DOESN'T WORK
  this.step();
  // console.log('this before', this);
  // console.log('this.node before', this.$node);

  this.setPosition();
  // console.log("this after",this);
  // console.log('this.node after', this.$node);  

  // console.log(this);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


Dancer.prototype.setPosition = function(){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  // console.log('this.node', this.$node);
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  var styleSettings = {
    left: '0px'
  };

  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].css(styleSettings);
  }
};