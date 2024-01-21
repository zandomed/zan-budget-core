import { LogLevel } from '@nestjs/common';

import { Environment } from './environment';

export interface EnvironmentVariables {
  port: number;
  NODE_ENV: Environment;
  logger: LogLevel;
  isProduction: boolean;
  isDevelopment: boolean;
  isTest: boolean;
}
