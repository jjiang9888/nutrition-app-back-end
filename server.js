import db from "./db/connection.js";
import express from 'express';
import cors from 'cors';
import logger from "morgan";
import chalk from "chalk";
import routes from "./Routes/Index.js";

const app =express();
//we need to add the port that railway will use to deploy our project
const PORT =process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/", routes);


db.on("connected", () => {
    console.clear();
    console.log(chalk.blue("Connected to MongoDB!"));
    //add the new port for the railway below
    app.listen(PORT, () => {
      console.log(
        `Express server is running in development on port ${PORT}`
      );
    });
  });