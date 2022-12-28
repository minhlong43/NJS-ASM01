const Videos = {
  all: function () {
    return JSON.parse(fs.readFileSync("../data/videoList.json", "utf8"));
  },
};
