import axios from "axios";

const API_URL = "http://localhost:5000/api/ratings";

export const submitRating = async (ratingData) => {
  const response = await axios.post(`${API_URL}/submit`, ratingData);
  return response.data;
};

export const getRatings = async (companyId) => {
  const response = await axios.get(`${API_URL}/company/${companyId}`);
  return response.data;
};