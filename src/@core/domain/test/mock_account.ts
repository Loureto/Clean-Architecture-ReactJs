import { faker } from "@faker-js/faker";
import { AuthenticationParams } from "../usecases";
import { AccountModel } from "../models";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccount = (): AccountModel => ({
  accessToken: faker.string.uuid(),
});
