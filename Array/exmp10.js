// Code 10: Update String using array and third variable. [Second Method]

let name = "Madam";
let output = "";
for(let i=0; i<name.length; i++) {
  if(i==0) {
    output = output + "N";
  } else {
    output = output + name[i];
  }
}
console.log(output); 