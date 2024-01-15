import { LogLevel } from '@nestjs/common';

import { Environment } from '../domain/Environment';
import { EnvironmentVariables } from '../domain/EnvironmentVariables';

export default (): EnvironmentVariables => ({
  port: parseInt(process.env.PORT || '3000', 10),
  NODE_ENV: (process.env.NODE_ENV as Environment) || Environment.Development,
  logger: (process.env.LOGGER as LogLevel) || 'debug',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  isTest: process.env.NODE_ENV === 'test'
});
