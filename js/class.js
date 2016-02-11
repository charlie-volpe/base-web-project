/* class.js
*  
*  Author: Volpe 2016
*  
*  Description:
*  Testing out classes in js.
*/

// Classes must be used in strict mode... makes
// me thing that objects might be a better option.
"use strict";
// Although only Opera Mini of the current browsers doesn't have support.
// http://caniuse.com/#feat=use-strict

// Base class
class Thing {
    constructor(name) {
        this.name = name;
    }
    
    printName() {
        console.log(this.name);
    }
}

// Inherited class
class Doop extends Thing {
    printName() {
        // Calls parent version
        super.printName();
        
        console.log("doop!");
    }
}

// Test the different classes
var thing1 = new Thing('thing1');
thing1.printName();

var thing2 = new Doop('thing2');
thing2.printName();