import { faker } from "@faker-js/faker";
import axios from "axios";

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.post.mockResolvedValue({
    data: faker.helpers.objectValue({ name: faker.person.fullName() }),
    status: faker.number.binary(),
  });

  return mockedAxios;
};
