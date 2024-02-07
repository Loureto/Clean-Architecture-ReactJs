import { AccountModel } from "../models/account_model";

export type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(authentication: AuthenticationParams): Promise<AccountModel>;
}
