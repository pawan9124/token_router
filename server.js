/* Server to run the gmail parser */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

/* Configuration */

const app = express();
const port = process.env.PORT || 8080;
const __dirname = path.resolve();

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 1000000,
  })
);
app.use(bodyParser.json({ limit: "50mb", extended: true }));
//Passport middleware
app.use(cors());

app.use("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

/* Listeing to the port */
app.listen(port, () => {
  console.log(`The port is listenting on :${port}`);
});
