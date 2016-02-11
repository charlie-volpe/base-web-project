/* state_enum.js
*  
*  Author: Charlie Volpe Feb 6, 2016
*  
*  Description:
*  Base for state machine. My original idea.
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
  var fdt = now - lastTick;
  lastTick = now;

  Update(fdt);
}

// Update with deltaTime
function Update(fdt) {
  UpdateState(fdt);
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
function UpdateState(fdt) {
  if( runState ) {
    if(currentState == BaseEnum.idle) {
      UpdateIdle(fdt);
    } else if (currentState == BaseEnum.init) {
      UpdateInit(fdt);
    }
  }
}

// Update for Idle
function UpdateIdle(fdt) {
  console.log("Update Idle");
}

// Update for Init
function UpdateInit(fdt) {
  console.log("Update Init");
}