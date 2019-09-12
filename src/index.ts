import { prop } from "ramda";

interface User {
  name: string;
  age: number;
}

const user = {
  name: "foo2",
  age: 1
};
const name = prop("name")(user);
console.log(name);
