function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//console.log(greeter(user));
console.log(greeter(user.join(" "))); //Solution