import express, { response } from "express";
import cors from "cors";
import { request } from "http";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
    response.send("https://refactoring.guru/design-patterns/singleton/typescript/example#example-0");
})

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});