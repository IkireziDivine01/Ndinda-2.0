import axios from "axios";

const BASE_URL = "http://146.190.198.148:3000";

const defaultOptions = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const ndinda_instance = axios.create(defaultOptions);

export const getAllConfigs = async () => {
    const res = await ndinda_instance.get(`/api/configs`);
    return res.data;
};

export const getAllPages = async () => {
    const res = await ndinda_instance.get(`/api/pages`);
    return res.data;
};

export const getAllProjects = async () => {
  const res = await ndinda_instance.get(`/api/projects`);
  return res.data;
};

export const getAllProjectsById = async (id:string) =>{
  const res = await ndinda_instance.get(`/api/projects/${id}`);
  return res.data;
};

export default ndinda_instance