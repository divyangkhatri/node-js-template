import express from "express";
const cors = require("cors");
import logger from "morgan";
import * as path from "path";
import swaggerUi from "swagger-ui-express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

// Routes
import { swaggerObj, swaggerOptions } from "./swagger/swaggerDoc";
import { setUpRouting } from "./routes";
import { errorHandleForBadRequest } from "./middlewares/errorHandler";
import admin from "firebase-admin";
import { authMiddleware } from "./middlewares/authMiddleware";
// import * as firebaseService from "./services/firebase/firebase_service.json";

// Firebase Setup

// admin.initializeApp({
//     //@ts-ignore
//     credential: admin.credential.cert(firebaseService),
// });

// Create Express server
export const app = express();

//database connection
require("./database/db");

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 150, // Limit each IP to 150 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(logger("dev"));
app.use(
    "/swagger",
    swaggerUi.serve,
    swaggerUi.setup(swaggerObj, swaggerOptions),
);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(limiter);
// Midedleware for auth
app.use("/", authMiddleware);
app.get("/", (req, res) => res.send("Hellooooo"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(errorHandleForBadRequest);
setUpRouting(app);
