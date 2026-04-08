import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

const loginUser = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  const user = await User.findOne({ email: email })
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const verifyPassword = await bcrypt.compare(password, user.password)
  if (!verifyPassword) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const exp = Number(process.env.TOKEN_TTL) * 60 * 1000;
  const token = jwt.sign(
    {
      sub: user._id,
      username: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: exp,
    }
  )
  return res.status(200).cookie("token", token, { httpOnly: true, maxAge: exp }).json({ message: "Login succesffuly!" });
}

export { registerUser, loginUser };
