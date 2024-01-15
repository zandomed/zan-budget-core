import * as Joi from 'joi';

import { Environment } from '../domain/Environment';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid(...Object.values(Environment))
    .default('development'),
  PORT: Joi.number().default(3000),
  LOGGER: Joi.string().valid(
    'debug',
    'error',
    'log',
    'verbose',
    'warn',
    'fatal'
  ),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_SCHEMA: Joi.string().required(),
  DATABASE_URL: Joi.string().required()
});
