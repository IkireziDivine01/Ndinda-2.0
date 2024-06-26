import axios from "axios";

export const BASE_URL = "https://dashboard.ndinda.rw";

const defaultOptions = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": true,
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

export const getAllCategories = async () => {
  const res = await ndinda_instance.get(`/api/categories`);
  return res.data;
};

export const getAllCohorts = async () => {
  const res = await ndinda_instance.get(`/api/cohorts`);
  return res.data;
}

export const getAllCohortsById = async (id:string) =>{
  const res = await ndinda_instance.get(`/api/cohorts/${id}`);
  return res.data;
}



export const getSomeProjects = async () => {
  try {
    const res = await ndinda_instance.get('/api/projects');
    const allProjects = res.data;
    const excludedIndices = [52, 51, 50, 49];
    // Filter out the projects with the specified indices
    const filteredProjects = allProjects.filter((_: any, id: number) => !excludedIndices.includes(id));

    return filteredProjects.reverse();
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error; // Rethrow the error after logging it
  }
};


export default ndinda_instance