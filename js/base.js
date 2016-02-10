/* base.js
*  
*  Author: Volpe 2016
*  
*  Description:
*  Base for state machine.
*/

// State Enum
var BaseEnum = {
  idle: 0,
  init: 1,
  names: {
    0: "idle",
    1: "init"
  }
}

// State Member Variables
var currentState;
var runState = false;

// On Document Load
$(function() {
  Start();
});

// Start
function Start() {
  EnterState(BaseEnum.idle);
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
function EnterState(baseEnum) {
  currentState = baseEnum;
  if(baseEnum == BaseEnum.idle) {
    EnterIdle();
  } else if (baseEnum == BaseEnum.init) {
    EnterInit();
  }
  runState = true;
}

// Start Function for Idle
function EnterIdle() {
  console.log("Enter Idle");
  setTimeout(function() {
    SwitchState(BaseEnum.init);
  },1000);
}

// Start Function for Init
function EnterInit() {
  console.log("Enter Init");
  setTimeout(function() {
    ExitState();
  },1000);
}

// Exit state - stop running
function ExitState() {
  runState = false;
  console.log("Exiting: " + BaseEnum.names[currentState]);
}

// Switch from Current state to new State
function SwitchState(baseEnum) {
  ExitState();
  EnterState(baseEnum);
}

// States Update
function UpdateState(dt) {
  if( runState ) {
    if(currentState == BaseEnum.idle) {
      UpdateIdle(dt);
    } else if (currentState == BaseEnum.init) {
      UpdateInit(dt);
    }
  }
}

// Update for Idle
function UpdateIdle(dt) {
  console.log("Update Idle");
}

// Update for Init
function UpdateInit(dt) {
  console.log("Update Init");
}