import { config as conf } from "dotenv";
conf();

//underscore for keeping the data private (best practice)
const _config = {
  PORT: process.env.PORT,
};

export const config = Object.freeze(_config);
