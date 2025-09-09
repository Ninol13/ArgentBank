import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

// Register user
const register = async (userData) => {
  try {
    const response = await axios.post(API_URL + "signup", userData);

    if (response.status === 200 && response.data) {
      localStorage.setItem("token", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    // Ne rien stocker si le serveur échoue
    throw new Error(error.response?.data?.message || "Erreur lors de l'inscription");
  }
};

// Login user
const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + "login", userData);

    if (response.status === 200 && response.data) {
      localStorage.setItem("token", JSON.stringify(response.data.body.token));
    }

    return response.data.body.token;
  } catch (error) {
    // Ne rien stocker si le serveur échoue
    throw new Error(error.response?.data?.message || "Erreur lors de la connexion");
  }
};

// Logout user
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userProfile");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
