var iceCream = [
  "peanut butter",
  "chocolate chip cookie dough",
  "strawberry"
];
iceCream.push("vanilla");

function pres (firstName, lastName, termLength, party, yearsOfPresidency) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.termLength = termLength;
  this.party = party;
  this.yearsOfPresidency  = yearsOfPresidency;
}

var Trump = new pres ('Donald', 'Trump', 1, 'Republican', 1);
var Obama = new pres ('Barack', 'Obama', 2, 'Democrat', 8);
var Bush2 = new pres ('George W', 'Bush', 2, 'Republican', 8);
var Clinton = new pres ('Bill', 'Clinton', 2, 'Democrat', 8);
var Bush1 = new pres ('George HW', 'Bush', 1, 'Republican', 4);

var presidents = [];

presidents.push(Trump);
presidents.push(Obama);
presidents.push(Bush2);
presidents.push(Clinton);
presidents.push(Bush1);

console.log (presidents[2].firstName + " " + presidents[2].lastName);
