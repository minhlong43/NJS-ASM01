// const UserToken = {
//   all: function () {
//     return JSON.parse(fs.readFileSync("../data/userToken.json", "utf8"));
//   },
// };

const fs = require("fs");
const path = require("path");

module.exports = class User {
  constructor(t) {
    this.title = t;
  }
  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "userToken.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let usertoken = [];
      if (!err) {
        usertoken = JSON.parse(fileContent);
      }
      product.push(this);
      fs.writeFile(p, JSON.stringify(usertoken));
      console.log(err);
    });
  }
  static fetchAll() {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return [];
      }
      return JSON.parse(fileContent);
    });
    return usertoken;
  }
};
