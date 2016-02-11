/* state_obj.js
*  
*  Author: Volpe 2016
*  
*  Description:
*  Base for state machine. Tweaked from feedback.
*/

// Base state object
var State = function(name) {
    this.name = name;
}

// State functions
State.prototype.Enter = function() {
    console.log(this.name + " :: Enter()");
}

State.prototype.Update = function() {
    console.log(this.name + " :: Update()");
}

State.prototype.Exit = function() {
    console.log(this.name + " :: Exit()");
}

// Idle State & Functions
var idleState = new State('idle');

idleState.Enter = function() {
  State.prototype.Enter.call(this);
  // New code here
  console.log("ENTER IDLE ONLY!!!");
}

idleState.Update = function() {
  State.prototype.Update.call(this);
  // New code here
}

idleState.Exit = function() {
  State.prototype.Update.call(this);
  // New code here
}

// Init State & Functions
var initState = new State('init');

initState.Enter = function() {
  State.prototype.Enter.call(this);
  // New code here
  console.log("SPECIAL IN INIT!!!");
}

initState.Update = function() {
  State.prototype.Update.call(this);
  // New code here
}

initState.Exit = function() {
  State.prototype.Update.call(this);
  // New code here
}

// State member variables
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

// State change functions
// States Enter
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