import { registerUserServices } from "../services/userServices.js";

export const registerController = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  if (!name || !email || !mobile || !password) {
    return res.status(400).json({
      message: "All fields are required.",
    });
  }

  try {
    const user = await registerUserServices(req.body);
    res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        error.message || "Internal server error, please try again later.",
    });
  }
};
