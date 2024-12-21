import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import errorHandler from "./middlewares/errorHandler.js";
import corsOptions from "./common/constant/cors.config.js";
import rootRouter from "./routes/root.router.js";

const app = express();

/**
 * Middleware
 */
app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(cookieParser());
app.use(express.json());

/**
 * Route
 */
app.use("/", rootRouter);

/**
 * Middleware error handler
 */
app.use(errorHandler);

export default app;
