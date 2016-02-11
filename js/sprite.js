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
  this.bisPlaying = true;
  for(var i = this.istart; i<=this.iend; i++) {
    if( this.bisPlaying ) {
      console.log(i);
    }
  }
  this.bisPlaying = false;
}

// Play through the animation once in reverse
SpriteAnim.prototype.Reverse = function() {
  this.bisPlaying = true;
  for(var i = this.iend; i>=this.istart; i--) {
    if( this.bisPlaying ) {
      console.log(i);
    }
  }
  this.bisPlaying = false;
}

// Stop animation
SpriteAnim.prototype.Stop = function() {
  this.bisPlaying = false;
}

// Test sprite code
var sprite = new Sprite("test","fake",32,32,16,16);
var spriteAnim = new SpriteAnim("testAnim", sprite, false, 1, 30, 30);

spriteAnim.Play();
spriteAnim.Reverse();