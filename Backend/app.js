import express from "express";
import configViewEngine from "./configs/viewEngine";
import initRouter from "./routes/movie";
import Movies from "./models/Movies";
import UserToken from "./models/UserToken";

const app = express();
const port = process.env.PORT || 8000;

//setup view engine
configViewEngine(app);

//setup router
initRouter(app);

app.use((req, res) => {
  return res.status(404).render("404.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  // console.log(Movies);
  console.log(UserToken);
});
