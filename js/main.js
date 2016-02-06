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
  var dt = now - lastTick;
  lastTick = now;

  Update(dt);
}

// Update with deltaTime
function Update(dt) {

}