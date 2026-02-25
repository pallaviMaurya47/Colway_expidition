import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

export const home = async (req, res)=>{
 try{
   return res.status(200).send("Welcome to Landing Page using controllers ");
 } catch(error) {
   console.error(error);
   return res.status(500).json({message:"Internal Server Error"});
 }
};

export const signUp = async (req, res) => {
    try {
      const { firstname, lastname, email, password, cnfmPassword } = req.body;
      if (password !== cnfmPassword) {
        return res.status(400).json({message: "Passwords do not match!"});
      }
      const ExistEmail =  await User.findOne({email});
      if (ExistEmail) {
        return res.status(400).json({message: "Email already exists !"})
      }
      const hassedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        firstname,
        lastname,
        email,
        password: hassedPassword,
        cnfmPassword: hassedPassword,
      });
      return res.status(201).json({
        message: "Account created successfully!",
        user: {
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message:"Internal Server Error"});
    }
}

export const login = async (req,res) => {
 try {
  const { email, password } = req.body;

  const userExist = await User.findOne({email});
  
  if (!userExist) {
    return res.status(400).json({ message: "Invalid email and Password"});
  }
  const userPassword = userExist.password;
  const isPasswordMatch = await bcrypt.compare(password, userPassword);

  if (!isPasswordMatch) {
    return res.status(400).json({ message: "Invalid password"});
  }
  console.log(req.body);

   return res.status(200).json({
     message: "Login successful!",
     user: {
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
     },
   });
 } catch(error) {
   console.error(error);

   return res.status(500).json({ message:"Internal Server Error"});
 }
};
