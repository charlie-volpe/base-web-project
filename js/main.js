/* main.js
*  
*  Author: Charlie Volpe Feb 5, 2016
*  
*  Description:
*  Base js file.
*/

// On Document Load
$(function(){
  Start();
});

function Start() {

}

// Called Every Cycle
window.setInterval(Tick,0);
var lastTick = Date.now();

function Tick() {
  var now = Date.now();
  var fdt = now - lastTick;
  lastTick = now;

  Update(fdt);
}

// Update with deltaTime
function Update(fdt) {

}