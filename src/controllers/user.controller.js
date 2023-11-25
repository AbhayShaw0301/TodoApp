const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const user = require("../../constant/user");
const registerUser = async (req, res) => {
  const username = req.body.name;
  const email = req.body.email;
  const passwordRaw = req.body.password;
  const userId = uuidv4();
  try {
    const passwordHashed = await bcrypt.hash(passwordRaw, 10);
    const newUser = {
      username: username,
      email: email,
      password: passwordHashed,
      id: userId,
    };

    user.push(newUser);

    res
      .status(201)
      .json({ message: "New User Created Successfully", user: newUser });
  } catch (error) {
    console.log(error);
  }
};

const LoginUser = async (req, res) => {
  const username = req.body.name;
  const password = req.body.password;

  try {
    const foundUser = user.find((u) => u.username === username);

    if (!foundUser) {
      return res
        .status(401)
        .json({ message: "Invalid username/email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (passwordMatch) {
      req.session.user = {
        id: foundUser.id, 
        username: foundUser.username,
        email: foundUser.email,
      };
     
      return res
        .status(200)
        .json({ message: "Login successful", user: foundUser });
    } else {
      return res
        .status(401)
        .json({ message: "Invalid username/email or password" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { registerUser, LoginUser };
