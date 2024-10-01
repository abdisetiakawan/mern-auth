import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const userResponse = newUser.toObject();
    delete userResponse.password;
    res
      .status(201)
      .json({ message: "User registered successfully", user: userResponse });
  } catch (error) {
    next(error);
  }
};
