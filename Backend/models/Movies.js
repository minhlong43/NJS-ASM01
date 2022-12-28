const Movies = {
  all: function () {
    return JSON.parse(fs.readFileSync("../data/movieList.json", "utf8"));
  },
};
