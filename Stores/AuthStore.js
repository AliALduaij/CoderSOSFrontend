import { decorate, observable, computed } from "mobx";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";
import { instance } from "./instance";
import projectStore from "./ProjectStore";

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;

      this.user = null;
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("api/token/", userData);
      const data = res.data;

      await this.setUser(data.access);
      projectStore.fetchMyProjects();
      projectStore.fetchMyRequests();
      navigation.navigate("ProjectList");
    } catch (err) {
      console.error(err.response.data);
    }
  };
  logout = async navigation => {
    await this.setUser();
    navigation.navigate("Login");
    projectStore.fetchMyProjects();
  };

  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("register/", userData);
      const user = res.data;

      this.setUser(user.access);
      navigation.navigate("ProjectList");
      alert("Account Has Been Registered Successfully");
    } catch (err) {
      console.error(err.response.data);
    }
  };
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        await this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}
decorate(AuthStore, {
  user: observable
});
const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
