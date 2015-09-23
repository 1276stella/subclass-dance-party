$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    console.log(dancer);
    // console.log("dancer",dancer);
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);

    $(".growingDancer").on("mouseover", function(event){
      $(this).css("borderColor", "yellow");
    });

//for each element
  // check if it is within the closest range
  // if it is, change its position
    $(".wackyDancer").on("mouseover", function(event){
      var min = 5000;
      var target;
      console.log($(this));
      for (var i = 0; i < window.dancers.length; i++) {
        if(window.dancers[i] !== $(this)) {
          var dist = ($(this).position().top - window.dancers[i].position().top)^2 + ($(this).position().left - window.dancers[i].position().left)^2;
          if(dist < min) {
            min = dist;
            target = window.dancers[i];
          }
        }
      }
      target.css('top',$(this).css('top'));
    });

  });

 $(".addLineupButton").on("click", function(event){
    Dancer.prototype.lineUp();
 });




});

