const {UsersModel} = require("../model/UsersModel");
const { createSecretToken } = require("../SecretToken");
const  bcrypt  = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.Signup = async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password, username } = req.body;
    const existingUser = await UsersModel.findOne({ email });

    if(existingUser) {
      return res.status(409).json({ message: "User already Exixts" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const User = await UsersModel.create({
    email,
    username,
    password: hashedPassword,
    createdAt: new Date(),
    });


    console.log(User);

    const token = createSecretToken(User._id);
    console.log("Generated Token:", token);
    res.cookie("token", token, {
  httpOnly: true,              // secure from client-side JS
  sameSite: "None",             // or "None" if using HTTPS and cross-domain
  secure: true,               // set to true in production with HTTPS
  maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
});
    res.status(200).json({ message: "User Signed in Sucessfully", success: true });

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports.Login = async(req, res, next)=>{
  console.log(req.body);
  try{
    const {email, password} = req.body;
    if(!email || !password){
      return res.status(400).json({message: "All Fields are required"})
    }

    const User = await UsersModel.findOne({ email:email  });

    if(!User){
      return res.status(401).json({message:"Incorrect Password or Email"});
    }

    const auth = await bcrypt.compare(password,User.password)

    if (!auth) {
      return res.status(401).json({message:'Incorrect password or email' }) 
    }

    const token = createSecretToken(User._id);
     res.cookie("token", token, {
  httpOnly: true,              // secure from client-side JS
  sameSite: "None",             // or "None" if using HTTPS and cross-domain
  secure: true,               // set to true in production with HTTPS
  maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
});
     res.status(200).json({ message: "User logged in successfully", success: true });
     next()
  } catch(err){
    console.error(err);
  }
}

module.exports.verifyUser = (req, res)=>{
  const token = req.cookies.token;

  console.log(req.cookies.token)
  if (!token) {
    return res.json({ success: false, message: "No token provided" });
    // return res.json(req.cookies)
  }

  try {
    console.log("TOKEN FROM COOKIE:", token);
    console.log("TOKEN_KEY:", process.env.TOKEN_KEY);


    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    return res.json({ success: true, user: decoded });
  } catch (err) {
    console.error("JWT VERIFY ERROR:", err.message);
    return res.json({ success: false, message: "Invalid token" });
  }
}

module.exports.logoutUser = (req, res) =>{
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "None",
    secure: true, // true in production with HTTPS
  });
  return res.json({ success: true, message: "Logged out" });
}