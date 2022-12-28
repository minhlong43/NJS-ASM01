const Genre = {
  all: function () {
    return JSON.parse(
      fs.readFileSync("../data/genreList.json", "utf8", (err, jsString) => {
        console.log(jsString);
      })
    );
  },
};
