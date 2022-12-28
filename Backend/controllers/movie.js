import UserToken from "../models/UserToken";

let getHomepage = (req, res) => {
  return res.render("./index.ejs");
};

let getTrending = (req, res) => {
  return res.render("./trending.ejs");
};

// let getUser = (req, res) => {
//   let data = [];
//   UserToken.query(" SELECT * FROM * ", function (err, res, field) {
//     console.log("check data");
//     console.log(res);
//     data = res.map((row) => {
//       return row;
//     });
//     console.log(rows);
//   });
//   return res.render("./index.ejs", { dataUser: JSON.stringify(data) });
// };

module.exports = {
  getHomepage,
  getTrending,
};
