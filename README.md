# Subclass Dance Party

_An exploration in polymorphism and inheritance._

## What is polymorphism?

When constructing applications, it is often the case that you will need to construct objects that share common methods or traits. Dancers, for example, all display individual unique traits, however they also share the ability to dance, to stop dancing, and to line up. By creating dancers that are _subclasses_ of a `Dancer` class, you can exhibit individuality while allowing your dancers to _inherit_ useful methods from their _superclass_. This ability of the `Dancer` class to manifest in various _subclass_ forms is _polymorphism_.

## Important Files

* `dancefloor.html` a dancer-indiscriminate stage.
* `src` contains `dancer.js` and `blinkyDancer.js` with some code that you'll refactor and then extend with new types of dancers.
* `spec` contains a few tests--you'll be adding more.
* `SpecRunner.html` runs the tests.

## Understand

* How `dancefloor.html`, `src/init.js`, `src/dancer.js`, and `src/blinkyDancer.js` relate.
* Which CSS statements  in `styles.css`  make the dancers circular.
* How to make an kick-ass [dance party](http://giphy.com/gifdanceparty/).

## Basic Requirements

* [ ] Read the [taxonomy](/curriculum/taxonomy) README. Then fork the repo from the makersquare github org (which you'll have recently been given access to on github) and complete the excersises described within so that all of the specs pass.

* [ ] Refactor the `Dancer` class and its subclass `BlinkyDancer` from functional inheritance to pseudoclassical.
  * Feel free to Refer to the lecture slides on Code Sharing Patterns

* [ ] Make at least two new kinds of dancers. This will require creating a new factory function for each one (and making sure that your new javascript files are included in dancefloor.html).
  * Add a link in the top bar of `dancefloor.html` to create a dancer of each new type you create
  * Write tests for new types. Use `spec/blinkyDancerSpec.js` as a template for new test files, and make sure to include them in `SpecRunner.html`.

* Having trouble coming up ideas? Here are some example hierarchies:
    * [Dancer] > [PopDancer] > [RickAstleyDancer]
    * [Dancer] > [FightingDancer] > [ZangiefDancer]
    * [Dancer] > [BouncyDancer]
    * [Dancer] > [SuperHeroDancer] > [BatmanDancer]

* [ ] Make your dancers visually distinct and adorable with CSS and JS!
  * Changing colors!
  * Moving around the page!
  * Growing or shrinking in size!
  * Other shapes besides circles!
  * Rotation!

* [ ] Make a button that, when clicked, tells all the dancers to line up against one side of the dance floor. Remember you've got a global array of all created dancers (it's defined in `src/init.js`) so you can loop through that array and tell each object to `lineUp`.  You'll need to add a `lineUp` method to each of your dancer types - they don't all have to do exactly the same thing.

* [ ] Use an image (`<img>` tag or CSS `background-image`) instead of plain-jane RGB to add some pizzazz!

* [ ] Make dancers that interact with other dancers. For example, by iterating across the array `window.dancers` and using the Pythagorean Theorem to calculate your distance from each other dancer, you can have a dancer find its `n` closest neighbors and do something based on their positions.

* [ ] Make a dancer that reacts to the mouse (use jQuery to add a `mouseover` handler).

## Extra Credit

* Try using some CSS3 transitions to do cool special effects with your dancers.
* Try creating multiple dance floors with their own unique properties for the dancers to inherit. Polymorph all the things!
* Make your dancers break out in a moving conga line after having them line up.
* Trig class was a waste of time, right? WRONG! Use polar coordinates to trace out some [sweet paths](http://en.wikipedia.org/wiki/Lissajous_curve) for your dancers to follow across the floor.
* Use HTML5 `<audio>` tags to add some hot beats for your dancers to move and groove to.
* Allow users of the the site create their own dancers on the fly by picking dancing behaviors from a list and uploading their own dancer image!

## Relevant Documentation:

* [jQuery](http://api.jquery.com/) is a library used extensively in this project to easily create and modify HTML DOM nodes in the web page.
* [jQuery CSS](http://api.jquery.com/css/)
* [jQuery effects](http://api.jquery.com/category/effects/)
* [CSS reference](https://developer.mozilla.org/en-US/docs/CSS/CSS_Reference)
* [CSS3 tutorial](http://www.w3schools.com/css/css3_intro.asp)


[Dancer]: https://en.wikipedia.org/wiki/Interpretive_dance
[PopDancer]: https://en.wikipedia.org/wiki/Pop_dance
[RickAstleyDancer]: https://en.wikipedia.org/wiki/Rick_Astley
[FightingDancer]: https://en.wikipedia.org/wiki/Capoeira
[ZangiefDancer]: https://en.wikipedia.org/wiki/Zangief
[BouncyDancer]: https://en.wikipedia.org/wiki/Deflection_(physics)
[SuperHeroDancer]: https://en.wikipedia.org/wiki/Super_hero
[BatmanDancer]: https://en.wikipedia.org/wiki/Batman
