import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// For User Signup
const userSignup = async (req, res) => {
  try {
    const { name, email, password, password_confirmation } = req.body;

    if (password !== password_confirmation) {
      return res.status(400).send({
        status: false,
        message: "Password and Confirm Password Must be Matched",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).send({
        status: false,
        message: "User Already Exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN },
    );

    return res.status(201).send({
      status: true,
      message: "Signup Successfully",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log("Something went wrong ", error);

    return res.status(500).send({
      status: false,
      message: "Internal Server Error",
    });
  }
};

// For User Login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(409).send({
        status: false,
        message: "Wrong email or password",
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(409).send({
        status: false,
        message: "Wrong email or password",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN },
    );

    return res.status(200).send({
      status: true,
      message: "Login Successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Something went wrong ", error);

    return res.status(500).send({
      status: false,
      message: "Internal Server Error",
    });
  }
};

export { userSignup, userLogin };
