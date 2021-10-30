import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";

const startApp = async () => {
  try {
    await connect();
    const port = config.get<number>("port");
    const app = express();

    app.use(express.json);

    routes(app);

    app.listen(1337, () => {
      logger.info(`App is running at http://localhost:${port}`);
    });
  } catch (e) {
    logger.error(e);
  }
};

startApp();
