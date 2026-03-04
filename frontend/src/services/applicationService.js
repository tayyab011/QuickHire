import api from "./api";

export const applyJob = (data) => api.post("/applications", data);
