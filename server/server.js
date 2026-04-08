import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDB from "./config/db.js";
import router from "./routes/authRoutes.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  }),
  cookieParser(),
  express.json()
);

connectToDB();

app.get("/", (req, res) => {
  res.json({ message: "Server is running!" })
});

app.use("/api/auth", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

