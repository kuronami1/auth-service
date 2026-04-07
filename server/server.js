import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(cors(), cookieParser(), express.json())

app.get("/", (req, res) => {
  res.json({ message: "Server is running!" })
});


app.listen(PORT, () => {
  console.log(`Server is running on port 5000`)
})
