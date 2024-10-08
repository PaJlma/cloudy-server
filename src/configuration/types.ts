export interface IConfig {
  port: number;
  mongoUri: string;
  origin: string;
  accessSecret: string;
  accessExpires: string;
  refreshSecret: string;
  refreshExpires: string;
}

interface IConfigurationReturns {
  app: IConfig;
}

export type Configuration = () => IConfigurationReturns;
