import { App } from "./loaders/app";
// import { env } from "./loaders/env";
// import { logger } from "./utils/Logger";
// import PostCron from "./cron/PostCron";
try {
  const app = new App();
  const port = 9500;
//   const port: number = env.app.port;
//   PostCron.start();
  app.init(port);
} catch (error) {
//   logger.error(error);
}
