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
  this.uWidth = uWidth;
  this.uHeight = uHeight;
  this.rows = rows;
  this.cols = cols;
}

var SpriteAnim = function(name, sprite, istart, iend, ifps) {
  this.name = name;
  this.sprite = sprite;
  this.start = start;
  this.end = end;
  this.fps = fps;
}

SpriteAnim.prototype.Play = function(bLoop) {

}