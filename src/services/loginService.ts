// api/loginClient.ts
import APIClient from "./api-client";

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

class LoginClient extends APIClient<LoginResponse> {
  constructor() {
    super("/login");
  }

  login = (data: LoginData): Promise<LoginResponse> => {
    return this.post<LoginData, LoginResponse>(data);
  };
}

export default new LoginClient();
