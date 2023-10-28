import express, { response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
    response.send("App running");
})

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});