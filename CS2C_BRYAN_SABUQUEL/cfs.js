let name = "Sabuquel, Bryan Kenneth";
let address = "Calungbuyan, Lidlidd, Ilocos Sur";
let age = 22;
let classRole = "Student";
const course = "BSCS";
let password = "BSCSbryan123";

switch (course) {
  case "BSCS":
    if (classRole === "Student") {
      if (password.length >= 12 && password.includes(course)) {
        console.log(`Name: ${name}`);
        for (let i = 0; i < age; i++) {
          console.log(`Address: ${address}`);
        }
      } 
      else {
        console.log("Invalid password");
      }
    } 
    else {
      console.log("Default class role: Officer");
      console.log(`Name: ${name}`);
      for (let i = 0; i < age; i++) {
        console.log(`Address: ${address}`);
      }
    }
    
    break;
  case "BSM":
    if (classRole === "Teacher") {
      if (password.length >= 12 && password.includes(course)) {
        console.log(`Name: ${name}`);
        for (let i = 0; i < age; i++) {
          console.log(`Address: ${address}`);
        }
      } 
      else {
        console.log("Invalid password");
      }
    } 
    else {
      console.log("Default class role: Officer");
      console.log(`Name: ${name}`);
      for (let i = 0; i < age; i++) {
        console.log(`Address: ${address}`);
      }
    }
    
    break;
  case "BAEL":
    if (classRole === "Officer") {
      if (password.length >= 12 && password.includes(course)) {
        console.log(`Name: ${name}`);
        for (let i = 0; i < age; i++) {
          console.log(`Address: ${address}`);
        }
      } 
      else {
        console.log("Invalid password");
      }
    } 
    else {
      console.log("Default class role: Student");
      console.log(`Name: ${name}`);
      for (let i = 0; i < age; i++) {
        console.log(`Address: ${address}`);
      }
    }
    
    break;
  default:
    console.log("Invalid course");
}
