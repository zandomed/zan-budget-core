import { LogLevel } from '@nestjs/common';

import { Environment } from './Environment';

export interface EnvironmentVariables {
  port: number;
  NODE_ENV: Environment;
  logger: LogLevel;
  isProduction: boolean;
  isDevelopment: boolean;
  isTest: boolean;
}
