import userModel from "../models/userModel.js";

export const registerUserServices = async (data) => {
    try {
        // You might want to add validation here (e.g., check if email already exists)
        const existingUser = await userModel.findOne({ mobile:data.mobile });
        if (existingUser) {
            throw new Error('Mobile is already registered.');
        }


        // Create a new user instance
        let user1 = new userModel(data);

        // Save the user to the database
        await user1.save();
console.log(user1)
        return "success";

    } catch (error) {
        // Log the error for internal debugging
        console.error(error);

        // Return a more detailed error message to the controller
        throw new Error(`Error while registering user: ${error.message}`);
    }
};
