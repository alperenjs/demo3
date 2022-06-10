import { isExpired } from "react-jwt";
import { LocalStorageService } from "./local-storage.service";

//will be removed after test
// const testToken =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTQ3Nzg2MjgsImV4cCI6MTY4NjMxNDY0MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.ekzfK9YAF5md5f-F89PRuQquhzItJJpGFDNStzqnp8Y";
//http://jwtbuilder.jamiekurtz.com/

const AuthService = {
  getAccessToken() {
    return LocalStorageService.getItem("atoken") || null; // will be null after test
  },

  getRefreshToken() {
    return LocalStorageService.getItem("rtoken") || null; // will be null after test;
  },

  setTokens(aToken, rToken) {
    LocalStorageService.setItem("atoken", aToken);
    LocalStorageService.setItem("rtoken", rToken);
  },

  isTokenExpired() {
    const token = this.getAccessToken();

    if (token === null || token === "") {
      return true;
    } else {
      return isExpired(token);
    }
  },

  isAuthenticated() {
    const token = this.getAccessToken();

    return !isExpired(token);
  },

  isAuthorized(allowedRoles) {
    const user = AuthService.getUser();

    if (user?.roles?.find((role) => allowedRoles?.includes(role))) {
      return true;
    } else {
      return false;
    }
  },

  setUser(model) {
    LocalStorageService.setItem("user", model);
  },

  getUser() {
    if (this.isAuthenticated()) {
      return JSON.parse(LocalStorageService.getItem("user"));
    } else {
      return null;
    }
  },

  logout() {
    LocalStorageService.removeItem("atoken");
    LocalStorageService.removeItem("rtoken");
    LocalStorageService.removeItem("user");
  },
};

export default AuthService;
