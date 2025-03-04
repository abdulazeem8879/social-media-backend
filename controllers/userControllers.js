import { hashCreating } from "../auth/authentication.js";
import { registerUserServices } from "../services/userServices.js";

export const registerController = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  if (!name || !email || !mobile || !password) {
    return res.status(400).json({
      message: "All fields are required.",
    });
  }

  try {
    const hashedPassowrd = await hashCreating(password);
    const user = await registerUserServices({
      name,
      email,
      mobile,
      password: hashedPassowrd,
    });
    if (user == "success") {
      res
        .json({
          message: "register user succesfully",
        })
        .status(201);
    } else {
      res
        .json({
          message: "already registered ",
        })
        .status(401);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        error.message || "Internal server error, please try again later.",
    });
  }
};

export const loginUserController = async (req, res) => {};
