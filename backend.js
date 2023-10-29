import express, { response } from "express";
import cors from "cors";
import { Router } from "express";
import { connection } from "./database.js";

const router = Router();
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  const query = "SELECT * FROM books";
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.log(err);
    } else {
      response.json(results);
    }
  });
});
;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});

// Under opbygning
// app.get("/books", (request, response) => {
//   response.
// })
