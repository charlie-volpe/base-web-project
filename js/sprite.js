/* sprite.js
*  
*  Author: Charlie Volpe Feb 11, 2016
*  
*  Description:
*  Sprite object and animation.
*/


// Create Sprite Object
var Sprite = function(name, url, uWidth, uHeight, rows, cols) {
  this.name = name;
  this.url = url;
  this.uWidth = uWidth;
  this.uHeight = uHeight;
  this.rows = rows;
  this.cols = cols;
}

var SpriteAnim = function(name, sprite, start, end) {
  
}