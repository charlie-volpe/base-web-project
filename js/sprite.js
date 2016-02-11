/* sprite.js
*  
*  Author: Charlie Volpe Feb 11, 2016
*  
*  Description:
*  Sprite object and animation.
*/


// Create Sprite Object
var Sprite = function(name, url, iunitWidth, iunitHeight, irows, icols) {
  this.name = name;
  this.url = url;
  this.iunitWidth = iunitWidth;
  this.iunitHeight = iunitHeight;
  this.irows = irows;
  this.icols = icols;
}

// Create Sprite Animation Object
var SpriteAnim = function(name, sprite, bloop, istart, iend, ispeed) {
  this.name = name;
  this.sprite = sprite;
  this.bloop = bloop;
  this.istart = istart;
  this.iend = iend;
  this.ispeed = ispeed;

  this.bisPlaying = false;
}

// Play through the animation once
SpriteAnim.prototype.Play = function() {
  
}

// Play through the animation once in reverse
SpriteAnim.prototype.Reverse = function() {
  
}

// Stop animation
SpriteAnim.prototype.Stop = function() {
  
}