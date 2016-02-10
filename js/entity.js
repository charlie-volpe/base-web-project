/* entity.js
*  
*  Author: Volpe 2016
*  
*  Description:
*  Object oriented programming starter (oops).
*/

// Create basic Entity
var Entity = function(name) {
	this.name = name;
	console.log("Entity instatiated.");
}

// Give Entity a print name function
Entity.prototype.printName = function() {
	console.log(this.name);
}

// Test code
// var entity1 = new Entity('entity1');
// entity1.printName();