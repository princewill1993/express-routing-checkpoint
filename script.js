import timeCheck from "./timeCheckMiddleware.js";
import express from "express";
import fs from "fs";
const app = express();
const port = 5001;

app.use(express.static("public"));
app.use(timeCheck);

app.get("/", (req, res) => {
  fs.readFile("public/index.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .send("<h1>Sorry, server error occured</h1><br></br><p>Try again</p>");
    } else {
      return res.status(200).send(data);
    }
  });
});

app.get("/contact", (req, res) => {
  fs.readFile("public/contact.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .send(
          "<h1>Sorry, we couldn't reach the page</h1><br></br><p>Try again</p>"
        );
    } else {
      return res.status(200).send(data);
    }
  });
});

app.get("/service", (req, res) => {
  fs.readFile("public/service.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .send("<h1>Sorry, server error occured</h1><br></br><p>Try again</p>");
    } else {
      return res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log("Server started successfully"));
