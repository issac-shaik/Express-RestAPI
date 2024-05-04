import { config as conf } from "dotenv";
conf();

//underscore for keeping the data private (best practice)
const _config = {
  PORT: process.env.PORT,
  databaseUrl: process.env.MONGO_CONNECTION_STRING,
  //checks if the app is running in dev or prod
  env: process.env.NODE_ENV,
};

export const config = Object.freeze(_config);
