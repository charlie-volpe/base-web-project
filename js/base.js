var BaseEnum = {
  idle: 0,
  init: 1,
  names: {
    0: "idle",
    1: "init"
  }
}

var currentState;
var runState = false;

$(function() {
  Start();
});

// On Document Load
function Start() {
  EnterState(BaseEnum.idle);
}


window.setInterval(Tick, 0);
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

function EnterIdle() {
  console.log("Enter Idle");
  setTimeout(function() {
    SwitchState(BaseEnum.init);
  },1000);
}

function EnterInit() {
  console.log("Enter Init");
  setTimeout(function() {
    ExitState();
  },1000);
}

function ExitState() {
  runState = false;
  console.log("Exiting: " + BaseEnum.names[currentState]);
}

function SwitchState(baseEnum) {
  ExitState();
  EnterState(baseEnum);
}

function UpdateState(dt) {
  if( runState ) {
    if(currentState == BaseEnum.idle) {
      UpdateIdle(dt);
    } else if (currentState == BaseEnum.init) {
      UpdateInit(dt);
    }
  }
}

function UpdateIdle(dt) {
  console.log("Update Idle");
}

function UpdateInit(dt) {
  console.log("Update Init");
}