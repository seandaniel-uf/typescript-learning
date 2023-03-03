// axios comes with types already
import axios from "axios";

// have to install types for lodash package
// npm install --save @types/lodash
// (save--dev) as this is local only!
// need to find a library's types? - https://github.com/DefinitelyTyped/DefinitelyTyped
import _ from "lodash";

_.sample([45, 433, 44, 233, 3333]);

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// single user endpoint
axios
  // the type we pass in, will be the type we expect back
  .get<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log("API Fetched Succesfully");
    const { data } = res;
    // res.data matches User type
    printUser(res.data);
  })
  .catch((e) => {
    console.log("Error", e);
  });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}

axios
  // the type we pass in, will be the type we expect back
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("API Fetched Succesfully");
    const { data } = res;
    // res.data matches User array type
    // res.data.forEach((user) => {
    //   printUser2(user);
    // });

    res.data.forEach(printUser2);
  })
  .catch((e) => {
    console.log("Error", e);
  });

function printUser2(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}
