// Update Strings Code 9: Update String using array and third variable. [First Method]

let name = "Superman";
let name2 = [];
for(let i=0; i<name.length; i++) {
  name2.push(name[i]);
}
name2[0] = "N";
let bag = "";
for(let i=0; i<name2.length; i++) {
  bag = bag + name2[i];
}
console.log(bag);
