/* base_fb.js
*  
*  Author: Volpe 2016
*  
*  Description:
*  Base for state machine. Tweaked from feedback.
*/

var State = function(name) {
    this.name = name;
}

State.prototype.Enter = function() {
    console.log(this.name + " :: Enter()");
}

State.prototype.Update = function() {
    console.log(this.name + " :: Update()");
}

State.prototype.Exit = function() {
    console.log(this.name + " :: Exit()");
}

var idleState = new State('idle');
var initState = new State('init');

var currentState = idleState;
var runState = false;

// On Document Load
$(function() {
  Start();
});

// Start
function Start() {
  EnterState();
  
  setTimeout(function() {
    SwitchState(initState);
    
    setTimeout(function() {
      ExitState();
    },1000);
  
  },1000);
  
}

// Called Every Cycle
window.setInterval(Tick, 0);
var lastTick = Date.now();

function Tick() {
  var now = Date.now();
  var dt = now - lastTick;
  lastTick = now;

  Update(dt);
}

// Update with deltaTime
function Update(dt) {
  UpdateState(dt);
}

// States
function EnterState() {
  currentState.Enter();
  runState = true;
}

// States Update
function UpdateState(dt) {
  if( runState ) {
    currentState.Update();
  }
}

// Exit state - stop running
function ExitState() {
  runState = false;
  currentState.Exit();
}

// Switch from Current state to new State
function SwitchState(newState) {
  ExitState();
  currentState = newState;
  EnterState();
}