import axios from "axios";

const BASE_URL = "https://shl-backend-rtjg.onrender.com";

export const fetchRecommendations = async (query) => {
  return axios.post(`${BASE_URL}/recommend`, {
    query,
  });
};
