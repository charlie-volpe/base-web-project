/* oops.js
*  
*  Author: Charlie Volpe Feb 10, 2016
*  
*  Description:
*  Object oriented programming starter (oops).
*/

// Create basic Entity
var Entity = function(name) {
  this.name = name;
}

// Give Entity a print name function
Entity.prototype.printName = function() {
  console.log(this.name);
}

// Test Entity
var entity1 = new Entity('nepotist');
entity1.printName();



// Inherited from Entity
function Inherited(name, type) {
  Entity.call(this, name);
  this.type = type;
}

Inherited.prototype = Object.create(Entity.prototype);
Inherited.prototype.constructor = Inherited;

Inherited.prototype.printName = function() {
  console.log(this.name + " of type: " + this.type);
}

// Test Inherited
var inherited1 = new Inherited('nepotee', 'inherited');
inherited1.printName();