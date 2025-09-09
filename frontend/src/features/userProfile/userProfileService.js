import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/profile";

// Get user profile
const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(API_URL, null, config);

    if (response.status === 200 && response.data.body) {
      localStorage.setItem("userProfile", JSON.stringify(response.data.body));
    }

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erreur lors du chargement du profil");
  }
};

// Update user profile
const updateProfile = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.put(API_URL, data, config);

    if (response.status === 200 && response.data) {
      localStorage.setItem("userProfile", JSON.stringify(response.data.body));
    }

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erreur lors de la mise à jour du profil");
  }
};

const userProfileService = {
  getProfile,
  updateProfile,
};

export default userProfileService;
