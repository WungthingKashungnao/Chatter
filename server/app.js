const express = require("express"); //importin express package
const bcryptjs = require("bcryptjs"); //package to protect password
const jwt = require("jsonwebtoken");

const app = express();
// imported files created by me start
const serverConnect = require("./db/connection.js"); //file to connect to the databse ,the return value here is a function the connect function
const UserModel = require("./models/Users.js"); //this file contains User model
const Users = require("./models/Users.js");
// imported files created by me end

app.use(express.json()); //very important we need this to send json data, for the routes
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

// Routes
app.get("/", (req, res) => {
  res.send("Welcome!");
});
// Route to register start
app.post("/api/register", async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      res.status(400).send("Please enter all required fields");
    } else {
      const isAlreadyExist = await Users.findOne({ email: email });
      if (isAlreadyExist) {
        res.status(400).send("User already exists");
      } else {
        const newUser = new Users({ fullName, email });
        // protecting password uning bcrypt
        bcryptjs.hash(password, 10, (err, hashedPassword) => {
          newUser.set("password", hashedPassword);
          newUser.save();
          next();
        });
        return res.status(200).send("User registered successfully");
      }
    }
  } catch (err) {
    console.log(err, ":Error");
  }
});
// Route to register end
// Route to login start
app.post("/api/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send("Please enter all required fields");
    } else {
      const user = await Users.findOne({ email: email }); //checking if entered email is correct
      if (!user) {
        res.status(400).send("User email or password incorrect!");
      } else {
        const validateUser = await bcryptjs.compare(password, user.password); //checking if entered password is correct
        if (!validateUser) {
          res.status(400).send("User email or password incorrect");
        } else {
          const payload = {
            userId: user._id,
            email: user.email,
          };
          const JWT_SECRET_KEY =
            process.env.JWT_SECRET_KEY || "THIS_IS_A_JWT_SECRET_KEY";
          jwt.sign(
            payload,
            JWT_SECRET_KEY,
            { expiresIn: 84600 },
            async (err, token) => {
              await Users.updateOne({ _id: user._id }, { $set: { token } });
              user.save();
              next();
            }
          );
          res
            .status(200)
            .json({
              user: { email: user.email, fullName: user.fullName },
              token: user.token,
            });
        }
      }
    }
  } catch (err) {
    console.log(err, ":Error");
  }
});
// Route to login end

// starting the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  serverConnect(); //connecting to the remote mongodb databse
});
