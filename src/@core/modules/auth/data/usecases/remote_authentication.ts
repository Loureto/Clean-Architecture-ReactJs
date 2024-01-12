import { InvalidCredentialsError } from "../../domain/errors/invalid_credentials_error";
import { UnexpectedError } from "../../domain/errors/unexpected_error";
import { AccountModel } from "../../domain/models";
import { Authentication, AuthenticationParams } from "../../domain/usecases";
import { HttpPostClient } from "../protocols/http/http_post_client";
import { HttpStatusCode } from "../protocols/http/http_response";

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;

      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
