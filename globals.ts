export interface AuthContextType {
  user: UserInfoResponse;
  login: (access_code: string) => void;
  logout: () => void;
}

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  scope: string;
  id_token: string;
  token_type: string;
  expires_in: number;
}

export interface UserInfoResponse {
  sub: string;
  aud: string[];
  nbf: number;
  scope: string[];
  iss: string;
  exp: number;
  iat: number;
  user: string;
  authorities: string[];
}
