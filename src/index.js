import { eventoRoute } from "./routes/evento.js";
import cors from "cors";
import express from "express";
import morgan from "morgan";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.json());
app.use(express.static("./public"))
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.use("/evento", eventoRoute)

app.listen(3333, () => {
  console.log(`Server is running on http://localhost:${3333}`);
});
