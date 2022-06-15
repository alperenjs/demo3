import { isExpired } from "react-jwt";
import { LocalStorageService } from "./local-storage.service";

//will be removed after test 
const testToken = "";

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
