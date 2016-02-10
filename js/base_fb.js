/* base_fb.js
*  
*  Author: Volpe 2016
*  
*  Description:
*  Base for state machine. Tweaked from feedback.
*/

function State(name) {
    Entity.call(this, name);
}

State.prototype = Object.create(Entity.prototype);

State.prototype.constructor = State;

State.prototype.printName = function() {
    console.log(this.name + "_state");
}

var state1 = new State('idle');
state1.printName();