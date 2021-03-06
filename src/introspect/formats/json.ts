import { OAuth2Token } from '../../oauth2/types';
import { PrivilegeMap } from '../../privilege/types';

export function accessToken(token: OAuth2Token, privileges: PrivilegeMap) {

  return {
    active: true,
    scope: Object.values(privileges).join(' '),
    client_id: token.clientId,
    username: token.user.nickname,
    token_type: 'bearer',
    exp: token.accessTokenExpires,
  };

}

export function refreshToken(token: OAuth2Token, privileges: PrivilegeMap) {

  return {
    active: true,
    scope: Object.values(privileges).join(' '),
    client_id: token.clientId,
    username: token.user.nickname,
    token_type: 'refresh_token',
  };

}

export function inactive() {

  return {
    active: false
  };

}
