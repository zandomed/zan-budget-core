import { Environment } from '../domain/models/environment';
import { EnvironmentVariables } from '../domain/models/environment-variables';
import { LogLevel } from '../domain/models/log-level';

export default (): EnvironmentVariables => ({
  port: parseInt(process.env.PORT || '3000', 10),
  NODE_ENV: (process.env.NODE_ENV as Environment) || Environment.Development,
  logger: (process.env.LOGGER as LogLevel) || LogLevel.DEBUG,
  isProduction: process.env.NODE_ENV === Environment.Production,
  isDevelopment: process.env.NODE_ENV === Environment.Development,
  isTest: process.env.NODE_ENV === Environment.Test
});
