import User from "../model/User.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body

  const user = await User.findOne({ email: email });

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ name: name, email: email, password: hashedPassword });

  return res.status(201).json({ name: name, email: email });
}

export default registerUser;
