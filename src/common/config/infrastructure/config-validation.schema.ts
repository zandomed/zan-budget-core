import * as Joi from 'joi';

import { Environment } from '../domain/models/environment';
import { LogLevel } from '../domain/models/log-level';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid(...Object.values(Environment))
    .required(),
  PORT: Joi.number().required(),
  LOGGER: Joi.string()
    .valid(...Object.values(LogLevel))
    .required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_SCHEMA: Joi.string().required(),
  DATABASE_URL: Joi.string().required()
});
