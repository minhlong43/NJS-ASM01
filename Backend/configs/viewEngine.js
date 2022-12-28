import express from "express";

const configViewEngine = (app) => {
  app.use(express.static("./Backend/public"));

  app.set("view engine", "ejs");
  app.set("views", "./Backend/views");
};

export default configViewEngine;
