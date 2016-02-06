$(function(){
  Start();
});

// On Document Load
function Start() {
  
}


window.setInterval(Tick,0);
var lastTick = Date.now();

// Called Every Cycle
function Tick() {
  var now = Date.now();
  var dt = now - lastTick;
  lastTick = now;
  
  Update(dt);
}

// Update with deltaTime
function Update(dt) {
  
}