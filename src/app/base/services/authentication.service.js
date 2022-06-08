import { isExpired } from "react-jwt";
import { LocalStorageService } from "./local-storage.service";

//will be removed after test http://jwtbuilder.jamiekurtz.com/
const testToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTQ2OTMxOTUsImV4cCI6MTY1NDY5NDM5NiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.wHZfrHLujUNRAQBHFmCoZBeIoKIhDm0yL7qwvpcSWA4";

const AuthService = {
  getAccessToken() {
    return LocalStorageService.getItem("atoken") || testToken; // will be null after test
  },

  getRefreshToken() {
    return LocalStorageService.getItem("rtoken") || testToken; // will be null after test;
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

  setUser(model) {
    LocalStorageService.setItem("user", JSON.stringify(model));
  },

  getUser() {
    if (this.isAuthenticated()) {
      return JSON.parse(this.LocalStorageService.getItem("user"));
    }
  },

  logout() {
    LocalStorageService.removeItem("atoken");
    LocalStorageService.removeItem("rtoken");
    LocalStorageService.removeItem("user");
  },
};

export default AuthService;
