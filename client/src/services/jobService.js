import axios from "axios";

const API_URL = "http://localhost:5000/api/jobs";

export const createJob = async (jobData) => {
  const response = await axios.post(`${API_URL}/create`, jobData);
  return response.data;
};

export const getJobs = async () => {
  const response = await axios.get(`${API_URL}/list`);
  return response.data;
};