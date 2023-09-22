import axios from "axios";

// const API_URL = "http://localhost/l10_raker/api/";

// const API_URL = "http://localhost/laravel-db-evi-passport/api/";
const API_URL =import.meta.env.VITE_API_URL
class AuthService {
  login(user) {
    return axios
      .post(API_URL + "login", {
        email: user.email,
        password: user.password,
      })
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
