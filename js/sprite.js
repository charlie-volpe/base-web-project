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
  this.iuWidth = iuWidth;
  this.iuHeight = iuHeight;
  this.irows = irows;
  this.icols = icols;
}

var SpriteAnim = function(name, sprite, istart, iend, ispeed) {
  this.name = name;
  this.sprite = sprite;
  this.istart = istart;
  this.iend = iend;
  this.ispeed = ispeed;
}

SpriteAnim.prototype.Play = function(bLoop) {
  for(var i = this.istart; i<this.iend; i++) {

  }
}