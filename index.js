const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./docs");
const constructRouter = require("./routes/constructs");
const userRouter = require("./routes/users");
const Moralis = require("moralis/node");
const config = require("./config");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(cors());
app.options('*', cors()) // include before other routes

app.use(async function (req, res, next) {
  if (!global.currentUser) {
    await login();
  }

  next();
});

app.use("/", constructRouter);
app.use("/users", userRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//initialize the app.
async function initialize() {
  // Initial server settings
  Moralis.initialize(config.MORALIS_APP_ID);
  Moralis.serverURL = config.MORALIS_SERVER_URL;
  Moralis.User.enableUnsafeCurrentUser();

  await login();
  app.listen(PORT);
}

initialize().finally(() => console.log(`app started on port:${PORT}`));

async function login() {
  try {
    global.currentUser = await Moralis.User.logIn(
      "swagger@gmail.com",
      "Abc12345@@"
    );
  } catch (e) {
    console.log(e.message);
  }
}
