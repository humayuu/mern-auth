import { config } from "dotenv";
config({ path: "./.env" });

import express from "express";
import morgan from "morgan";
import dns from "dns";
import conn from "./src/Config/db.js";
import router from "./src/Routes/AuthRoutes.js";

dns.setDefaultResultOrder("ipv4first");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const port = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", router);

app.get("/", (req, res) => res.send("<h1>Auth Backend</h1>"));

// Start Server
const startServer = async () => {
  try {
    await conn();
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Something Went Wrong ", error);
  }
};

startServer();
